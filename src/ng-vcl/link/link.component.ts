import { Observable ,  Subscription ,  of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, Input, HostBinding, ViewChild, ElementRef, Optional } from '@angular/core';

@Component({
  selector: 'a[vcl-link]',
  templateUrl: 'link.component.html'
})
export class LinkComponent {

  @Input()
  href: string | undefined;

  @Input()
  label: string | undefined;

  @HostBinding('attr.title')
  @HostBinding('attr.aria-label')
  @Input()
  title: string | undefined;

  @Input()
  prepIcon: string | undefined;

  @Input()
  appIcon: string | undefined;

  @Input()
  scheme: string | undefined;

  @HostBinding('class.vclDisabled')
  @Input()
  disabled: boolean | undefined;

  @HostBinding('style.cursor')
  get styleCursor() {
    return this.disabled ? 'not-allowed' : 'pointer';
  }

  @HostBinding('attr.href')
  get attrHref(): string | null {
    const href = this.scheme && this.href ? `${this.scheme}:${this.href}` : this.href;
    return this.disabled ? null : href || null;
  }

  @HostBinding('class.vclContentLink')
  get useIcogram() {
    return (this.appIcon || this.prepIcon);
  }

}
