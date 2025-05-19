import {
  Component,
  ChangeDetectionStrategy,
  Optional,
  Inject,
  ChangeDetectorRef,
} from '@angular/core';
import { TOOLTIP_TOKEN, Tooltip } from './types';
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { NgIf } from '@angular/common';

@Component({
  selector: 'vcl-tooltip',
  templateUrl: './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, CdkPortalOutlet],
})
export class TooltipComponent {
  constructor(
    @Optional()
    @Inject(TOOLTIP_TOKEN)
    public tooltip: Tooltip,
    private cdRef: ChangeDetectorRef
  ) {
    tooltip.stateChanged.subscribe(() => {
      this.cdRef.markForCheck();
      this.cdRef.detectChanges();
    });
  }

  get isString() {
    return typeof this.tooltip.value === 'string';
  }
  get isTemplatePortal() {
    return this.tooltip.value instanceof TemplatePortal;
  }
}
