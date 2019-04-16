import { Input, HostBinding, Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vcl-label',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent {

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
