import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'vcl-tooltip',
  templateUrl: './tooltip.component.html',
  exportAs: 'vclTooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  @ViewChild(TemplateRef, { static: false })
  templateRef: TemplateRef<any>;
}
