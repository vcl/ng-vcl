import {AfterViewInit, Component, Input} from '@angular/core';
import {NotificationNewType} from "./types";

@Component({
  selector: 'vcl-notification-new',
  templateUrl: 'notification-new.component.html',
})
export class NotificationNewComponent implements AfterViewInit {

  @Input()
  nType: any;

  @Input()
  icon: any = null;

  @Input()
  noIcon: boolean = false;

  @Input()
  header: string = "";

  @Input()
  button: string = "";

  @Input()
  footer: string = "";

  ngAfterViewInit(): void {
  }

  get eType(): NotificationNewType {
    return NotificationNewType.fromString(this.nType);
  }

  get styleClass(): string {
    return NotificationNewType.styleClass(this.eType);
  }

  get eIcon(): string {
    if (this.icon !== null) {
      return this.icon;
    }

    return NotificationNewType.icon(this.eType);
  }

}
