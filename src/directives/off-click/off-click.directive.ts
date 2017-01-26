import { NgModule, EventEmitter, Output, Directive, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/fromEventPattern';
import * as Hammer from 'hammerjs';

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
      let mc = new Hammer.Manager(document);
      mc.add( new Hammer.Tap({ event: 'singletap' }) );

      this.sub = Observable.fromEventPattern<any>(
        handler => mc.on('singletap', handler),
        handler => mc.off('singletap', handler)
      ).subscribe(ev => {
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

