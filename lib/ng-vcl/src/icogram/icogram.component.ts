import {
  Component,
  Input,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

@Component({
    selector: 'vcl-icogram, [vcl-icogram]',
    templateUrl: 'icogram.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class IcogramComponent {
  @HostBinding('class.icogram')
  hostClasses = true;
}

@Component({
    selector: '[vcl-a-icogram]',
    templateUrl: 'icogram.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class IcogramLinkComponent extends IcogramComponent {
  @HostBinding('class.content-link')
  clsContentLink = true;

  @HostBinding('attr.title')
  @HostBinding('attr.aria-label')
  @Input()
  title: string | undefined;

  @HostBinding('class.disabled')
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
