import {Component, ContentChild, EventEmitter, Input, Output} from '@angular/core';
import {NotificationType, FlexAlign, TextAlign, IconType, notificationTypeFromString, notificationIconFromType, notificationStyleClassFromType} from './types';
import {NotificationBodyComponent} from './notification-body.component';
import {NotificationFooterComponent} from './notification-footer.component';
import {NotificationHeaderComponent} from './notification-header.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'vcl-notification',
  templateUrl: 'notification.component.html',
})
export class NotificationComponent {

  @Input()
  nType: 'default' | 'info' | 'warning' | 'error' | 'success' = 'default';

  @Input()
  icon: string = '';

  @Input()
  iconClass: string = '';

  @Input()
  iconImage: string = '';

  @Input()
  iconSide: 'left' | 'right' = 'left';

  @Input()
  drawIcon: boolean = true;

  @Input()
  header: string = '';

  @Input()
  footer: string = '';

  @Input()
  button: string = '';

  @Input()
  showButton: boolean = true;

  @Input()
  verticalBody: boolean = false;

  @Input()
  styleClass: object | string | undefined = undefined;

  @Input()
  headerAlign: 'left' | 'center' | 'right' = 'left';

  @Input()
  bodyAlign: 'left' | 'center' | 'right' = 'center';

  @Input()
  footerAlign: 'left' | 'center' | 'right' = 'left';

  @Input()
  textColor: string = '';

  @Input()
  backgroundColor: string = '';

  @ContentChild(NotificationHeaderComponent)
  headerComponent: NotificationHeaderComponent | null;

  @ContentChild(NotificationBodyComponent)
  bodyComponent: NotificationBodyComponent | null;

  @ContentChild(NotificationFooterComponent)
  footerComponent: NotificationFooterComponent | null;

  private buttonClickEvent = new EventEmitter<any>();

  @Output()
  get buttonClick(): Observable<any> {
    return this.buttonClickEvent.asObservable();
  }

  get eType(): NotificationType {
    return notificationTypeFromString(this.nType);
  }

  get notificationStyleClass(): object | string {
    if (this.styleClass) {
      return this.styleClass;
    }

    return notificationStyleClassFromType(this.eType);
  }

  get notificationStyles(): object {
    return {
      color: this.textColor,
      'background-color': this.backgroundColor
    };
  }

  get eIconClass(): string {
    if (this.icon) {
      return 'fa ' + this.icon;
    } else if (this.iconClass) {
      return this.iconClass;
    }

    return 'fa ' + notificationIconFromType(this.eType);
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
        'flex-flow': 'column',
        'align-items': (this.headerComponent != null ? this.headerComponent.alignItems : 'flex-start')
      };
    }

    return {
      'text-align': TextAlign[this.headerAlign]
    };
  }

  get bodyStyle(): object {
    if (this.nested) {
      return {
        padding: 0,
        'flex-flow': 'column',
        'flex-direction': 'row',
        'align-items': (this.bodyComponent != null ? this.bodyComponent.alignItems : 'flex-start')
      };
    }

    return {
      'flex-flow': this.verticalBody ? 'column' : '',
      'align-items': FlexAlign[this.bodyAlign],
      'text-align': this.verticalBody ? TextAlign[this.bodyAlign] : ''
    };
  }

  get footerStyle(): object {
    if (this.nested) {
      return {
        padding: 0,
        'flex-flow': 'column',
        'align-items': (this.footerComponent != null ? this.footerComponent.alignItems : 'flex-start')
      };
    }

    return {
      display: 'block',
      'text-align': TextAlign[this.footerAlign],
    };
  }

  get bodyIconStyle(): object {
    if (this.verticalBody) {
      return {
        padding: '1em',
      };
    }

    if (this.iconSide == 'right') {
      return {
        order: 1,
        'padding-right': '1em',
        'padding-left': '0.3em'
      };
    }

    return {};
  }

  onClick(): void {
    this.buttonClickEvent.emit(null);
  }

}
