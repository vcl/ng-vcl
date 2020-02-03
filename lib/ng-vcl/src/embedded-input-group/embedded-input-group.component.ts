import { Component, ContentChildren, QueryList, HostBinding, ElementRef, AfterContentInit, Renderer2, OnDestroy, ChangeDetectionStrategy, ContentChild, Inject, Optional, forwardRef, AfterViewInit } from '@angular/core';
import { InputDirective } from '../input/index';
import { merge, Subscription, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { PrependDirective, AppendDirective } from '../core/index';
import { FORM_CONTROL_INPUT } from '../form-control-group/index';
import { FORM_CONTROL_MATERIAL_INPUT, FormControlMaterialInput, FORM_CONTROL_MATERIAL_HOST, FormControlMaterialHost } from '../material-design-inputs/index';

@Component({
  selector: 'vcl-embedded-input-group',
  templateUrl: 'embedded-input-group.component.html',
  exportAs: 'vclEmbeddedInputGroup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: FORM_CONTROL_INPUT,
      useExisting: forwardRef(() => EmbeddedInputGroupComponent)
    },
    {
      provide: FORM_CONTROL_MATERIAL_INPUT,
      useExisting: forwardRef(() => EmbeddedInputGroupComponent)
    }
  ]
})
export class EmbeddedInputGroupComponent implements AfterContentInit, AfterViewInit, OnDestroy, FormControlMaterialInput {

  private sub?: Subscription;

  constructor(
    private renderer: Renderer2,
    @Optional()
    @Inject(FORM_CONTROL_MATERIAL_HOST)
    private formControlMaterialHost?: FormControlMaterialHost,
  ) { 
    if (this.formControlMaterialHost) {
      this.formControlMaterialHost.registerInput(this);
    }
  }

  private stateChangedEmitter = new Subject<void>();
  controlType = 'embedded-input-group';

  get stateChanged() {
    return this.stateChangedEmitter.asObservable();
  }
  get elementId() {
    return this.input.elementId;
  }
  get isDisabled() {
    return this.input.isDisabled;
  }
  get isFocused() {
    return this.input.isFocused;
  }
  get hasError() {
    return this.input.hasError;
  }
  get ngControl() {
    return this.input.ngControl;
  }
  get value() {
    return this.input.value;
  }
  get isLabelFloating() {
    return this.input.isLabelFloating;
  }
  get materialModifierClass() {
    return this.prepend.length > 0 ? 'material-input-group-emb-prep-item' : undefined;
  }

  @HostBinding('class.input-group-emb')
  _hostClasses = true;

  @ContentChildren(PrependDirective, { read: ElementRef })
  prepend?: QueryList<ElementRef<HTMLElement>>;

  @ContentChildren(AppendDirective, { read: ElementRef })
  append?: QueryList<ElementRef<HTMLElement>>;

  @ContentChild(InputDirective, { read: InputDirective })
  input?: InputDirective;

  onLabelClick(event: Event): void {
    this.input.onLabelClick(event);
  }

  ngAfterContentInit(): void {
    this.sub = merge(this.prepend.changes, this.append.changes).pipe(startWith(undefined)).subscribe(() => {
      this.prepend.forEach(el => this.renderer.addClass(el.nativeElement, 'prepended'));
      if (this.prepend.length > 0) {
        this.renderer.addClass(this.input.elementRef.nativeElement, 'prep-item');
      }
      this.append.forEach(el => this.renderer.addClass(el.nativeElement, 'appended'));
      if (this.append.length > 0)  {
        this.renderer.addClass(this.input.elementRef.nativeElement, 'app-item');
      }
      this.stateChangedEmitter.next();
    });
  }

  ngAfterViewInit() {
    this.input.stateChanged.subscribe(this.stateChangedEmitter);
  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }
}
