import { Injectable, Optional, Inject } from '@angular/core';
import { IconResolverService } from './icon-resolver.service';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private iconResolvers: IconResolverService[];

  constructor(
    @Optional()
    @Inject(IconResolverService)
    iconResolvers: IconResolverService[]
  ) {
    if (iconResolvers) {
      this.iconResolvers = iconResolvers.sort((ir1, ir2) => ir1.priority - ir2.priority);
    } else {
      this.iconResolvers =  [];
    }
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
