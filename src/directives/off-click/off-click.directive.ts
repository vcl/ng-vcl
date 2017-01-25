import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/fromEvent';
import { NgModule, EventEmitter, Output, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[off-click]',
})
export class OffClickDirective {
  @Output('off-click')
  offClick = new EventEmitter();

  private sub: Subscription;

  constructor(private elem: ElementRef) { }

  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      // A workaround for touch/or emulated touch chrome
      // Sometimes chrome has the wrong event target when an element is rendered over or near the
      // tap's source element within a short time period (about 30ms)
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=399761

      // Add a small delay, so any click that causes this directive to render, does not trigger an off-click
      // This does not resolve the problem when a later tap inside the element should not trigger the offClick,
      // but the events target is wrong
      const delay$ =  Observable.timer(50).first();

      this.sub = Observable.fromEvent<any>(document, 'click')
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

