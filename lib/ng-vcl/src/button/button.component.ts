import { HostBinding, Input, HostListener, ElementRef, Component, SkipSelf, Inject, Output, EventEmitter, Optional, InjectionToken, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';

export interface VCLButton {
  readonly isDisabled: boolean;
  readonly value: any;
  readonly hovered: boolean;
  readonly selected: boolean;
  readonly selectable: boolean;
  setDisabled(disabled: boolean): void;
  setSelected(selected: boolean): void;
}

export interface ButtonObserver {
  notifyButtonClick(btn: VCLButton): void;
  notifyButtonBlur(btn: VCLButton): void;
}

export const BUTTON_OBSERVER_TOKEN = new InjectionToken<ButtonObserver>('vcl_button_observer');
@Component({
  selector: 'button[vcl-button]',
  exportAs: 'vclButton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'button.component.html'
})
export class ButtonComponent implements VCLButton {

  constructor(
    private cdRef: ChangeDetectorRef,
    private elementRef: ElementRef<HTMLButtonElement>,
    @SkipSelf()
    @Optional()
    @Inject(BUTTON_OBSERVER_TOKEN)
    private observer?: ButtonObserver
  ) { }

  private _disabled = false;

  @Input()
  disabled = false;

  @Output()
  select = new EventEmitter<boolean>();

  @HostBinding('class.vclDisabled')
  @HostBinding('attr.disabled')
  get isDisabled(): boolean | null {
    return (this.disabled || this._disabled) ? true : null;
  }

  @HostBinding('class.vclButton')
  vclButton = true;

  @HostBinding('class.vclHovered')
  hovered = false; // `true` if a pointer device is hovering the button (CSS' :hover)

  @Input()
  selectable = false;

  @Input()
  value: any;

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
      this.select.emit(this.selected);
    }
    this.observer && this.observer.notifyButtonClick(this);
  }

  @HostListener('blur')
  onBlur() {
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
