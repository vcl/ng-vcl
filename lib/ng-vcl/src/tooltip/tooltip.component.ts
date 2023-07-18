import { TemplatePortal } from '@angular/cdk/portal';
import {
  Component,
  ChangeDetectionStrategy,
  Optional,
  Inject,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { TOOLTIP_TOKEN, Tooltip } from './types';

@Component({
  selector: 'vcl-tooltip',
  templateUrl: './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent implements OnInit, OnDestroy {
  get isString() {
    return typeof this.tooltip.value === 'string';
  }
  get isTemplatePortal() {
    return this.tooltip.value instanceof TemplatePortal;
  }

  private subscriptions: Subscription[] = [];

  constructor(
    @Optional()
    @Inject(TOOLTIP_TOKEN)
    public tooltip: Tooltip,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.tooltip.stateChanged.subscribe(() => {
        this.cdRef.markForCheck();
        this.cdRef.detectChanges();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s?.unsubscribe());
  }
}
