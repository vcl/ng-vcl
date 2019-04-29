import { InjectionToken, TemplateRef } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { Observable, Subject } from 'rxjs';

export interface Tab {
  portal?: TemplatePortal;
}

export interface TabNav {
  currentTab?: Tab;
  currentTabChanged: Observable<void>;
  selectTab(tab?: Tab): void;
}

export const TAB_NAV_TOKEN = new InjectionToken<TabNav>('vcl_tab_nav');
