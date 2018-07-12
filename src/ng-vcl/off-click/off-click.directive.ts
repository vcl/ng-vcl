import { NgModule, EventEmitter, Output, Input, Directive, ElementRef } from '@angular/core';
import { Subscription ,  Observable ,  timer ,  fromEvent, merge } from 'rxjs';
import { first, skipUntil, map } from 'rxjs/operators';

@Directive({
  selector: '[offClick]',
  exportAs: 'offClick'
})
export class OffClickDirective {

  @Input()
  offClickDelay = 10;

  @Input()
  offClickExcludes?: (ElementRef | Element)[];

  @Output('offClick')
  offClick = new EventEmitter();

  private subs: Subscription[] = [];

  private hoveredElement?: Element;

  constructor(private elem: ElementRef) { }

  ngAfterViewInit() {
    if (typeof document !== 'undefined') {

      // Track mouse move on host element and store hovered inner elements
      const subTrack = merge(
        fromEvent<Event>(this.elem.nativeElement, 'mouseover').pipe(map((e) => e.target || undefined)),
        fromEvent<Event>(this.elem.nativeElement, 'mouseleave').pipe(map(() => undefined))
      ).subscribe((target) => this.hoveredElement = target as Element);

      // Add a small delay, so any click that causes this directive to render does not trigger an off-click
      const subClick = fromEvent<Event>(document, 'click').pipe(
        skipUntil(timer(this.offClickDelay).pipe(first()))
      ).subscribe(ev => {

        const me = this.elem.nativeElement as Element;
        // Check that the target is not the off-clicks target element or any sub element
        const checks = [
          this.hoveredElement,
          me,
          ...(this.offClickExcludes || []).map(e => e instanceof ElementRef ? e.nativeElement : e).filter(e => e instanceof Element) as Element[]
        ];

        const target = ev.target;

        if (target && checks.every(el => (el !== target || !el.contains(target as Node)))) {
          this.offClick.emit();
        }
      });

      this.subs = [subTrack, subClick];
    }
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
