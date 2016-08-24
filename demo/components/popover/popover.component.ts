import { Component, OnInit, Directive, Input,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

@Component({
  templateUrl: 'popover.component.html',
})
export class PopoverComponent {

  open: boolean = false;
  open2: boolean = false;
  state: string = 'inactive';

  style = {
    border: '3px double red',
    padding: '20px',
    overflow: 'hidden'
  }

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
