import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishBehavior';
import { Component, Directive, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, HostBinding, HostListener, ElementRef, ContentChild, ContentChildren, TemplateRef, ViewContainerRef, QueryList, EmbeddedViewRef, ChangeDetectorRef } from '@angular/core';
import { ObservableComponent } from '../../core/index';

enum InteractionType { Click, Tap }

@Directive({
  selector: '[vclButtonStateContent]'
})
export class ButtonStateContentDirective {
  constructor(private viewContainerRef: ViewContainerRef, private tempRef: TemplateRef<any>) { }

  @Input('vclButtonStateContent')
  set state(value: string) {
    this.states = (typeof value === 'string') ? value.split(',') : [];
  }
  states: string[] = ['enabled'];

  viewRef: EmbeddedViewRef<any>;

  updateState(state: string) {
    if (this.states.includes(state)) {
      if (!this.viewRef) {
        this.viewContainerRef.clear();
        this.viewRef = this.viewContainerRef.createEmbeddedView(this.tempRef);
        this.viewRef.detectChanges();
      }
    } else {
      this.viewContainerRef.clear();
      this.viewRef = null;
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
  selector: 'button[vcl-button]',
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

  @HostBinding('attr.disabled')
  get isDisabled(): boolean | null {
    return this.disabled || this.busy ? true : null;
  }

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

  @Input()
  busy: boolean = false;

  @Input()
  flexLabel: boolean = false;

  @Input()
  label: string;

  @Input()
  prepIcon: string;

  @Input()
  autoBlur: boolean = true;

  @Input()
  appIcon: string;

  private pressEvent = new EventEmitter<any>();
  @Output()
  get press(): Observable<any> {
    return this.pressEvent.asObservable();
  }

  @Output()
  stateChange = this.observeChange('disabled', 'busy')
                    .map(() => this.state)
                    .distinctUntilChanged()
                    .publishBehavior(this.state)
                    .refCount();

  get state(): string {
    return this.busy ? 'busy' : (this.disabled ? 'disabled' : 'enabled' );
  }

  @ContentChildren(ButtonStateContentDirective)
  buttonContent: QueryList<ButtonStateContentDirective> = null;

  pressSub: Subscription = this.press.subscribe(() => {
    if (this.autoBlur) {
      if (this.elementRef.nativeElement && this.elementRef.nativeElement.blur) {
        this.elementRef.nativeElement.blur();
      }
    }
  });

  stateSub: Subscription = this.stateChange.subscribe(state => {
    if (this.buttonContent) {
      this.buttonContent.forEach(bc => bc.updateState(state));
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
    this.handleGhostClick(InteractionType.Tap, e);
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    this.handleGhostClick(InteractionType.Click, e);
  }

  private handleGhostClick(type: InteractionType, e) {
    const ANTI_GHOST_DELAY = 2000;
    const now = Date.now();

    if (type !== this.latestInteractionType ) {
      if ((now - this.latestInteractionTime) > ANTI_GHOST_DELAY) {
        this.latestInteractionType = type;
        this.pressEvent.emit(e);
      }
    } else {
      this.latestInteractionType = type;
      this.pressEvent.emit(e);
    }
    this.latestInteractionTime = now;
  }

  ngAfterViewInit() {
    this.buttonContent.forEach(bc => bc.updateState(this.state));
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.stateSub) this.stateSub.unsubscribe();
    if (this.pressSub) this.pressSub.unsubscribe();
  }
}
