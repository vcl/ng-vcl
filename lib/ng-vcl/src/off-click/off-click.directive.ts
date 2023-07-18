import { DOCUMENT } from '@angular/common';
import {
  EventEmitter,
  Output,
  Input,
  Directive,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Inject,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  Observable,
  timer,
  fromEvent,
  merge,
  NEVER,
  Subject,
  Subscription,
} from 'rxjs';
import { first, skipUntil, filter, switchMap } from 'rxjs/operators';

@Directive({
  selector: '[vclOffClick]',
  exportAs: 'vclOffClick',
})
export class OffClickDirective implements OnDestroy, OnChanges, AfterViewInit {
  changes$ = new Subject();

  @Input('vclOffClickDelay')
  delay?: number = undefined;

  @Input('vclOffClickListen')
  listen = true;

  @Input('vclOffClickExcludes')
  excludes: (ElementRef | Element)[] = [];

  @Output('vclOffClick')
  offClick = new EventEmitter<MouseEvent | TouchEvent>();

  private subscriptions: Subscription[] = [];

  constructor(
    @Inject(DOCUMENT)
    private readonly document: Document,
    private readonly elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    this.subscriptions.push(
      this.changes$
        .pipe(
          switchMap(() => {
            if (!this.elementRef || !this.listen) {
              return NEVER;
            } else {
              return createOffClickStream([this.elementRef, ...this.excludes], {
                delay: this.delay,
                document: this.document,
              });
            }
          })
        )
        .pipe(filter(() => this.listen))
        .subscribe(this.offClick)
    );
    this.changes$.next(undefined);
  }

  ngOnChanges(_: SimpleChanges): void {
    this.changes$.next(undefined);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s?.unsubscribe());
  }
}

export function createOffClickStream(
  elements: (ElementRef | Element)[],
  opts: { delay?: number; document?: Document } = {}
): Observable<MouseEvent | TouchEvent> {
  const doc =
    opts.document || (typeof document !== 'undefined' ? document : undefined);

  if (!document) {
    return NEVER;
  }

  const _elements: Element[] = elements
    .map(el => (el instanceof ElementRef ? el.nativeElement : el))
    .filter(el => el instanceof Element);

  return merge(
    fromEvent(doc, 'click') as Observable<MouseEvent>,
    fromEvent(doc, 'touchend') as Observable<TouchEvent>
  ).pipe(
    skipUntil(timer(opts.delay ?? 50).pipe(first())),
    filter(event => {
      const clickTarget = event.target as HTMLElement;
      return _elements.every(
        element => clickTarget !== element && !element.contains(clickTarget)
      );
    })
  );
}
