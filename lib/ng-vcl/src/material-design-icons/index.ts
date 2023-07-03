import { NgModule } from '@angular/core';

import { IconResolverService } from '../icon/index';

import {
  MaterialDesignIconResolverService,
  MaterialDesignVCLIconAliasResolverService,
} from './icon-resolver.service';

export {
  MaterialDesignIconResolverService,
  MaterialDesignVCLIconAliasResolverService,
};

@NgModule({
  providers: [
    MaterialDesignIconResolverService,
    {
      provide: IconResolverService,
      useExisting: MaterialDesignIconResolverService,
      multi: true,
    },
    {
      provide: IconResolverService,
      useClass: MaterialDesignVCLIconAliasResolverService,
      multi: true,
    },
  ],
})
export class VCLMaterialDesignModule {}
