import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  HostBinding
} from '@angular/core';

@Component({
  selector: '[vcl-label], vcl-label',
  templateUrl: 'label.component.html',
  host: {
    '[class.vclLabel]': 'true'
  }
})
export class LabelComponent {

  @Input('label')
  label: string | undefined;

  @Input('type')
  type: 'primary' | 'success' | 'info' | 'warning' | 'error' | undefined;

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
