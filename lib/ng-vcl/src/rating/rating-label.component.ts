import { Input, HostBinding, HostListener, ContentChild, Directive, Component, TemplateRef, ViewContainerRef, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { RatingComponent } from './rating.component';
import { TemplatePortal } from '@angular/cdk/portal';


@Component({
  selector: 'vcl-rating-item-label',
  template: '<ng-template [cdkPortalOutlet]="portal"></ng-template>'
})
export class RatingItemLabelComponent {
  constructor(private viewContainerRef: ViewContainerRef, private cdRef: ChangeDetectorRef) { }

  portal?: TemplatePortal;

  _target?: RatingComponent;

  @Input()
  set target(target: RatingComponent) {
    this._target = target;

    if (this._target) {
      this._target.stateChange.subscribe(() => {
        const value = this._target._hoveredValue  === undefined ? this._target.value : this._target._hoveredValue;
        const idx = Math.floor(value) - 1;
        const item = this._target.ratingItems[idx];
        if (item && item.content) {
          this.setTemplate(item.content);
        }
      });
    }

  }

  setTemplate(template: TemplateRef<any>) {
    this.portal = new TemplatePortal(template, this.viewContainerRef);
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }
}
