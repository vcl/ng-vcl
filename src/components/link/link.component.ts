import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Component, Input, HostBinding } from '@angular/core';
import { L10nService } from '../../l10n/l10n.module';
import { ObservableComponent } from '../../reactive/index';

@Component({
  selector: '[vcl-link]',
  templateUrl: 'link.component.html',
  host: {
    '[attr.touch-action]': 'touchAction' // TODO - no function?
  },
})
export class LinkComponent extends ObservableComponent {

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

  locTitle$: Observable<string> = this.observeChange<string>('title').switchMap( title => this.l10n.localize(title));
  locTitleSub: Subscription;

  @HostBinding('attr.title')
  @HostBinding('attr.aria-label')
  locTitle: string;

  constructor(private l10n: L10nService) {
    super();
  }

  ngOnInit() {
    this.locTitleSub = this.locTitle$.subscribe(title => this.locTitle = title);
  }

  ngOnDestroy() {
    this.locTitleSub.unsubscribe();
  }
}
