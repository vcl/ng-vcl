import {Component, Input} from '@angular/core';
import {FlexAlign} from './types';

@Component({
  selector: 'vcl-notification-body',
  template: '<ng-content></ng-content>',
})
export class NotificationBodyComponent {

  @Input()
  align: 'left' | 'center' | 'right' = 'center';

  get alignItems(): string {
    return FlexAlign[this.align];
  }

}
