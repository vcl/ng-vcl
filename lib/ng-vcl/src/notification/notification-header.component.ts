import {Component, Input} from '@angular/core';
import {FlexAlign} from './types';

@Component({
  selector: 'vcl-notification-header',
  template: '<ng-content></ng-content>',
})
export class NotificationHeaderComponent {

  @Input()
  align: 'left' | 'center' | 'right' = 'left';

  get alignItems(): string {
    return FlexAlign[this.align];
  }

}
