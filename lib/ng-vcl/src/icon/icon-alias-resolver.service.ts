import { IconResolverService } from './icon-resolver.service';

export interface VCLIconAliasMap {
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
  'calendar': string;
  'clock': string;
  'menu': string;
  'clear': string;
  'search': string;
}

// The icon resolver replaces icons prefixed with an alias. Usually you should provide only one default icon resolver in your app
export class IconAliasResolverServiceBase extends IconResolverService {
  protected regex: RegExp;

  constructor(
    protected alias: string,
    protected map: { [key: string]: string | undefined }
  ) {
    super();
    this.regex = new RegExp(`^${this.alias}:([a-z0-9-_]+)$`);
  }

  resolve(icon: string) {
    const result = this.regex.exec(icon);
    if (result) {
      const [, alias] = result;
      return this.map[alias];
    }
    return undefined;
  }
}
