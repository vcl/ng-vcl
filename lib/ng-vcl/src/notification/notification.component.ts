import { NgClass } from '@angular/common';
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
  AfterContentInit,
  OnDestroy,
} from '@angular/core';
import { NEVER, Subscription, merge } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { NOTIFICATION_TYPE_CLASS_MAP, NotificationType } from './types';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'vcl-notification-title',
})
export class NotificationTitleDirective {
  @HostBinding('class.flex')
  hostClasses = true;
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'vcl-notification-header',
})
export class NotificationHeaderDirective {
  @HostBinding('class.notification-header')
  hostClasses = true;
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'vcl-notification-footer',
})
export class NotificationFooterDirective {
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
})
export class NotificationComponent implements AfterContentInit, OnDestroy {
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
  // eslint-disable-next-line @angular-eslint/no-output-native
  close = new EventEmitter();

  @ContentChildren(NotificationTitleDirective)
  notificationTitle: QueryList<NotificationTitleDirective>;

  get hasIcon() {
    return (
      this.icon !== false &&
      (typeof this.icon === 'string' || typeof this.typeIcon === 'string')
    );
  }

  private subscriptions: Subscription[] = [];

  constructor(
    @Self()
    private readonly ngClass: NgClass
  ) {}

  ngAfterContentInit(): void {
    this.subscriptions.push(
      merge(this.notificationTitle ? this.notificationTitle.changes : NEVER)
        .pipe(startWith(undefined))
        .subscribe(() => {
          this.hasTitle = this.notificationTitle.length > 0;
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s?.unsubscribe());
  }

  onCloseClick() {
    this.close.emit();
  }
}
