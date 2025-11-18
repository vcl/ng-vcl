import {
  Input,
  Component,
  ViewContainerRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { VCLRatingComponent } from './rating.component';
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'vcl-rating-item-label',
  template: '<ng-template [cdkPortalOutlet]="portal"></ng-template>',
  exportAs: 'vclRatingItemLabel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CdkPortalOutlet],
})
export class VCLRatingItemLabelComponent implements OnDestroy {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef
  ) {}

  portal?: TemplatePortal;

  _target?: VCLRatingComponent;
  _sub?: Subscription;

  @Input()
  set target(target: VCLRatingComponent) {
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
