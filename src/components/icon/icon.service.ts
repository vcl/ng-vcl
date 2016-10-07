import { Injectable } from '@angular/core';

@Injectable()
export class IconService {

  // A default name resolver following the CSS class name conventions of
  // the well-known Font Awesome icon font. Bascially it translates
  // `fa:user` into `fa fa-user`
  defaultNameResolver(icon: string) {
    const iconParts = icon.split(':');
    const setName = iconParts[0];
    const iconName = iconParts[1];
    return `${setName} ${setName}-${iconName}`;
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
        // TODO: for now, just hardcode to default resolver, later we need
        // a mapping between the provider and the resolver or each font
        // brings its own resolver.
        providerName = 'defaultNameResolver';
        return this[providerName](iconName);
      }
    }
    return icon;
  }
}
