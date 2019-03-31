import { Injectable } from '@angular/core';
import { IconResolverService, VCLIconResolverServiceBase } from '../icon';

// The mdi name resolver following the CSS class name conventions of
// the well-known Font Awesome icon font. Basically it translates
// `mdi:user` into `mdi mdi-user`
@Injectable()
export class MaterialDesignIconResolverService implements IconResolverService {

  priority = 55;

  private MDI_REGEX = /^(mdi):([a-z0-9-_]+)$/;

  resolve(icon: string) {
    const result =  this.MDI_REGEX.exec(icon);
    if (result) {
      const [s, prefix, value] = result;
      return `${prefix} mdi-${value}`;
    }
    return undefined;
  }
}

const ALIAS_MAP = {
  'close': 'mdi mdi-close',
  'busy': 'mdi mdi-loading mdi-spin'
};

@Injectable()
export class MaterialDesignVCLIconResolverServiceBase extends VCLIconResolverServiceBase {
  priority = 15;

  lookup(alias: string) {
    return ALIAS_MAP[alias];
  }
}

