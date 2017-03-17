import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'vcl-label',
  templateUrl: 'label.component.html',
  host: {
    '[class.vclFormControlLabel]': 'true'
  }
})
export class LabelComponent {

  @Input('label')
  label: string | undefined;

  @Input('subLabel')
  subLabel: string | undefined;

  @Input('type')
  type: 'primary' | 'success' | 'info' | 'warning' | 'error' | undefined;

  @Input('requiredIndicatorCharacter')
  requiredIndicatorCharacter: string = '•';

  @Input('required')
  required: boolean = false;

  @Input('for')
  for: string | undefined;

  @HostBinding('class.vclLabel')
  get vclLabel() {
    return this.type;
  }

  /**
   * TODO(issue) this overwrites the users classes
   * @link https://github.com/angular/angular/issues/7289
   */
  // @HostBinding('class')
  // get labelClass() {
  //   return this.type ? 'vcl' + this.type.charAt(0).toUpperCase() + this.type.slice(1) : undefined;
  // }

  @HostBinding('class.vclPrimary')
  get vclPrimary() {
    return this.type === 'primary';
  }
  @HostBinding('class.vclSuccess')
  get vclSuccess() {
    return this.type === 'success';
  }
  @HostBinding('class.vclInfo')
  get vclInfo() {
    return this.type === 'info';
  }
  @HostBinding('class.vclWarning')
  get vclWarning() {
    return this.type === 'warning';
  }
  @HostBinding('class.vclError')
  get vclError() {
    return this.type === 'error';
  }
}
