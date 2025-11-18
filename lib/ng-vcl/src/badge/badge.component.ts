import {
  Input,
  HostBinding,
  Component,
  ChangeDetectionStrategy,
  Directive,
} from '@angular/core';

@Component({
  selector: 'vcl-badge',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VCLBadgeComponent {
  @Input()
  type: 'primary' | 'success' | 'info' | 'warning' | 'error' | undefined;

  @HostBinding('class.badge')
  classVCLBadge = true;

  @HostBinding('class.primary')
  get vclPrimary() {
    return this.type === 'primary';
  }
  @HostBinding('class.success')
  get vclSuccess() {
    return this.type === 'success';
  }
  @HostBinding('class.info')
  get vclInfo() {
    return this.type === 'info';
  }
  @HostBinding('class.warning')
  get vclWarning() {
    return this.type === 'warning';
  }
  @HostBinding('class.error')
  get vclError() {
    return this.type === 'error';
  }
}

@Directive({
  selector: 'vcl-badge[vclRounded]',
})
export class VCLBadgeRoundedDirective {
  @HostBinding('class.rounded')
  rounded = true;
}
