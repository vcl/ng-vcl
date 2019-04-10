import { Observable } from 'rxjs';

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
  modal?: boolean;
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
  input?: AlertInput;
  inputValue?: any;
  inputPlaceholder?: string;
  inputValidator?: (value: any) => boolean;
  confirmAction?: Function | Observable<any>;
}

export const ALERT_DEFAULTS: AlertOptions = {
  type: AlertType.None,
  html: false,
  showConfirmButton: true,
  showCancelButton: false,
  showCloseButton: false,
  modal: false,
  cancelButtonLabel: 'Cancel',
  cancelButtonClass: 'vclTransparent vclOutline',
  confirmButtonLabel: 'OK',
  confirmButtonClass: 'vclEmphasized',
  input: AlertInput.None,
};

export const TYPE_CLASS_MAP = {
  [AlertType.None]: {
    alertClass: '',
    iconClass: ''
  },
  [AlertType.Question]: {
    alertClass: '',
    iconClass: 'vcl:question'
  },
  [AlertType.Info]: {
    alertClass: 'vclInfo',
    iconClass: 'vcl:info'
  },
  [AlertType.Success]: {
    alertClass: 'vclSuccess',
    iconClass: 'vcl:success'
  },
  [AlertType.Warning]: {
    alertClass: 'vclWarning',
    iconClass: 'vcl:warning'
  },
  [AlertType.Error]: {
    alertClass: 'vclError',
    iconClass: 'vcl:error'
  }
};

export interface AlertResult {
  action: 'confirm' | 'close' | 'cancel' | 'error';
  value?: any;
}
