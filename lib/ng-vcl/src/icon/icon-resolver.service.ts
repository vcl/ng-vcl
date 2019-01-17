import { Injectable, InjectionToken } from '@angular/core';

export interface IconResolver {
  match(icon: string): boolean;
  lookup(icon: string): string;
}

export const VCL_ICON_RESOLVER = new InjectionToken('VCL_ICON_RESOLVER');

// The default name resolver following the CSS class name conventions of
// the well-known Font Awesome icon font. Basically it translates
// `fa:user` into `fa fa-user`
@Injectable()
export class DefaultIconResolverService implements IconResolver {

  match(icon: string) {
    return /^[a-z0-9-_]+:[a-z0-9-_]+(:[a-z0-9-_]+)?$/.test(icon);
  }

  lookup(icon: string) {
    if (typeof icon === 'string') {
      const iconName = icon;
      // Split on first : occurrence
      const iconParts = iconName.split(':');
      if (iconParts.length === 0) {
        return icon;
      } else {
        const setName = iconParts.shift();
        const iconClasses = iconParts.join(` ${setName}-`);
        return `${setName} ${setName}-${iconClasses}`;
      }
    }
    return icon;
  }
}
