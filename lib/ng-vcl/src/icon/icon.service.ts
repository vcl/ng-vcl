import { Injectable, Optional, Inject } from '@angular/core';
import { IconResolverService } from './icon-resolver.service';

@Injectable()
export class IconService extends IconResolverService {
  private iconResolvers: IconResolverService[];

  constructor(
    @Optional()
    @Inject(IconResolverService)
    iconResolvers: IconResolverService[]
  ) {
    super();
    // Prioritize resolvers added the later
    this.iconResolvers = iconResolvers ? [...iconResolvers].reverse() : [];
  }

  resolve(icon: string): string | undefined {
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
