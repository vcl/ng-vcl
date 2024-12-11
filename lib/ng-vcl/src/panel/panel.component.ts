import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  AfterContentInit,
  QueryList,
  ContentChildren,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { merge, NEVER, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import {
  PanelFooterButtonDirective,
  PanelTitleDirective,
} from './panel.directive';

@Component({
    selector: 'vcl-panel, vcl-panel-dialog',
    templateUrl: './panel.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['panel.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class PanelComponent implements AfterContentInit, OnDestroy {
  contentSub?: Subscription;

  @HostBinding('class.panel')
  hostClasses = true;

  @HostBinding('class.warning')
  get warning() {
    return this.type === 'warning';
  }

  @HostBinding('class.danger')
  get danger() {
    return this.type === 'danger';
  }

  @HostBinding('class.error')
  get error() {
    return this.type === 'error';
  }

  @HostBinding('class.success')
  get success() {
    return this.type === 'success';
  }

  @HostBinding('class.info')
  get info() {
    return this.type === 'info';
  }

  @Input()
  type?: string;

  @Input()
  showCloseButton: Boolean = false;

  @Output()
  close = new EventEmitter();

  @ContentChildren(PanelFooterButtonDirective)
  panelFooterButtons?: QueryList<PanelFooterButtonDirective>;

  @ContentChildren(PanelTitleDirective)
  panelTitle: QueryList<PanelTitleDirective>;

  hasFooterButtons = false;
  hasTitle = false;

  onCloseClick() {
    this.close.emit();
  }

  ngAfterContentInit(): void {
    merge(
      this.panelTitle ? this.panelTitle.changes : NEVER,
      this.panelFooterButtons ? this.panelFooterButtons.changes : NEVER
    )
      .pipe(startWith(undefined))
      .subscribe(() => {
        this.hasFooterButtons = this.panelFooterButtons.length > 0;
        this.hasTitle = this.panelTitle.length > 0;
      });
  }

  ngOnDestroy(): void {
    this.contentSub?.unsubscribe();
  }
}
