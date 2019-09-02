import { PositionStrategy, OverlayRef } from '@angular/cdk/overlay';
import { InjectionToken } from '@angular/core';

export enum NotifierType {
  None = 'none',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error'
}

export enum NotifierPosition {
  TopRight,
  Top,
  TopLeft,
  BottomRight,
  Bottom,
  BottomLeft,
}

export interface NotifierOptions {
  text: string;
  icon?: string;
  html?: boolean;
  type?: NotifierType;
  showCloseButton?: boolean;
  position?: NotifierPosition;
  timeout?: number | boolean;
  class?: string;
}


export const TYPE_CLASS_MAP: {[key: string]: {notifier: string, icon: string} } = {
  [NotifierType.None]: {
    notifier: undefined,
    icon: undefined
  },
  [NotifierType.Info]: {
    notifier: 'vclInfo',
    icon: 'vcl:info'
  },
  [NotifierType.Success]: {
    notifier: 'vclSuccess',
    icon: 'vcl:success'
  },
  [NotifierType.Warning]: {
    notifier: 'vclWarning',
    icon: 'vcl:warning'
  },
  [NotifierType.Error]: {
    notifier: 'vclError',
    icon: 'vcl:error'
  }
};

export interface NotificationConfig {
  timeout: number;
  offset: number;
}

export const NOTIFICATION_CONFIG_DEFAULTS: NotificationConfig = {
  timeout: 3000,
  offset: 10
};

export const NOTIFICATION_CONFIG_TOKEN = new InjectionToken<NotificationConfig>('vcl-notification-config');


export interface NotificationAnimationParams {
  voidOpenTime: number;
  openClosingTime: number;
}

export const NOTIFICATION_ANIMATION_PARAMS_DEFAULTS: NotificationAnimationParams = {
  voidOpenTime: 300,
  openClosingTime: 300
};

export const NOTIFICATION_ANIMATION_PARAMS_TOKEN = new InjectionToken<NotificationConfig>('vcl-notification-animation-config');
