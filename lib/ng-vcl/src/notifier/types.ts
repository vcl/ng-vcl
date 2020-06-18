import { PositionStrategy } from '@angular/cdk/overlay';
import { InjectionToken } from '@angular/core';
import { Portal } from '@angular/cdk/portal';
import { NotificationType } from '../notification/index';

export enum NotifierPosition {
  TopRight = 'top-right',
  Top = 'top',
  TopLeft = 'top-left',
  BottomRight = 'bottom-right',
  Bottom = 'bottom',
  BottomLeft = 'bottom-left',
  Center = 'center',
}

export interface NotifierOptions {
  title?: string;
  content?: string | Portal<any>;
  icon?: string | false;
  type?: NotificationType;
  showCloseButton?: boolean;
  position?: NotifierPosition | PositionStrategy;
  timeout?: number | boolean;
  class?: string;
  hasBackdrop?: boolean;
  closeOnBackdrop?: boolean;
  context?: any;
}


export interface NotifierConfig {
  timeout: number;
  offset: number;
}

export const NOTIFIER_CONFIG_DEFAULTS: NotifierConfig = {
  timeout: 3000,
  offset: 10
};

export const NOTIFIER_CONFIG_TOKEN = new InjectionToken<NotifierConfig>('vcl-notification-config');


export interface NotificationAnimationParams {
  voidOpenTime: number;
  openClosingTime: number;
}

export const NOTIFIER_ANIMATION_PARAMS_DEFAULTS: NotificationAnimationParams = {
  voidOpenTime: 300,
  openClosingTime: 300
};

export const NOTIFIER_ANIMATION_PARAMS_TOKEN = new InjectionToken<NotifierConfig>('vcl-notification-animation-config');
