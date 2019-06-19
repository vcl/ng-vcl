import { NgModule } from '@angular/core';
import { IconResolverService } from '../icon/index';
import { MaterialDesignIconResolverService } from './icon-resolver.service';

export { MaterialDesignIconResolverService };

@NgModule({
  providers: [
    MaterialDesignIconResolverService,
    {
      provide: IconResolverService,
      useExisting: MaterialDesignIconResolverService,
      multi: true
    }
  ]
})
export class VCLMaterialDesignModule { }
