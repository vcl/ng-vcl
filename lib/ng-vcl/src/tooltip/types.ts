import { InjectionToken, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Portal } from '@angular/cdk/portal';

export type TooltipPosition =  'left' | 'right' | 'top' | 'bottom';
export type TooltipPositions =  TooltipPosition | [TooltipPosition];

export interface Tooltip {
  arrowPosition?: TooltipPosition;
  arrowPointer: boolean;
  value?: string | Portal<any>;
  stateChanged: Observable<any>;
}

export const TOOLTIP_TOKEN = new InjectionToken<Tooltip>('vcl_tooltip');
