import { TemplatePortal } from '@angular/cdk/portal';
import {
  Input,
  Component,
  ViewContainerRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { RatingComponent } from './rating.component';

@Component({
  selector: 'vcl-rating-item-label',
  template: '<ng-template [cdkPortalOutlet]="portal"></ng-template>',
  exportAs: 'vclRatingItemLabel',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingItemLabelComponent implements OnDestroy {
  portal?: TemplatePortal;

  _target?: RatingComponent;

  @Input()
  set target(target: RatingComponent) {
    this._target = target;

    if (this._target) {
      this.subscriptions.forEach(s => s?.unsubscribe());
      this.subscriptions.push(
        this._target.labelTemplateChange.subscribe(tpl => {
          this.portal = tpl
            ? new TemplatePortal(tpl, this.viewContainerRef)
            : undefined;
          this.cdRef.markForCheck();
          this.cdRef.detectChanges();
        })
      );
    }
  }
  private subscriptions: Subscription[] = [];

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  ngOnDestroy() {
    this.subscriptions.forEach(s => s?.unsubscribe());
  }
}
