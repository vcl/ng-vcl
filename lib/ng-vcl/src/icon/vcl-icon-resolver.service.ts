import { IconResolverService } from './icon-resolver.service';

export interface IconAliases {
  'close': string;
  'busy': string;
  'box': string;
  'box-checked': string;
  'circle': string;
  'circle-checked': string;
  'question': string;
  'info': string;
  'success': string;
  'warning': string;
  'error': string;
  'arrow-left': string;
  'arrow-right': string;
  'arrow-down': string;
  'arrow-up': string;
  'arrow-double-left': string;
  'arrow-double-right': string;
  'arrow-double-down': string;
  'arrow-double-up': string;
  'upload': string;
  'eye': string;
  'eye-off': string;
  'star': string;
  'star-half': string;
  'star-empty': string;
  'add': string;
  'remove': string;
}

// The default icon resolver replaces icons prefixed with `vcl`. Usually you should provide only one default icon resolver in your app
export abstract class VCLIconResolverServiceBase extends IconResolverService {
  private VCL_REGEX = /^vcl:([a-z0-9-_]+)$/;

  constructor(private aliases: IconAliases) {
    super();
  }

  resolve(icon: string) {
    const result =  this.VCL_REGEX.exec(icon);
    if (result) {
      const [, alias] = result;
      return this.aliases[alias];
    } else {
      return this.resolveDefault(icon);
    }
  }

  abstract resolveDefault(icon: string): string | undefined;
}
