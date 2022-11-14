import {
  Input,
  Component,
  TemplateRef,
  ViewContainerRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { RatingComponent } from './rating.component';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'vcl-rating-item-label',
  template: '<ng-template [cdkPortalOutlet]="portal"></ng-template>',
  exportAs: 'vclRatingItemLabel',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingItemLabelComponent implements OnDestroy {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef
  ) {}

  portal?: TemplatePortal;

  _target?: RatingComponent;
  _sub?: Subscription;

  @Input()
  set target(target: RatingComponent) {
    this._target = target;

    if (this._target) {
      this._sub && this._sub.unsubscribe();
      this._sub = undefined;

      this._target.labelTemplateChange.subscribe(tpl => {
        if (tpl) {
          this.portal = new TemplatePortal(tpl, this.viewContainerRef);
        } else {
          this.portal = undefined;
        }
        this.cdRef.markForCheck();
        this.cdRef.detectChanges();
      });
    }
  }

  ngOnDestroy() {
    this._sub && this._sub.unsubscribe();
    this._sub = undefined;
  }
}
