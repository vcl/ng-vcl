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
      // Add a small delay, so the current click does not trigger the off-click
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

