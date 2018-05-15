import { Observable ,  Subscription ,  of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, Input, HostBinding, ViewChild, ElementRef, Optional, Directive } from '@angular/core';

@Component({
  selector: 'a[vcl-link]',
  templateUrl: 'link.component.html'
})
export class LinkComponent {

  @HostBinding('attr.title')
  @HostBinding('attr.aria-label')
  @Input()
  title: string | undefined;

  @HostBinding('class.vclDisabled')
  @Input()
  disabled: boolean = false;

  @HostBinding('style.cursor')
  get styleCursor() {
    return this.disabled ? 'not-allowed' : 'pointer';
  }

  @Input()
  href: string | undefined;

  @Input()
  label: string | undefined;

  @Input()
  prepIcon: string | undefined;

  @Input()
  appIcon: string | undefined;

  @HostBinding('attr.href')
  get attrHref() {
    console.log(this.disabled, this.href);
    return this.disabled ? undefined : this.href;
  }

  @HostBinding('class.vclContentLink')
  get useIcogram() {
    return (this.appIcon || this.prepIcon);
  }
}
