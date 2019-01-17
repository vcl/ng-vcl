import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[vcl-label]',
  host: {
    '[class.vclLabel]': 'true'
  }
})
export class LabelDirective {

  @Input('vcl-label')
  type: 'primary' | 'success' | 'info' | 'warning' | 'error' | undefined;

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
