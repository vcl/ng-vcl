import { NotifierPosition, NotifierService } from '@ng-vcl/ng-vcl';
import { Component, Input } from '@angular/core';

let cnt = 1;

@Component({selector: 'notifier-content-component', template: '<button class="vclButton">{{text}}</button>'})
export class NotifierContentComponent {
  @Input()text;
}

@Component({
  templateUrl: 'demo.component.html'
})
export class NotifierDemoComponent {

  constructor(private notifier: NotifierService) {}

  position: NotifierPosition = NotifierPosition.TopRight;

  info() {
    this.notifier.info('An info message ' + cnt++, {
      position: this.position
    });
  }
  success() {
    this.notifier.success('A success message ' + cnt++, {
      position: this.position
    });
  }
  warning() {
    this.notifier.warning('A warning ' + cnt++, {
      position: this.position
    });
  }
  error() {
    this.notifier.error('An error message ' + cnt++, {
      position: this.position
    });
  }
  custom() {
    this.notifier.show('<b>A <i>custom</i> message</b>', {
      html: true,
      backgroundColor: 'black',
      textColor: 'white',
      position: this.position,
      showCloseButton: false,
      timeout: 10000
    });
  }
  componentAsContent() {
    this.notifier.info('', {
      position: this.position,
      contentComponentDetails: {contentComponentClass: NotifierContentComponent, attributes: {text: `notifier content custom component button ${cnt++}`}}
    });
  }

}
