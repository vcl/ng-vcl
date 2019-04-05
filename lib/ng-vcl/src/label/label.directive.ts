import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: 'vcl-label'
})
export class LabelDirective {

  @HostBinding('class.vclLabel')
  classVCLLabel = true;

  @Input()
  type?: 'primary' | 'success' | 'info' | 'warning' | 'error';

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
