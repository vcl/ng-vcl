import { Component, HostBinding, ChangeDetectionStrategy, Renderer2, Input, Output, EventEmitter, OnInit, Directive, ContentChildren, QueryList, ElementRef, Self } from '@angular/core';
import { NEVER, merge } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { NOTIFICATION_TYPE_CLASS_MAP, NotificationType } from './types';
import { NgClass } from '@angular/common';

@Directive({
  selector: 'vcl-notification-title',
})
export class NotificationTitleDirective  {
  @HostBinding('class.flex')
  hostClasses = true;
}

@Directive({
  selector: 'vcl-notification-header',
})
export class NotificationHeaderDirective {
  @HostBinding('class.notification-header')
  hostClasses = true;
}

@Directive({
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
  styles: [`
    :host .notification-header:empty {
      display: none;
    }
    :host .notification-footer:empty {
      display: none;
    }
  `]
})
export class NotificationComponent {

  constructor(
    @Self()
    private ngClass: NgClass
  ) { }

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

  @ContentChildren(NotificationTitleDirective)
  notificationTitle: QueryList<NotificationTitleDirective>;

  get hasIcon() {
    return this.icon !== false && (typeof this.icon === 'string' || typeof this.typeIcon === 'string');
  }

  onCloseClick() {
    this.close.emit();
  }

  ngAfterContentInit(): void {
    merge(
      this.notificationTitle ? this.notificationTitle.changes : NEVER,
    ).pipe(
      startWith(undefined)
    ).subscribe(() => {
      this.hasTitle = this.notificationTitle.length > 0;
    });
  }
}
