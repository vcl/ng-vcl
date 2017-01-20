import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { GrowlService, GrowlType, GrowlPosition } from './../../../src/components/growl/growl.module';
import { Component } from '@angular/core';

let cnt = 1;

@Component({
  templateUrl: 'demo.component.html'
})
export class GrowlDemoComponent {

  constructor(private gs: GrowlService) {}

  position: GrowlPosition = GrowlPosition.TopRight;

  info() {
    this.gs.info('An info message ' + cnt++, {
      position: this.position
    });
  }
  success() {
    this.gs.success('A success message ' + cnt++, {
      position: this.position
    });
  }
  warning() {
    this.gs.warning('A warning ' + cnt++, {
      position: this.position
    });
  }
  error() {
    this.gs.error('An error message ' + cnt++, {
      position: this.position
    });
  }
  custom() {
    this.gs.growl('<b>A <i>custom</i> message</b>', {
      html: true,
      backgroundColor: 'black',
      textColor: 'white',
      position: GrowlPosition.Top,
      showCloseButton: false,
      timeout: 10000
    });
  }

}
