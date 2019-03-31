import { NgModule } from '@angular/core';
import { IconResolverService } from '../icon';
import { MaterialDesignIconResolverService, MaterialDesignVCLIconResolverServiceBase } from './icon-resolver.service';

export { MaterialDesignIconResolverService, MaterialDesignVCLIconResolverServiceBase };

@NgModule({
  providers: [
    MaterialDesignIconResolverService,
    MaterialDesignVCLIconResolverServiceBase,
    {
      provide: IconResolverService,
      useExisting: MaterialDesignIconResolverService,
      multi: true
    }, {
      provide: IconResolverService,
      useExisting: MaterialDesignVCLIconResolverServiceBase,
      multi: true
    }
  ]
})
export class VCLMaterialDesignModule { }
