export enum GrowlType {
  None,
  Info,
  Success,
  Warning,
  Error
}

export enum GrowlPosition {
  TopRight,
  Top,
  TopLeft,
  BottomRight,
  Bottom,
  BottomLeft,
}

export interface GrowlOptions {
  text?: string;
  html?: boolean;
  type?: GrowlType;
  showCloseButton?: boolean;
  position?: GrowlPosition;
  timeout?: number | boolean;
  backgroundColor?: string;
  textColor?: string;
}

export const GROWL_DEFAULTS: GrowlOptions = {
  html: false,
  type: GrowlType.None,
  position: GrowlPosition.TopRight,
  showCloseButton: true
};

export const POSITION_CLASS_MAP = {
  [GrowlPosition.TopRight]: 'vclLayerGrowlTopRight',
  [GrowlPosition.Top]: 'vclLayerGrowlTop',
  [GrowlPosition.TopLeft]: 'vclLayerGrowlTopLeft',
  [GrowlPosition.BottomRight]: 'vclLayerGrowlBottomRight',
  [GrowlPosition.Bottom]: 'vclLayerGrowlBottom',
  [GrowlPosition.BottomLeft]: 'vclLayerGrowlBottomLeft',
};

export const TYPE_CLASS_MAP = {
  [GrowlType.None]: {
    growlClass: '',
    iconClass: ''
  },
  [GrowlType.Info]: {
    growlClass: 'vclInfo',
    iconClass: 'fa fa-info-circle'
  },
  [GrowlType.Success]: {
    growlClass: 'vclSuccess',
    iconClass: 'fa fa-check-circle'
  },
  [GrowlType.Warning]: {
    growlClass: 'vclWarning',
    iconClass: 'fa fa-warning'
  },
  [GrowlType.Error]: {
    growlClass: 'vclError',
    iconClass: 'fa fa-exclamation-circle'
  }
};
