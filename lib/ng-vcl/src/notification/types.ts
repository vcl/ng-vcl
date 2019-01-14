enum NotificationType {
  Default,
  Info,
  Warning,
  Error,
  Success
}

const DATA = {
  [NotificationType.Default]: {
    icon: 'fa-bell-o',
    class: ''
  },
  [NotificationType.Info]: {
    icon: 'fa-info-circle',
    class: 'vclInfo'
  },
  [NotificationType.Warning]: {
    icon: 'fa-warning',
    class: 'vclWarning'
  },
  [NotificationType.Error]: {
    icon: 'fa-exclamation-circle',
    class: 'vclError'
  },
  [NotificationType.Success]: {
    icon: 'fa-check-circle',
    class: 'vclSuccess'
  },
};

const FlexAlign = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
};

const TextAlign = {
  left: 'left',
  center: 'center',
  right: 'right'
};

enum IconType {
  FA = 'fa',
  Custom = 'custom',
  Image = 'image'
}

  export function notificationTypeFromString(type: string): NotificationType {
    switch (type.toLocaleLowerCase()) {
      default:
        return NotificationType.Default;
      case 'info':
        return NotificationType.Info;
      case 'warning':
        return NotificationType.Warning;
      case 'error':
        return NotificationType.Error;
      case 'success':
        return NotificationType.Success;
    }
  }

  export function notificationIconFromType(type: NotificationType): string {
    return DATA[type].icon;
  }

  export function notificationStyleClassFromType(type: NotificationType): string {
    return DATA[type].class;
  }

export { NotificationType, FlexAlign, TextAlign, IconType };
