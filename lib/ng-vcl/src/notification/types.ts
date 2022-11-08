export enum NotificationType {
  None = 'none',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export const NOTIFICATION_TYPE_CLASS_MAP: {
  [key: string]: { class: string; icon: string };
} = {
  [NotificationType.None]: {
    class: undefined,
    icon: undefined,
  },
  [NotificationType.Info]: {
    class: 'info',
    icon: 'vcl:info',
  },
  [NotificationType.Success]: {
    class: 'success',
    icon: 'vcl:success',
  },
  [NotificationType.Warning]: {
    class: 'warning',
    icon: 'vcl:warning',
  },
  [NotificationType.Error]: {
    class: 'error',
    icon: 'vcl:error',
  },
};
