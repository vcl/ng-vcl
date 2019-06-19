import { NgModule } from '@angular/core';
import { IconResolverService } from '../icon/index';
import { FontAwesomeIconResolverService } from './icon-resolver.service';

export { FontAwesomeIconResolverService };

@NgModule({
  providers: [
    FontAwesomeIconResolverService,
    {
      provide: IconResolverService,
      useExisting: FontAwesomeIconResolverService,
      multi: true
    }
  ]
})
export class VCLFontAwesomeModule { }
