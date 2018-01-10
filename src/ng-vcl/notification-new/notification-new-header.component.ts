import {Component, Input} from '@angular/core';
import {FlexAlign} from "./types";

@Component({
  selector: 'vcl-notification-new-header',
  template: '<ng-content></ng-content>',
})
export class NotificationNewHeaderComponent {

  @Input()
  align: "left" | "center" | "right" = "left";

  get alignItems(): string {
    return FlexAlign[this.align];
  }

}
