import { TemplatePortal } from '@angular/cdk/portal';
import {
  Input,
  Component,
  ViewContainerRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { SubSink } from 'subsink';

import { RatingComponent } from './rating.component';

@Component({
  selector: 'vcl-rating-item-label',
  template: '<ng-template [cdkPortalOutlet]="portal"></ng-template>',
  exportAs: 'vclRatingItemLabel',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingItemLabelComponent implements OnDestroy {
  private subscriptions = new SubSink();

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef
  ) {}

  portal?: TemplatePortal;

  _target?: RatingComponent;

  @Input()
  set target(target: RatingComponent) {
    this._target = target;

    if (this._target) {
      this.subscriptions?.unsubscribe();
      this.subscriptions.sink = this._target.labelTemplateChange.subscribe(
        tpl => {
          if (tpl) {
            this.portal = new TemplatePortal(tpl, this.viewContainerRef);
          } else {
            this.portal = undefined;
          }
          this.cdRef.markForCheck();
          this.cdRef.detectChanges();
        }
      );
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
