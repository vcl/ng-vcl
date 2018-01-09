import {Component, Input} from '@angular/core';
import {FlexAlign} from "./types";

@Component({
  selector: 'vcl-notification-new-body',
  template: '<ng-content></ng-content>',
})
export class NotificationNewBodyComponent {

  @Input()
  align: "left" | "middle" | "right" = "middle";

  get alignItems(): string {
    return FlexAlign[this.align];
  }

}
