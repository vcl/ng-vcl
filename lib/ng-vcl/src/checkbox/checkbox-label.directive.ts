import { Input, HostBinding, HostListener, ContentChild, Directive } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';

@Directive({
  selector: 'label[vclCheckboxLabel]'
})
export class CheckboxLabelDirective {

  @ContentChild(CheckboxComponent, { read: CheckboxComponent, static: false })
  checkbox?: CheckboxComponent;

  @HostBinding('class.vclFormControlLabel')
  classVCLFormControlLabel = true;

  @HostBinding('class.vclFormControlLabelWrapping')
  classVCLFormControlLabelWrapping = true;

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this.checkbox && this.checkbox.isDisabled;
  }

  // tslint:disable-next-line:no-input-rename
  @Input('label')
  @HostBinding('attr.aria-label')
  _label?: string;

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    this.checkbox && this.checkbox.onLabelClick(event);
  }
}
