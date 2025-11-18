import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  Directive,
  ContentChildren,
  QueryList,
  Self,
} from '@angular/core';
import { NEVER, merge } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { NOTIFICATION_TYPE_CLASS_MAP, NotificationType } from './types';
import { NgClass } from '@angular/common';
import { VCLIconComponent } from '../icon';

@Directive({
  selector: 'vcl-notification-title',
})
export class VCLNotificationTitleDirective {
  @HostBinding('class.flex')
  hostClasses = true;
}

@Directive({
  selector: 'vcl-notification-header',
})
export class VCLNotificationHeaderDirective {
  @HostBinding('class.notification-header')
  hostClasses = true;
}

@Directive({
  selector: 'vcl-notification-footer',
})
export class VCLNotificationFooterDirective {
  @HostBinding('class.notification-footer')
  hostClasses = true;
}

@Component({
  selector: 'vcl-notification',
  templateUrl: './notification.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgClass],
  styles: [
    `
      :host .notification-header:empty {
        display: none;
      }
      :host .notification-footer:empty {
        display: none;
      }
    `,
  ],
  imports: [VCLIconComponent],
})
export class VCLNotificationComponent {
  constructor(
    @Self()
    private ngClass: NgClass
  ) {}

  @HostBinding('class.notification')
  hostClasses = true;

  typeIcon?: string;
  hasTitle = false;

  @Input()
  set type(value: NotificationType) {
    const type = NOTIFICATION_TYPE_CLASS_MAP[value];
    if (type) {
      this.ngClass.ngClass = type.class;
      this.typeIcon = type.icon;
      this.ngClass.ngDoCheck();
    }
  }

  @Input()
  icon?: string | boolean;

  @Input()
  showCloseButton?: Boolean = false;

  @Output()
  close = new EventEmitter();

  @ContentChildren(VCLNotificationTitleDirective)
  notificationTitle: QueryList<VCLNotificationTitleDirective>;

  get hasIcon() {
    return (
      this.icon !== false &&
      (typeof this.icon === 'string' || typeof this.typeIcon === 'string')
    );
  }

  onCloseClick() {
    this.close.emit();
  }

  ngAfterContentInit(): void {
    merge(this.notificationTitle ? this.notificationTitle.changes : NEVER)
      .pipe(startWith(undefined))
      .subscribe(() => {
        this.hasTitle = this.notificationTitle.length > 0;
      });
  }
}
