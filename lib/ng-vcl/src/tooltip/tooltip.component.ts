import {
  Component,
  ChangeDetectionStrategy,
  Optional,
  Inject,
  ChangeDetectorRef,
  TemplateRef,
} from '@angular/core';
import { TOOLTIP_TOKEN, Tooltip } from './types';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'vcl-tooltip',
  templateUrl: './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
