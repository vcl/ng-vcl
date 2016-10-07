import { Injectable } from '@angular/core';

@Injectable()
export class IconService {

  fa(icon: string) {
    const fa = icon.split(':').join(' fa-');
    return `fa fa-${fa}`;
  }

  lookup(icon: string) {
    if (typeof icon === 'string' && icon) {
      let iconName = icon;
      let providerName: string;
      let iconParts = iconName.split(/:(.+)?/);
      if (iconParts.length === 0) {
        return icon;
      } else {
        providerName = iconParts[0];
        iconName = iconParts[1];
      }

      if (!this[providerName]) {
        return icon;
      }

      return this[providerName](iconName);
    }
    return icon;
  }
}

