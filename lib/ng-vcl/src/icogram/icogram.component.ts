import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'vcl-icogram, [vcl-icogram]',
  templateUrl: 'icogram.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IcogramComponent {

  @HostBinding('class.vclIcogram')
  clsIcogram = true;

  @Input()
  prepIcon: string;

  @Input()
  appIcon: string;
}

@Component({
  selector: '[vcl-a-icogram]',
  templateUrl: 'icogram.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IcogramLinkComponent extends IcogramComponent {

  @HostBinding('class.vclContentLink')
  clsContentLink = true;

  @HostBinding('attr.title')
  @HostBinding('attr.aria-label')
  @Input()
  title: string | undefined;

  @HostBinding('class.vclDisabled')
  @Input()
  disabled = false;

  @HostBinding('style.cursor')
  get styleCursor() {
    return this.disabled ? 'not-allowed' : 'pointer';
  }

  @Input()
  href: string | undefined;

  @HostBinding('attr.href')
  get attrHref() {
    return this.disabled ? undefined : this.href;
  }

}
