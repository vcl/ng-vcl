import { Observable, of, merge, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { OverlayRef } from '@angular/cdk/overlay';

export function createOffClickStream(overlayRef: OverlayRef, document: Document, exclude: Element[]): Observable<MouseEvent | TouchEvent> {
  if (!document) {
    return of(undefined);
  }

  return merge(
    fromEvent(document, 'click') as Observable<MouseEvent>,
    fromEvent(document, 'touchend') as Observable<TouchEvent>
  )
  .pipe(filter(event => {

    const clickTarget = event.target as HTMLElement;
    const isOffClick = overlayRef &&
                       overlayRef.hasAttached() &&
                       exclude.every(element => clickTarget !== element && !element.contains(clickTarget)) &&
                       overlayRef.overlayElement.contains(clickTarget);
    return isOffClick;
  }), map(() => undefined));
}
