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

export const POSITION_CLASS_MAP = {
  [NotificationPosition.TopRight]: 'vclLayerNotificationTopRight',
  [NotificationPosition.Top]: 'vclLayerNotificationTop',
  [NotificationPosition.TopLeft]: 'vclLayerNotificationTopLeft',
  [NotificationPosition.BottomRight]: 'vclLayerNotificationBottomRight',
  [NotificationPosition.Bottom]: 'vclLayerNotificationBottom',
  [NotificationPosition.BottomLeft]: 'vclLayerNotificationBottomLeft',
};

export const TYPE_CLASS_MAP = {
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
