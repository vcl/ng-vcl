import { HostBinding, Input, HostListener, ElementRef, Component, SkipSelf, Inject, Output, EventEmitter, Optional, InjectionToken, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';

export interface ButtonObserver {
  notifyButtonClick(btn: ButtonComponent): void;
  notifyButtonBlur(btn: ButtonComponent): void;
}

export const BUTTON_OBSERVER_TOKEN = new InjectionToken<ButtonObserver>('vcl_button_observer');
@Component({
  selector: 'button[vcl-button], a[vcl-button], button[vcl-square-button], button[vcl-square-button]',
  exportAs: 'vclButton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'button.component.html'
})
export class ButtonComponent {

  constructor(
    private cdRef: ChangeDetectorRef,
    private elementRef: ElementRef<HTMLButtonElement>,
    @SkipSelf()
    @Optional()
    @Inject(BUTTON_OBSERVER_TOKEN)
    private observer?: ButtonObserver
  ) { }

  private _disabled = false;
  private _focused = false;

  @Input()
  disabled = false;

  @Output()
  selectedChange = new EventEmitter<boolean>();

  @HostBinding('class.vclSquare')
  get classVCLSquare() {
    return this.elementRef.nativeElement.hasAttribute('vcl-square-button');
  }

  @HostBinding('attr.type')
  get attrType() {
    return this.type || (this.selectable ? 'button' : null);
  }

  @HostBinding('class.vclDisabled')
  @HostBinding('attr.disabled')
  get isDisabled(): boolean | null {
    return (this.disabled || this._disabled) ? true : null;
  }

  @HostBinding('class.vclButton')
  _hostClasses = true;

  @HostBinding('class.vclHovered')
  hovered = false; // `true` if a pointer device is hovering the button (CSS' :hover)

  @HostBinding('attr.aria-pressed')
  @Input()
  selectable = false;

  @Input()
  type?: string;

  @Input()
  value: any;

  get isFocused() {
    return this._focused;
  }


  @Input()
  @HostBinding('class.vclSelected')
  selected = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hovered = false;
  }

  @HostListener('click')
  onClick() {
    if (this.selectable) {
      this.selected = !this.selected;
      this.selectedChange.emit(this.selected);
    }
    this.observer && this.observer.notifyButtonClick(this);
  }

  @HostListener('focus')
  onFocus() {
    this._focused = true;
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
    this.observer && this.observer.notifyButtonBlur(this);
  }

  focus(): void {
    this.elementRef.nativeElement.focus();
  }

  setDisabled(disabled: boolean) {
    this._disabled = disabled;
    this.cdRef.markForCheck();
  }

  setSelected(selected: boolean) {
    this.selected = selected;
    this.cdRef.markForCheck();
  }

  // Workaround as not super.getters are allowed in ts
  getDisabled() {
    return (this.disabled || this._disabled);
  }
}
