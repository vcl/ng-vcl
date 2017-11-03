import { NotificationPosition, NotificationService } from '@ng-vcl/ng-vcl';
import { Component, Input } from '@angular/core';

let cnt = 1;

@Component({selector: 'notification-content-component', template: '<button class="vclButton">{{text}}</button>'})
export class NotificationContentComponent {
  @Input()text;
}

@Component({
  templateUrl: 'demo.component.html'
})
export class NotificationDemoComponent {

  constructor(private notification: NotificationService) {}

  position: NotificationPosition = NotificationPosition.TopRight;

  info() {
    this.notification.info('An info message ' + cnt++, {
      position: this.position
    });
  }
  success() {
    this.notification.success('A success message ' + cnt++, {
      position: this.position
    });
  }
  warning() {
    this.notification.warning('A warning ' + cnt++, {
      position: this.position
    });
  }
  error() {
    this.notification.error('An error message ' + cnt++, {
      position: this.position
    });
  }
  custom() {
    this.notification.show('<b>A <i>custom</i> message</b>', {
      html: true,
      backgroundColor: 'black',
      textColor: 'white',
      position: this.position,
      showCloseButton: false,
      timeout: 10000
    });
  }
  componentAsContent() {
    this.notification.info('', {
      position: this.position,
      contentComponentDetails: {contentComponentClass: NotificationContentComponent, attributes: {text: `notification content custom component button ${cnt++}`}}
    });
  }

}
