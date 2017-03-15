import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Component, Input, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { L10nService } from '../l10n/index';
import { ObservableComponent } from '../core/index';

@Component({
  selector: '[vcl-link]',
  templateUrl: 'link.component.html'
})
export class LinkComponent extends ObservableComponent {

  @Input()
  href: string | undefined;

  @Input()
  label: string | undefined;

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

  locLabel$ = this.observeChangeValue<string>('label').switchMap( label => this.l10n.localize(label));
  locTitle$ = this.observeChangeValue<string>('title').switchMap( title => this.l10n.localize(title));

  @HostBinding('attr.title')
  @HostBinding('attr.aria-label')
  locTitle: string;

  locLabel: string;

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

  constructor(private l10n: L10nService) {
    super();
    this.locTitle$.subscribe(title => this.locTitle = title);
  }
}
