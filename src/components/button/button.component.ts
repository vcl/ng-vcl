import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishBehavior';
import { Component, Directive, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, HostBinding, HostListener, ElementRef, ContentChild, ContentChildren, TemplateRef, ViewContainerRef, QueryList } from '@angular/core';
import { ObservableComponent } from '../../core/index';

enum InteractionType { Click, Tap }

@Directive({ selector: '[vcl-button-content]' })
export class ButtonContentDirective {
  constructor(private viewContainerRef: ViewContainerRef, private tempRef: TemplateRef<any>) { }

  private hasView = false;
  @Input()
  state: string = 'enabled';

  render(state: string) {
    if (this.state === state) {
      this.hasView = true;
      this.viewContainerRef.createEmbeddedView(this.tempRef);
    } else {
      this.hasView = false;
      this.viewContainerRef.clear();
    }
  }
}

function dispatch(el, eventType) {
  const x = 10, y = 10;

  const msEventType = (window as any).MSPointerEvent &&
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

function dispatchTap(el) {
  dispatch(el, 'pointerdown');
  setTimeout(function() {
    dispatch(el, 'pointerup');
  }, 100);
}

@Component({
  selector: '[vcl-button]',
  host: {
    '[class.vclButton]': 'true',
  },
  templateUrl: 'button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends ObservableComponent {

  private latestInteractionTime: number = 0;
  private latestInteractionType: InteractionType;

  pressed: boolean = false; // `true` if a pointer device is conducting a `down` gesture on the button
  focused: boolean = false; // `true` if the element is focused  (CSS' :focus)

  @HostBinding('class.vclHovered')
  hovered: boolean = false; // `true` if a pointer device is hovering the button (CSS' :hover)

  @Input()
  @HostBinding('class.vclSelected')
  selected: boolean = false;

  @HostBinding('attr.aria-label')
  @Input()
  title: string;

  @Input()
  disabled: boolean = false;

  @Input()
  disableA11yClick: boolean = false;

  @HostBinding('attr.disabled')
  get isDisabled(): boolean {
    return this.disabled ? true : null;
  }

  @Input()
  busy: boolean = false; // State to indicate that the button is disabled as a operation is in progress

  @Input()
  flexLabel: boolean = false;

  @Input()
  busyLabel: string;

  @Input()
  label: string;

  @Input()
  prepIcon: string;

  @Input()
  prepIconBusy: string;

  @Input()
  autoBlur: boolean = true;

  @Input()
  appIcon: string;

  @Input()
  appIconBusy: string;

  private _press = new EventEmitter<any>();
  @Output()
  get press(): Observable<any> {
    return this._press.asObservable();
  }

  private _stateChange = new EventEmitter<string>();
  @Output()
  get stateChange(): Observable<string> {
    return this._stateChange.asObservable();
  }

  get state(): string {
    return this.disabled ? 'disabled' : (this.busy ? 'busy' : 'enabled' );
  }

  state$ = this.observeChange('disabled', 'busy', 'label', 'busyLabel', 'appIcon', 'appIconBusy').publishBehavior(this.state).refCount().map(() => this.state);

  label$ = this.state$.map(state => state === 'busy' && this.busyLabel ? this.busyLabel : this.label );
  prepIcon$ = this.state$.map(state => state === 'busy' && this.prepIconBusy ? this.prepIconBusy : this.prepIcon );
  appIcon$ = this.state$.map(state => state === 'busy' && this.appIconBusy ? this.appIconBusy : this.appIcon );

  @ContentChildren(ButtonContentDirective)
  buttonContent: QueryList<ButtonContentDirective> = null;

  stateSub = this.state$.subscribe(state => {
    if (this.buttonContent) {
      this.buttonContent.forEach(bc => bc.render(state));
    }
    this._stateChange.emit(state);
  });

  pressSub: Subscription = this.press.subscribe(() => {
    if (this.autoBlur) {
      if (this.elementRef.nativeElement && this.elementRef.nativeElement.blur) {
        this.elementRef.nativeElement.blur();
      }
    }
  });

  constructor(private elementRef: ElementRef) {
    super();
  }

  @HostListener('keypress', ['$event'])
  onKeypress(ev: KeyboardEvent) {
    // Trigger a11yClick
    if (!this.disableA11yClick &&
        this.elementRef.nativeElement &&
        (
          ev.code === 'Space' ||
          ev.code === 'NumpadEnter' ||
          ev.code === 'Enter'
        )) {
      ev.preventDefault();
      this.elementRef.nativeElement.click();
      dispatchTap(this.elementRef.nativeElement);
    }
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(e) { this.hovered = true; }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e) { this.hovered = false; }

  @HostListener('mouseup', ['$event'])
  onMouseUp(e) { this.pressed = false; }

  @HostListener('mousedown', ['$event'])
  onMouseDown(e) { this.pressed = true; }

  @HostListener('onfocus', ['$event'])
  onFocus(e) { this.focused = true; }

  @HostListener('onblur', ['$event'])
  onBlur(e) { this.focused = false; }

  @HostListener('tap', ['$event'])
  onTap(e) {
    this.handleGhostClick(InteractionType.Tap, event);
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    this.handleGhostClick(InteractionType.Click, event);
  }

  private handleGhostClick(type: InteractionType, e) {
    const ANTI_GHOST_DELAY = 2000;
    const now = Date.now();

    if (type !== this.latestInteractionType ) {
      if ((now - this.latestInteractionTime) > ANTI_GHOST_DELAY) {
        this.latestInteractionType = type;
        this._press.emit(e);
      }
    } else {
      this.latestInteractionType = type;
      this._press.emit(e);
    }
    this.latestInteractionTime = now;
  }

  ngAfterViewInit() {
    this.buttonContent.forEach(bc => bc.render(this.state));
  }

  ngOnDestoy() {
    if (this.stateSub && !this.stateSub.closed) this.stateSub.unsubscribe();
    if (this.pressSub && !this.pressSub.closed) this.pressSub.unsubscribe();
  }
}
