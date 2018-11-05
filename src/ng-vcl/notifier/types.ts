import { WormholeAttributes } from '../wormhole/wormhole';

export enum NotifierType {
  None,
  Info,
  Success,
  Warning,
  Error
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
  text?: string;
  html?: boolean;
  contentComponentDetails?: { contentComponentClass: any, attributes?: WormholeAttributes};
  type?: NotifierType;
  showCloseButton?: boolean;
  position?: NotifierPosition;
  timeout?: number | boolean;
  backgroundColor?: string;
  textColor?: string;
}

export const NOTIFIER_DEFAULTS: NotifierOptions = {
  html: false,
  type: NotifierType.None,
  position: NotifierPosition.TopRight,
  showCloseButton: true
};

export const TYPE_CLASS_MAP: any = {
  [NotifierType.None]: {
    notifierClass: '',
    iconClass: ''
  },
  [NotifierType.Info]: {
    notifierClass: 'vclInfo',
    iconClass: 'fas fa-info-circle'
  },
  [NotifierType.Success]: {
    notifierClass: 'vclSuccess',
    iconClass: 'fas fa-check-circle'
  },
  [NotifierType.Warning]: {
    notifierClass: 'vclWarning',
    iconClass: 'fas fa-exclamation-triangle'
  },
  [NotifierType.Error]: {
    notifierClass: 'vclError',
    iconClass: 'fas fa-exclamation-circle'
  }
};


export const POSITION_MAP = {
  [NotifierPosition.TopRight]: {
    class: 'vclLayerNotificationTopRight',
    reverse: true
  },
  [NotifierPosition.Top]: {
    class: 'vclLayerNotificationTop',
    reverse: true,
  },
  [NotifierPosition.TopLeft]: {
    class: 'vclLayerNotificationTopLeft',
    reverse: true
  },
  [NotifierPosition.BottomRight]: {
    class: 'vclLayerNotificationBottomRight',
    reverse: false
  },
  [NotifierPosition.Bottom]: {
    class: 'vclLayerNotificationBottom',
    reverse: false
  },
  [NotifierPosition.BottomLeft]: {
    class: 'vclLayerNotificationBottomLeft',
    reverse: false
  },
};

const x = NotifierType.Error;
