import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: '[vcl-link]',
  templateUrl: 'link.component.html',
  host: {
    '[attr.touch-action]': 'touchAction', // TODO - no function?
    '[attr.aria-label]': 'title | loc',
    '[attr.title]': 'title | loc'
  },
})
export class LinkComponent {

  @Input()
  href: string;

  @Input()
  label: string;

  @Input()
  title: string;

  @Input()
  scheme: string;

  @Input()
  prepIcon: string;

  @Input()
  appIcon: string;

  @HostBinding('class.vclDisabled')
  @Input()
  disabled: boolean;

  @HostBinding('attr.href')
  get attrHref(): string {
    if (this.disabled) return null;

    return this.scheme
      ? `${this.scheme}:${this.href}`
      : this.href;
  }
}
