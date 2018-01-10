enum NotificationNewType {
  Default,
  Info,
  Warning,
  Error,
  Success
}

const data = {
  [NotificationNewType.Default]: {
    icon: "fa-bell-o",
    class: ""
  },
  [NotificationNewType.Info]: {
    icon: "fa-info-circle",
    class: "vclInfo"
  },
  [NotificationNewType.Warning]: {
    icon: "fa-warning",
    class: "vclWarning"
  },
  [NotificationNewType.Error]: {
    icon: "fa-exclamation-circle",
    class: "vclError"
  },
  [NotificationNewType.Success]: {
    icon: "fa-check-circle",
    class: "vclSuccess"
  },
};

const FlexAlign = {
  left: "flex-start",
  center: "center",
  right: "flex-end"
};

const TextAlign = {
  left: "left",
  center: "center",
  right: "right"
};

enum IconType {
  FA = "fa",
  Custom = "custom",
  Image = "image"
}

namespace NotificationNewType {
  export function fromString(type: string): NotificationNewType {
    switch (type.toLocaleLowerCase()) {
      default:
        return NotificationNewType.Default;
      case "info":
        return NotificationNewType.Info;
      case "warning":
        return NotificationNewType.Warning;
      case "error":
        return NotificationNewType.Error;
      case "success":
        return NotificationNewType.Success;
    }
  }

  export function icon(type: NotificationNewType): string {
    return data[type].icon;
  }

  export function styleClass(type: NotificationNewType): string {
    return data[type].class;
  }
}

export {NotificationNewType, FlexAlign, TextAlign, IconType};
