import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export type VclDrawerMode = 'open' | 'close';

export const DRAWER_CONTAINER_HOST = new InjectionToken('DRAWER_CONTAINER_HOST');

export interface Drawer {
  readonly opened: boolean;
}

export interface DrawerContainer {
  updateContentMargins(): void;
  notifyDrawerStateChange(drawer: Drawer, action: 'check' | 'toggle'): void;
}
