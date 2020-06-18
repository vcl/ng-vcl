import { Component,
  Input, Output, HostListener,
  EventEmitter,
  ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, Optional, Inject} from '@angular/core';
import { RadioButton, RadioButtonGroup, RADIO_BUTTON_GROUP_TOKEN } from './interfaces';

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-radio-button',
  templateUrl: 'radio-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'vclRadioButton',
})
export class RadioButtonComponent implements RadioButton {

  constructor(
    private cdRef: ChangeDetectorRef,
    @Optional()
    @Inject(RADIO_BUTTON_GROUP_TOKEN)
    private rbg?: RadioButtonGroup
  ) { }

  private _disabled = false;
  private _focused = false;

  private generatedId = 'vcl_radiogroup_' + UNIQUE_ID++;

  @Input()
  id?: string;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.generatedId;
  }

  @HostBinding('class.radio-button')
  hostClasses = true;

  @HostBinding('attr.role')
  attrRole = 'radio';

  @HostBinding('attr.aria-checked')
  get attrAriaChecked() {
    return this.checked;
  }

  @HostBinding('attr.aria-disabled')
  get attrAriaDisabled() {
    return this.disabled;
  }

  @HostBinding('class.disabled')
  get isDisabled() {
    return this._disabled || this.disabled;
  }

  get isFocused() {
    return this._focused;
  }

  @HostBinding('attr.aria-labelledby')
  get attrAriaLabeledby() {
    return this.elementId;
  }

  @Input()
  tabindex = 0;

  @Input()
  disabled = false;

  @Input()
  checked = false;

  @Input()
  value: any;

  /**
   * Action fired when the `checked` state changes due to user interaction.
   */
  @Output()
  checkedChange = new EventEmitter<boolean>();

  onKeyup(e) {
    switch (e.code) {
      case 'Space':
        e.preventDefault();
        this.setCheckedUserInteraction();
        break;
    }
  }

  onClick(e: Event) {
    e.stopPropagation();
    this.setCheckedUserInteraction();
  }

  onLabelClick() {
    this.setCheckedUserInteraction();
  }

  onFocus() {
    this._focused = true;
    this.rbg && this.rbg.notifyRadioButtonFocus(this);
  }

  onBlur() {
    this._focused = false;
    this.rbg && this.rbg.notifyRadioButtonBlur(this);
  }

  private setCheckedUserInteraction() {
    if (this.isDisabled) {
      return;
    }

    this.rbg && this.rbg.notifyRadioButtonChecked(this);

    // radio-buttons cannot be 'unchecked' by definition from user interaction
    this.checked = true;
    this.cdRef.markForCheck();
    this.checkedChange.emit(this.checked);
  }

  setChecked(checked: boolean) {
    this.checked = checked;
    this.cdRef.markForCheck();
    this.checkedChange.emit(this.checked);
  }

  setDisabled(disabled: boolean): void {
    this._disabled = disabled;
    this.cdRef.markForCheck();
  }

}
