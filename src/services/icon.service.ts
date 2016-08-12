import { Injectable } from '@angular/core';

@Injectable()
export class IconService {

  fa(icon: string) {
    return `fa fa-${icon}`;
  }

  lookup(icon: string) {
    let className = '';
    if (typeof icon==='string' && icon) {
      let iconName = icon;
      let providerName: string;
      let iconParts = iconName.split(':');
      if (iconParts.length > 1) {
        providerName = iconParts[0];
        iconName = iconParts[1];
      } else {
        providerName = 'fa';
      }

      if(!this[providerName]) {
        throw new Error('Invalid icon provider: ' + providerName )
      }

      return this[providerName](iconName);
    }
    return null;
  }
}

