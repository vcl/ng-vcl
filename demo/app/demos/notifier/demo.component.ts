import { NotifierPosition, NotifierService } from '@ng-vcl/ng-vcl';
import { Component, Input } from '@angular/core';

let cnt = 1;

@Component({
  template: '<button class="vclButton">{{text}}</button>'
})
export class NotifierContentComponent {
  @Input()text;
}

@Component({
  templateUrl: 'demo.component.html'
})
export class NotifierDemoComponent {

  constructor(private notifier: NotifierService) {}

  position: NotifierPosition = NotifierPosition.TopRight;

  default() {
    this.notifier.queue({
      text: 'An default message ' + cnt++,
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
      backgroundColor: 'black',
      textColor: 'white',
      position: this.position,
      showCloseButton: false,
      timeout: 10000
    });
  }
  componentAsContent() {
    this.notifier.info({
      position: this.position,
      contentComponentDetails: {contentComponentClass: NotifierContentComponent, attributes: {text: `notifier content custom component button ${cnt++}`}}
    });
  }

}
