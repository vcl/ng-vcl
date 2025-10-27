import { NgModule } from '@angular/core';
import { VCLIconComponent } from './icon.component';
import { IconResolverService } from './icon-resolver.service';
import { IconService } from './icon.service';
import { HostIconRendererService } from './host-icon-renderer.service';
import {
  IconAliasResolverServiceBase,
  VCLIconAliasMap,
} from './icon-alias-resolver.service';

export {
  VCLIconComponent,
  HostIconRendererService,
  IconAliasResolverServiceBase,
  VCLIconAliasMap,
  IconResolverService,
  IconService,
};

@NgModule({
  imports: [VCLIconComponent],
  exports: [VCLIconComponent],
  providers: [IconService],
})
export class VCLIconModule {}
