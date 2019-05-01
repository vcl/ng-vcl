import { NgModule } from '@angular/core';
import { IconResolverService } from '../icon/index';
import { FontAwesomeIconResolverService, FontAwesomeVCLIconResolverService } from './icon-resolver.service';

export { FontAwesomeIconResolverService, FontAwesomeVCLIconResolverService };

@NgModule({
  providers: [
    FontAwesomeIconResolverService,
    FontAwesomeVCLIconResolverService,
    {
      provide: IconResolverService,
      useExisting: FontAwesomeIconResolverService,
      multi: true
    }, {
      provide: IconResolverService,
      useExisting: FontAwesomeVCLIconResolverService,
      multi: true
    }
  ]
})
export class VCLFontAwesomeModule { }
