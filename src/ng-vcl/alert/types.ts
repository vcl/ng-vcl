import { Observable } from "rxjs/Observable";

export enum AlertType {
  None,
  Question,
  Info,
  Success,
  Warning,
  Error
}

export enum AlertAlignment {
  Left,
  Center,
  Right
}

export enum AlertInput {
  None,
  Text
}

export interface AlertOptions {
  text?: string;
  title?: string;
  html?: boolean;
  type?: AlertType;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  showCloseButton?: boolean;
  offClickClose?: boolean;
  escClose?: boolean;
  customClass?: string;
  confirmButtonLabel?: string;
  confirmButtonClass?: string;
  confirmButtonColor?: string;
  confirmButtonPrepIcon?: string;
  confirmButtonAppIcon?: string;
  cancelButtonLabel?: string;
  cancelButtonClass?: string;
  cancelButtonColor?: string;
  cancelButtonPrepIcon?: string;
  cancelButtonAppIcon?: string;
  loader?: boolean;
  loaderOnConfirm?: boolean;
  input?: AlertInput;
  inputValue?: any;
  inputPlaceholder?: string;
  inputValidator?: { (value: any): boolean  };
  contentAlignment?: AlertAlignment;
  titleAlignment?: AlertAlignment;
  iconAlignment?: AlertAlignment;
  buttonAlignment?: AlertAlignment;
  confirmAction?: Function | Observable<any>;
}

export const ALERT_DEFAULTS: AlertOptions = {
  type: AlertType.None,
  html: false,
  showConfirmButton: true,
  showCancelButton: false,
  showCloseButton: false,
  offClickClose: true,
  escClose: true,
  cancelButtonLabel: 'Cancel',
  cancelButtonClass: 'vclDanger',
  confirmButtonLabel: 'OK',
  confirmButtonClass: 'vclEmphasized',
  loader: false,
  loaderOnConfirm: false,
  input: AlertInput.None,
  contentAlignment: AlertAlignment.Left,
  titleAlignment: AlertAlignment.Left,
  iconAlignment: AlertAlignment.Left,
  buttonAlignment: AlertAlignment.Right,
};

export const TYPE_CLASS_MAP = {
  [AlertType.None]: {
    alertClass: '',
    iconClass: ''
  },
  [AlertType.Question]: {
    alertClass: '',
    iconClass: 'fa fa-question-circle'
  },
  [AlertType.Info]: {
    alertClass: 'vclInfo',
    iconClass: 'fa fa-info-circle'
  },
  [AlertType.Success]: {
    alertClass: 'vclSuccess',
    iconClass: 'fa fa-check-circle'
  },
  [AlertType.Warning]: {
    alertClass: 'vclWarning',
    iconClass: 'fa fa-warning'
  },
  [AlertType.Error]: {
    alertClass: 'vclError',
    iconClass: 'fa fa-exclamation-circle'
  }
};

export const TEXT_ALIGNMENT_CLASS_MAP = {
  [AlertAlignment.Left]: 'vclAlignLeft',
  [AlertAlignment.Center]: 'vclAlignCentered',
  [AlertAlignment.Right]: 'vclAlignRight',
};

export const BUTTON_ALIGNMENT_CLASS_MAP = {
  [AlertAlignment.Left]: 'vclLayoutStartJustified',
  [AlertAlignment.Center]: 'vclLayoutCenterJustified',
  [AlertAlignment.Right]: 'vclLayoutEndJustified',
};

export interface AlertResult {
  value?: any;
  close?: {(): void };
}

export class AlertError extends Error {
  constructor(public reason: string, message?: string) {
    super(message);
  }
}
