import { NgModule } from '@angular/core';
import { FontAwesomeIconResolverService, FontAwesomeDefaultIconResolverService } from './icon-resolver.service';
import { VCL_ICON_RESOLVER } from '../icon';

export { FontAwesomeIconResolverService };

@NgModule({
  providers: [{
    provide: VCL_ICON_RESOLVER,
    useClass: FontAwesomeIconResolverService,
    multi: true
  }, {
    provide: VCL_ICON_RESOLVER,
    useClass: FontAwesomeDefaultIconResolverService,
    multi: true
  }]
})
export class VCLFontAwesomeModule { }
