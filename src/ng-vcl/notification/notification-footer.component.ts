import {Component, Input} from '@angular/core';
import {FlexAlign} from "./types";

@Component({
  selector: 'vcl-notification-footer',
  template: '<ng-content></ng-content>',
})
export class NotificationFooterComponent {

  @Input()
  align: "left" | "center" | "right" = "left";

  get alignItems(): string {
    return FlexAlign[this.align];
  }

}
