import { TemplatePortal } from '@angular/cdk/portal';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

import {
  NotifierPosition,
  NotifierService,
  NotifierOptions,
} from '@vcl/ng-vcl';

let cnt = 1;

@Component({
  templateUrl: 'demo.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .demoCustomNotifier {
        background-color: black;
        color: white;
      }
    `,
  ],
})
export class NotifierDemoComponent {
  constructor(private notifier: NotifierService) {}

  positions = NotifierPosition;
  position: NotifierPosition = NotifierPosition.TopRight;

  @ViewChild('htmlNotification')
  htmlNotification: TemplatePortal;

  default() {
    this.notifier.queue({
      content: 'A message ' + cnt++,
      position: this.position,
    });
  }
  info() {
    this.notifier.info({
      content: 'An info message ' + cnt++,
      title: 'Info',
      icon: 'vcl:info',
      position: this.position,
    });
  }
  success() {
    this.notifier.success({
      content: 'A success message ' + cnt++,
      title: 'Success',
      position: this.position,
    });
  }
  warning() {
    this.notifier.warning({
      content: 'A warning ' + cnt++,
      title: 'Warning',
      position: this.position,
    });
  }
  error() {
    this.notifier.error({
      content: 'An error message ' + cnt++,
      title: 'Error',
      position: this.position,
    });
  }
  custom() {
    this.notifier.queue({
      content: 'A custom class message',
      position: this.position,
      showCloseButton: false,
      timeout: 10000,
      class: 'demoCustomNotifier',
    });
  }

  modalNotificationOptions: NotifierOptions = {
    content: 'I am modal!',
    position: NotifierPosition.Center,
    title: 'Modal Title',
    hasBackdrop: true,
    timeout: false,
    showCloseButton: true,
  };
}
