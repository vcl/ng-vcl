import { Injectable } from '@angular/core';
import { VCLIconResolverServiceBase, IconResolverService } from '../icon';
import { constants } from 'os';

// The font-awesome name resolver following the CSS class name conventions of
// the well-known Font Awesome icon font. Basically it translates
// `fas:user` into `fas fa-user`
@Injectable()
export class FontAwesomeIconResolverService implements IconResolverService {

  priority = 50;

  private FA_REGEX = /^(fa[bsrl]):([a-z0-9-_]+)$/;

  resolve(icon: string) {
    const result =  this.FA_REGEX.exec(icon);
    if (result) {
      const [s, prefix, value] = result;
      return `${prefix} fa-${value}`;
    }
    return undefined;
  }
}

const ALIAS_MAP = {
  'close': 'fas fa-times',
  'busy': 'fas fa-circle-notch fa-spin'
};

@Injectable()
export class FontAwesomeVCLIconResolverService extends VCLIconResolverServiceBase {
  priority = 10;

  lookup(alias: string) {
    return ALIAS_MAP[alias];
  }
}
