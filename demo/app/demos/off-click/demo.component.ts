import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { VCLOffClickModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [NgIf, VCLOffClickModule],
})
export class OffClickDemoComponent {
  clicks = 0;

  offClick() {
    this.clicks++;
  }
}
