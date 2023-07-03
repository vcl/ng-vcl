import { Portal } from '@angular/cdk/portal';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export type TooltipPosition = 'left' | 'right' | 'top' | 'bottom';
export type TooltipPositions = TooltipPosition | [TooltipPosition];

export interface Tooltip {
  arrowPosition?: TooltipPosition;
  arrowPointer: boolean;
  value?: string | Portal<any>;
  stateChanged: Observable<any>;
}

export const TOOLTIP_TOKEN = new InjectionToken<Tooltip>('vcl_tooltip');
