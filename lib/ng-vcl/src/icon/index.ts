import { NgModule } from '@angular/core';
import { IconComponent } from './icon.component';
import { IconResolverService } from './icon-resolver.service';
import { IconService } from './icon.service';
import { HostIconRendererService } from './host-icon-renderer.service';
import {
  IconAliasResolverServiceBase,
  VCLIconAliasMap,
} from './icon-alias-resolver.service';

export {
  IconComponent,
  HostIconRendererService,
  IconAliasResolverServiceBase,
  VCLIconAliasMap,
  IconResolverService,
  IconService,
};

@NgModule({
  imports: [IconComponent],
  exports: [IconComponent],
  providers: [IconService],
})
export class VCLIconModule {}
