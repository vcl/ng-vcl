import { Component, Input, Output, OnInit, HostBinding, HostListener, OnChanges, SimpleChanges, EventEmitter, ElementRef } from '@angular/core';

/**
Checkbox.

## Usage

```html
<vcl-checkbox
  [(checked)]="checked">
</vcl-checkbox>
```
*/
@Component({
  selector: 'vcl-checkbox',
  template: `<vcl-icon [icon]="icon"></vcl-icon><ng-content></ng-content>`,
  host: {
    '[attr.role]': '"checkbox"',
    '[class.vclCheckbox]': 'true',
    '[class.vclScale130p]': 'true',
  }
})
export class CheckboxComponent implements OnInit, OnChanges {

  @Input()
  checkedIcon = 'fa:check-square-o';

  @Input()
  uncheckedIcon = 'fa:square-o';

  @Input()
  disabled = false;

  /**
  Refelects the checked state, `true` is checked and `false` is unchecked
  @public
  */
  @Input()
  checked = false;


  /**
  Action fired when the `checked` state changes due to user interaction.
  The first parameter is the value of the `checked` property.
  @public
  @action
  */
  @Output()
  checkedChange = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['checked']) {
      let checked = changes['checked'].currentValue;
      this.checkedChange.emit(checked);
      this.focusMaintenance(checked);
    }
  }

  @HostBinding('class.vclDisabled')
  get hbVclDisabled() {
    return !!this.disabled;
  }

  @HostBinding('attr.aria-disabled')
  get hbAriaDisabled() {
    return !!this.disabled;
  }

  @HostBinding('attr.checked')
  get hbChecked() {
    return !!this.checked;
  }

  @HostListener('keyup', ['$event'])
  onKeyup(e) {
    if (e.keyCode === 32) { // space
      return this.triggerChangeAction(e);
    }
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    return this.triggerChangeAction(e);
  }

  triggerChangeAction(e) {
    e.preventDefault();
    if (this.disabled) return;
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

  focusMaintenance(checked: boolean) {
    if (this.checked === true && this.elementRef.nativeElement) {
      this.elementRef.nativeElement.focus();
    }
  }

  get icon() {
    return this.checked ? this.checkedIcon : this.uncheckedIcon;
  }
}
