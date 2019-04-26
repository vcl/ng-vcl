import { Input, HostBinding, HostListener, ContentChild, Directive } from '@angular/core';
import { RadioButtonComponent } from './radio-button.component';

@Directive({
  selector: 'label[vclRadioButtonLabel]'
})
export class RadioButtonLabelDirective {

  @ContentChild(RadioButtonComponent, { read: RadioButtonComponent })
  rb?: RadioButtonComponent;

  @HostBinding('class.vclFormControlLabel')
  classVCLFormControlLabel = true;

  @HostBinding('class.vclFormControlLabelWrapping')
  classVCLFormControlLabelWrapping = true;

  @HostBinding('class.vclDisabled')
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
