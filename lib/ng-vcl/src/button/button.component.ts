import { HostBinding, Input, HostListener, ElementRef, Component, SkipSelf, Inject, Output, EventEmitter, Optional, InjectionToken, ChangeDetectorRef, ChangeDetectionStrategy, Directive} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

export interface ButtonHost {
  readonly isDisabled: boolean;
  notifyButtonClick(btn: ButtonComponent): void;
  notifyButtonFocus(btn: ButtonComponent): void;
  notifyButtonBlur(btn: ButtonComponent): void;
}

export const BUTTON_HOST_TOKEN = new InjectionToken<ButtonHost>('vcl_button_host');

@Component({
  selector: 'button[vcl-button], a[vcl-button]',
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
    @Inject(BUTTON_HOST_TOKEN)
    private host?: ButtonHost
  ) { }

  private _focused = false;

  @Input()
  disabled = false;

  @Output()
  selectedChange = new EventEmitter<boolean>();

  private _square: boolean;
  @HostBinding('class.square')
  @Input()
  get square() { return this._square; }
  set square(value: any) { this._square = coerceBooleanProperty(value); }

  @HostBinding('attr.type')
  get attrType() {
    return this.type || (this.selectable ? 'button' : null);
  }

  @HostBinding('class.disabled')
  @HostBinding('attr.disabled')
  get isDisabled(): boolean | null {
    return (this.disabled || (this.host && this.host.isDisabled)) ? true : null;
  }

  @HostBinding('class.button')
  _hostClasses = true;

  @HostBinding('class.hovered')
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
  @HostBinding('class.selected')
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
    this.host && this.host.notifyButtonClick(this);
  }

  @HostListener('focus')
  onFocus() {
    this._focused = true;
    this.host && this.host.notifyButtonFocus(this);
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
    this.host && this.host.notifyButtonBlur(this);
  }

  focus(): void {
    this.elementRef.nativeElement.focus();
  }

  setSelected(selected: boolean) {
    this.selected = selected;
    this.cdRef.markForCheck();
  }
}
