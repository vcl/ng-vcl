import { NgModule, EventEmitter, Output, Input, Directive, ElementRef, AfterViewInit, OnDestroy, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription ,  Observable ,  timer ,  fromEvent, merge, NEVER, Subject } from 'rxjs';
import { first, skipUntil, map, filter, switchAll, switchMap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[offClick]',
  exportAs: 'offClick'
})
export class OffClickDirective implements OnDestroy, OnChanges, AfterViewInit {

  constructor(@Inject(DOCUMENT) private document: any, private elementRef: ElementRef) { }

  changes$ = new Subject();

  @Input()
  offClickDelay = 0;

  @Input()
  offClickListen = true;

  @Input()
  offClickExcludes: (ElementRef | Element)[] = [];

  @Output()
  offClick = new EventEmitter<MouseEvent | TouchEvent>();

  _sub = this.changes$.pipe(
    switchMap(() => {
      if (!this.elementRef || !this.offClickListen) {
        return NEVER;
      } else {
        return createOffClickStream([this.elementRef, ...this.offClickExcludes], {
          delay: this.offClickDelay,
          document: this.document
        });
      }
    })
  ).pipe(
    filter(() => this.offClickListen)
  ).subscribe(this.offClick);

  ngAfterViewInit(): void {
    this.changes$.next();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changes$.next();
  }
  ngOnDestroy() {
    this._sub && this._sub.unsubscribe();
  }
}

export function createOffClickStream(elements: (ElementRef | Element)[], opts: { delay?: number; document?: Document} = {}): Observable<MouseEvent | TouchEvent> {
  const doc = opts.document || (typeof document !== 'undefined' ? document : undefined);

  if (!document) {
    return NEVER;
  }

  const _elements: Element[] = elements.map(el => el instanceof ElementRef ? el.nativeElement : el).filter(el => el instanceof Element);

  return merge(
    fromEvent(doc, 'click') as Observable<MouseEvent>,
    fromEvent(doc, 'touchend') as Observable<TouchEvent>
  )
  .pipe(
    skipUntil(timer(opts.delay || 0).pipe(first())),
    filter(event => {
      const clickTarget = event.target as HTMLElement;
      return _elements.every(element => clickTarget !== element && !element.contains(clickTarget));
    }
  ));
}

