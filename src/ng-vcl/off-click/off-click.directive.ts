import { NgModule, EventEmitter, Output, Input, Directive, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/skipUntil';
import 'rxjs/add/operator/first';

@Directive({
  selector: '[offClick]',
})
export class OffClickDirective {

  @Input()
  offClickDelay = 10;

  @Input()
  offClickExcludes?: (ElementRef | Element)[];

  @Output('offClick')
  offClick = new EventEmitter();

  private sub: Subscription;

  constructor(private elem: ElementRef) { }

  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      // Add a small delay, so any click that causes this directive to render does not trigger an off-click
      const delay$ =  Observable.timer(this.offClickDelay).first();
      this.sub = Observable.fromEvent<Event>(document, 'click')
                           .skipUntil(delay$)
                           .subscribe(ev => {
        const me = this.elem.nativeElement as Element;
        // Check that the target is not the off-clicks target element or any sub element

        const excludes = [
          me,
          ...(this.offClickExcludes || []).map(e => e instanceof ElementRef ? e.nativeElement : e).filter(e => e instanceof Element) as Element[]
        ];

        if (ev.target && excludes.every(e => e !== ev.target && !e.contains(ev.target as any))) {
          this.offClick.emit();
        }
      });
    }
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }
}
