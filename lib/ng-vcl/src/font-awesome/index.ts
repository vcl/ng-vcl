import { NgModule } from '@angular/core';
import { IconResolverService } from '../icon/index';
import { FontAwesomeIconResolverService, FontAwesomeVCLIconAliasResolverService } from './icon-resolver.service';

export { FontAwesomeIconResolverService, FontAwesomeVCLIconAliasResolverService };

@NgModule({
  providers: [
    FontAwesomeIconResolverService,
    {
      provide: IconResolverService,
      useExisting: FontAwesomeIconResolverService,
      multi: true
    },
    {
      provide: IconResolverService,
      useClass: FontAwesomeVCLIconAliasResolverService,
      multi: true
    }
  ]
})
export class VCLFontAwesomeModule { }
