function dispatch(el: HTMLButtonElement, eventType) {
  const x = 10, y = 10;
  const msEventType = (<any> window).MSPointerEvent &&
                      eventType.replace(/pointer([a-z])/, (_, a) => 'MSPointer' + a.toUpperCase());

  const event = document.createEvent('Event') as any;
  event.initEvent(msEventType || eventType, true, true);

  event.getCurrentPoint = () => ({x, y});
  event.setPointerCapture = event.releasePointerCapture = () => { };

  event.pointerId = 0;
  event.buttons = 1;
  event.pageX = x;
  event.pageY = y;
  event.clientX = x;
  event.clientY = y;
  event.screenX = x;
  event.screenY = y;
  event.pointerType = 'touch';
  event.identifier = 0;

  el.dispatchEvent(event);
}

export function dispatchTap(el: HTMLButtonElement) {
  dispatch(el, 'pointerdown');
  setTimeout(function() {
    dispatch(el, 'pointerup');
  }, 100);
}
