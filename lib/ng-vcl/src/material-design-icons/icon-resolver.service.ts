import { Injectable } from '@angular/core';

import {
  IconResolverService,
  IconAliasResolverServiceBase,
} from '../icon/index';

import { ALIAS_MAP } from './alias-map';

// The mdi name resolver following the CSS class name conventions of
// the well-known Font Awesome icon font. Basically it translates
// `mdi:user` into `mdi mdi-user`
@Injectable()
export class MaterialDesignIconResolverService extends IconResolverService {
  private MDI_REGEX = /^(mdi):([a-z0-9-_]+)$/;

  resolve(icon: string) {
    const result = this.MDI_REGEX.exec(icon);
    if (result) {
      const [, prefix, value] = result;
      return `${prefix} mdi-${value}`;
    }
    return undefined;
  }
}

@Injectable()
export class MaterialDesignVCLIconAliasResolverService extends IconAliasResolverServiceBase {
  constructor() {
    super('vcl', ALIAS_MAP as any);
  }
}
