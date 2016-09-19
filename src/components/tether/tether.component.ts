import { Component, Input, Output, ElementRef } from '@angular/core';
import * as Tether from 'tether';

@Component({
  selector: 'vcl-tether',
  templateUrl: 'tether.component.html'
})
export class TetherComponent {

  id: string;

  @Input()
  target: string;

  @Input()
  class: string;

  @Input()
  zIndex: number;

  @Input()
  targetAttachment: string;

  @Input()
  attachment: string;

  constructor(private myElement: ElementRef) {
    this.id = 'tetherId' + Math.floor(Math.random()*10000);
  }

  ngAfterViewInit() {
    try {
      new Tether({
        element: '#' + this.id,
        target: this.target,
        attachment: this.attachment,
        targetAttachment: this.targetAttachment
      });
    } catch (ex) {
      console.log(ex);
    }
  }
}

