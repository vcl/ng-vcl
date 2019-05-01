import { Component, Input, ContentChildren, forwardRef, QueryList, HostBinding, Directive, ElementRef, ContentChild, AfterContentInit, Renderer2, OnDestroy } from '@angular/core';
import { EMBEDDED_INPUT_GROUP_TOKEN, EmbeddedInputGroup } from './interfaces';
import { InputDirective } from '../input/index';
import { merge, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { PrependDirective, AppendDirective } from '../core/index';

@Component({
  selector: 'vcl-embedded-input-group',
  templateUrl: 'embedded-input-group.component.html',
  exportAs: 'vclEmbeddedInputGroup',
  providers: [
    {
      provide: EMBEDDED_INPUT_GROUP_TOKEN,
      useExisting: forwardRef(() => EmbeddedInputGroupComponent)
    }
  ]
})
export class EmbeddedInputGroupComponent implements AfterContentInit, OnDestroy {

  private sub?: Subscription;

  constructor( private renderer: Renderer2) { }

  @HostBinding('class.vclInputGroupEmb')
  classVCLInputGroupEmb = true;

  @ContentChildren(PrependDirective, { read: ElementRef })
  prepend?: QueryList<ElementRef<HTMLElement>>;

  @ContentChildren(AppendDirective, { read: ElementRef })
  append?: QueryList<ElementRef<HTMLElement>>;

  @ContentChildren(InputDirective, { read: ElementRef })
  input?: QueryList<ElementRef<HTMLElement>>;

  ngAfterContentInit(): void {
    this.sub = merge(this.input.changes, this.prepend.changes, this.append.changes).pipe(startWith(undefined)).subscribe(() => {
      this.prepend.forEach(el => this.renderer.addClass(el.nativeElement, 'vclPrepended'));
      if (this.prepend.length > 0) {
        this.input.forEach(el => this.renderer.addClass(el.nativeElement, 'vclPrepItem'));
      }
      this.append.forEach(el => this.renderer.addClass(el.nativeElement, 'vclAppended'));
      if (this.append.length > 0) {
        this.input.forEach(el => this.renderer.addClass(el.nativeElement, 'vclAppItem'));
      }
    });
  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }
}
