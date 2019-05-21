import { Component, ChangeDetectionStrategy, Optional, Inject } from '@angular/core';
import { TOOLTIP_TOKEN, Tooltip } from './types';

@Component({
  selector: 'vcl-tooltip-inline',
  templateUrl: './tooltip-inline.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipInlineComponent {
  constructor(
    @Optional()
    @Inject(TOOLTIP_TOKEN)
    public tooltip: Tooltip
  ) { }
}
