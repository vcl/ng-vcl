import { Injectable, Optional, Inject } from '@angular/core';
import { IconResolverService } from './icon-resolver.service';

@Injectable()
export class IconService extends IconResolverService {
  priority = 0;
  private iconResolvers: IconResolverService[];

  constructor(
    @Optional()
    @Inject(IconResolverService)
    iconResolvers: IconResolverService[]
  ) {
    super();
    this.iconResolvers = iconResolvers || [];
  }

  resolve(icon: string): string {
    // Resolve first match
    for (const resolver of this.iconResolvers) {
      const result = resolver.resolve(icon);
      if (result !== undefined) {
        return result;
      }
    }
    return icon;
  }
}
