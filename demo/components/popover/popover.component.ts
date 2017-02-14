import { Component } from '@angular/core';

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
  };

  public togglePopover() {
    this.open = !this.open;
  }

  public closePopover() {
    this.open = false;
  }

  public showPopover2() {
    this.open2 = true;
  }
}
