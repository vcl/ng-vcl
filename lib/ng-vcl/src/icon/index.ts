import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HostIconRendererService } from './host-icon-renderer.service';
import {
  IconAliasResolverServiceBase,
  VCLIconAliasMap,
} from './icon-alias-resolver.service';
import { IconResolverService } from './icon-resolver.service';
import { IconComponent } from './icon.component';
import { IconService } from './icon.service';

export {
  IconComponent,
  HostIconRendererService,
  IconAliasResolverServiceBase,
  VCLIconAliasMap,
  IconResolverService,
  IconService,
};

@NgModule({
  imports: [CommonModule],
  exports: [IconComponent],
  declarations: [IconComponent],
  providers: [IconService],
})
export class VCLIconModule {}
