import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'popover.component.html'
})
export class PopoverComponent {

  open: boolean = false;
  open2: boolean = false;

  public showPopover() {
    this.open = true;
  }

  public closePopover() {
    this.open = false;
  }

  public showPopover2() {
    this.open2 = true;
  }
}