import {Component, ContentChild, Input} from '@angular/core';
import {NotificationNewType, FlexAlign, TextAlign, IconType} from "./types";
import {NotificationNewBodyComponent} from "./notification-new-body.component";
import {NotificationNewFooterComponent} from "./notification-new-footer.component";
import {NotificationNewHeaderComponent} from "./notification-new-header.component";

@Component({
  selector: 'vcl-notification-new',
  templateUrl: 'notification-new.component.html',
})
export class NotificationNewComponent {

  @Input()
  nType: "default" | "info" | "warning" | "error" | "success" = "default";

  @Input()
  icon: string = "";

  @Input()
  iconClass: string = "";

  @Input()
  iconImage: string = "";

  @Input()
  iconSide: "left" | "right" = "left";

  @Input()
  drawIcon: boolean = true;

  @Input()
  header: string = "";

  @Input()
  footer: string = "";

  @Input()
  button: string = "";

  @Input()
  buttonClick: Function | null;

  @Input()
  verticalBody: boolean = false;

  @Input()
  headerAlign: "left" | "center" | "right" = "left";

  @Input()
  bodyAlign: "left" | "center" | "right" = "center";

  @Input()
  footerAlign: "left" | "center" | "right" = "left";

  @ContentChild(NotificationNewHeaderComponent)
  headerComponent: NotificationNewHeaderComponent | null;

  @ContentChild(NotificationNewBodyComponent)
  bodyComponent: NotificationNewBodyComponent | null;

  @ContentChild(NotificationNewFooterComponent)
  footerComponent: NotificationNewFooterComponent | null;

  get eType(): NotificationNewType {
    return NotificationNewType.fromString(this.nType);
  }

  get styleClass(): string {
    return NotificationNewType.styleClass(this.eType);
  }

  get eIconClass(): string {
    if (this.icon) {
      return "fa " + this.icon;
    } else if (this.iconClass) {
      return this.iconClass;
    }

    return "fa " + NotificationNewType.icon(this.eType);
  }

  get iconType(): string {
    if (this.iconImage) {
      return IconType.Image;
    } else if (this.iconClass) {
      return IconType.Custom;
    }

    return IconType.FA;
  }

  get nested(): boolean {
    return this.headerComponent != null || this.bodyComponent != null || this.footerComponent != null;
  }

  get headerStyle(): object {
    if (this.nested) {
      return {
        padding: 0,
        "flex-flow": "column",
        "align-items": (this.headerComponent != null ? this.headerComponent.alignItems : "flex-start")
      };
    }

    return {
      "text-align": TextAlign[this.headerAlign]
    };
  }

  get bodyStyle(): object {
    if (this.nested) {
      return {
        padding: 0,
        "flex-flow": "column",
        "flex-direction": "row",
        "align-items": (this.bodyComponent != null ? this.bodyComponent.alignItems : "flex-start")
      };
    }

    return {
      "flex-flow": this.verticalBody ? "column" : "",
      "align-items": FlexAlign[this.bodyAlign],
      "text-align": this.verticalBody ? TextAlign[this.bodyAlign] : ""
    };
  }

  get footerStyle(): object {
    if (this.nested) {
      return {
        padding: 0,
        "flex-flow": "column",
        "align-items": (this.footerComponent != null ? this.footerComponent.alignItems : "flex-start")
      };
    }

    return {
      display: 'block',
      "text-align": TextAlign[this.footerAlign],
    };
  }

  get bodyIconStyle(): object {
    if (this.verticalBody) {
      return {
        padding: '1em',
      };
    }

    if (this.iconSide == "right") {
      return {
        order: 1,
        'padding-right': '1em',
        'padding-left': '0.3em'
      };
    }

    return {};
  }

  onClick(): void {
    if (this.buttonClick != null) {
      this.buttonClick();
    }
  }

}
