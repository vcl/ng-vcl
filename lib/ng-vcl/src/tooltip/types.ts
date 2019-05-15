import { InjectionToken } from '@angular/core';

export type TooltipPosition = 'left' | 'right' | 'top' | 'bottom';

export interface Tooltip {
  position: TooltipPosition;
  arrowPointer: boolean;
  content: string;
}

export const TOOLTIP_TOKEN = new InjectionToken<Tooltip>('vcl_tooltip');
