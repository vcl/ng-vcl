import { Injectable, InjectionToken } from '@angular/core';

export interface IconResolver {
  match(icon: string): boolean;
  lookup(icon: string): string;
}

export const VCL_ICON_RESOLVER = new InjectionToken('VCL_ICON_RESOLVER');

// The font-awesome name resolver following the CSS class name conventions of
// the well-known Font Awesome icon font. Basically it translates
// `fas:user` into `fas fa-user`
@Injectable()
export class FontAwesomeIconResolverService implements IconResolver {

  private FA_REGEX = /^(fa[bsrl]):([a-z0-9-_]+)$/;

  match(icon: string) {
    return this.FA_REGEX.test(icon);
  }

  lookup(icon: string) {
    if (typeof icon === 'string') {
      return icon.replace(this.FA_REGEX,
             (_, p, i) => `${p} fa-${i}`);
    }
    return icon;
  }
}


@Injectable()
export class MDIIconResolverService implements IconResolver {
  private MDI_REGEX = /^(MDI):([a-z0-9-_]+)$/;

  match(icon: string) {
    return this.MDI_REGEX.test(icon);
  }

  lookup(icon: string) {
    if (typeof icon === 'string') {
      return icon.replace(this.MDI_REGEX,
             (_, p, i) => `${p} mdi-${i}`);
    }
    return icon;
  }
}
