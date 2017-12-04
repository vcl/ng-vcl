import { WormholeAttributes } from '../wormhole/wormhole';

export enum NotificationType {
  None,
  Info,
  Success,
  Warning,
  Error
}

export enum NotificationPosition {
  TopRight,
  Top,
  TopLeft,
  BottomRight,
  Bottom,
  BottomLeft,
}

export interface NotificationOptions {
  text?: string;
  html?: boolean;
  contentComponentDetails?: { contentComponentClass: any, attributes?: WormholeAttributes};
  type?: NotificationType;
  showCloseButton?: boolean;
  position?: NotificationPosition;
  timeout?: number | boolean;
  backgroundColor?: string;
  textColor?: string;
}

export const NOTIFICATION_DEFAULTS: NotificationOptions = {
  html: false,
  type: NotificationType.None,
  position: NotificationPosition.TopRight,
  showCloseButton: true
};

export const TYPE_CLASS_MAP: any = {
  [NotificationType.None]: {
    notificationClass: '',
    iconClass: ''
  },
  [NotificationType.Info]: {
    notificationClass: 'vclInfo',
    iconClass: 'fa fa-info-circle'
  },
  [NotificationType.Success]: {
    notificationClass: 'vclSuccess',
    iconClass: 'fa fa-check-circle'
  },
  [NotificationType.Warning]: {
    notificationClass: 'vclWarning',
    iconClass: 'fa fa-warning'
  },
  [NotificationType.Error]: {
    notificationClass: 'vclError',
    iconClass: 'fa fa-exclamation-circle'
  }
};


export const POSITION_MAP = {
  [NotificationPosition.TopRight]: {
    class: 'vclLayerNotificationTopRight',
    reverse: true
  },
  [NotificationPosition.Top]: {
    class: 'vclLayerNotificationTop',
    reverse: true,
  },
  [NotificationPosition.TopLeft]: {
    class: 'vclLayerNotificationTopLeft',
    reverse: true
  },
  [NotificationPosition.BottomRight]: {
    class: 'vclLayerNotificationBottomRight',
    reverse: false
  },
  [NotificationPosition.Bottom]: {
    class: 'vclLayerNotificationBottom',
    reverse: false
  },
  [NotificationPosition.BottomLeft]: {
    class: 'vclLayerNotificationBottomLeft',
    reverse: false
  },
};

const x = NotificationType.Error;
