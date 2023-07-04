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
import { SubSink } from 'subsink';

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

  private subscriptions = new SubSink();

  constructor(
    @Optional()
    @Inject(TOOLTIP_TOKEN)
    public tooltip: Tooltip,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscriptions.sink = this.tooltip.stateChanged.subscribe(() => {
      this.cdRef.markForCheck();
      this.cdRef.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
