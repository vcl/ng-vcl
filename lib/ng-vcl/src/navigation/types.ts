import { InjectionToken } from '@angular/core';

export interface Navigation {
  deselectAll(): void;
}


export const NAVIGATION_TOKEN = new InjectionToken<Navigation>('vcl-navigation');
