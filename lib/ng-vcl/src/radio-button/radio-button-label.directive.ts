import { Input, HostBinding, HostListener, ContentChild, Directive } from '@angular/core';
import { RadioButtonComponent } from './radio-button.component';

@Directive({
  selector: 'label[vclRadioButtonLabel]'
})
export class RadioButtonLabelDirective {

  @ContentChild(RadioButtonComponent, { read: RadioButtonComponent, static: false })
  rb?: RadioButtonComponent;

  @HostBinding('class.form-control-label')
  classVCLFormControlLabel = true;

  @HostBinding('class.form-control-label-wrapping')
  classVCLFormControlLabelWrapping = true;

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.rb && this.rb.isDisabled;
  }

  // tslint:disable-next-line:no-input-rename
  @Input('label')
  @HostBinding('attr.aria-label')
  _label?: string;

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    this.rb && this.rb.onLabelClick(event);
  }
}
