import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { NotificationService, NotificationType, NotificationPosition } from '@ng-vcl/ng-vcl';
import { Component } from '@angular/core';

let cnt = 1;

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

}
