import { NotifierPosition, NotifierService } from '@ng-vcl/ng-vcl';
import { Component, Input, ViewEncapsulation } from '@angular/core';

let cnt = 1;

@Component({
  templateUrl: 'demo.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .demoCustomNotifier {
      background-color: black;
      color: white;
    }
  `]
})
export class NotifierDemoComponent {

  constructor(private notifier: NotifierService) {}

  positions = NotifierPosition;
  position: NotifierPosition = NotifierPosition.TopRight;

  default() {
    this.notifier.queue({
      text: 'A message ' + cnt++,
      position: this.position
    });
  }
  info() {
    this.notifier.info({
      text: 'An info message ' + cnt++,
      position: this.position
    });
  }
  success() {
    this.notifier.success({
      text: 'A success message ' + cnt++,
      position: this.position
    });
  }
  warning() {
    this.notifier.warning({
      text: 'A warning ' + cnt++,
      position: this.position
    });
  }
  error() {
    this.notifier.error({
      text: 'An error message ' + cnt++,
      position: this.position
    });
  }
  custom() {
    this.notifier.queue({
      text: '<b>A <i>custom</i> message</b>',
      html: true,
      position: this.position,
      showCloseButton: false,
      timeout: 10000,
      class: 'demoCustomNotifier'
    });
  }
}
