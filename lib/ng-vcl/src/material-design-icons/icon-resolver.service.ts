import { Injectable } from '@angular/core';
import { IconResolverService, VCLIconResolverServiceBase } from '../icon/index';
import { ALIAS_MAP } from './alias-map';

// The mdi name resolver following the CSS class name conventions of
// the well-known Font Awesome icon font. Basically it translates
// `mdi:user` into `mdi mdi-user`
@Injectable()
export class MaterialDesignIconResolverService extends VCLIconResolverServiceBase implements IconResolverService {
  constructor() { super(ALIAS_MAP); }

  name = 'mdi';
  priority = 55;

  private MDI_REGEX = /^(mdi):([a-z0-9-_]+)$/;

  resolveFallback(icon: string) {
    const result =  this.MDI_REGEX.exec(icon);
    if (result) {
      const [, prefix, value] = result;
      return `${prefix} mdi-${value}`;
    }
    return undefined;
  }
}
