import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component, Directive, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, HostBinding, HostListener, ElementRef, ContentChild, ContentChildren, TemplateRef, ViewContainerRef, QueryList } from '@angular/core';
import { ObservableComponent } from '../../core/index';

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

@Component({
  selector: '[vcl-button]',
  host: {
    '[class.vclButton]': 'true',
  },
  templateUrl: 'button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends ObservableComponent {

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

  state$ = this.observeChange('disabled', 'busy').publishBehavior(this.state).refCount().map(() => this.state).distinctUntilChanged();

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
  onTap(e) { this._press.emit(e); }

  ngAfterViewInit() {
    this.buttonContent.forEach(bc => bc.render(this.state));
  }

  ngOnDestoy() {
    if (this.stateSub && !this.stateSub.closed) this.stateSub.unsubscribe();
    if (this.pressSub && !this.pressSub.closed) this.pressSub.unsubscribe();
  }
}
