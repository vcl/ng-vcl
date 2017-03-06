import { NgModule, EventEmitter, Output, Directive, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/skipUntil';

@Directive({
  selector: '[offClick]',
})
export class OffClickDirective {
  @Output('offClick')
  offClick = new EventEmitter();

  private sub: Subscription;

  constructor(private elem: ElementRef) { }

  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      // Add a small delay, so any click that causes this directive to render does not trigger an off-click
      const delay$ =  Observable.timer(0).first();
      this.sub = Observable.fromEvent<Event>(document, 'click')
                           .skipUntil(delay$)
                           .subscribe(ev => {
        const me = this.elem.nativeElement;
        // Check if the target is the off-clicks element or an sub element
        if (ev.target && me !== ev.target && !me.contains(ev.target)) {
          this.offClick.emit();
        }
      });
    }
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }
}
