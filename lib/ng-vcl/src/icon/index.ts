import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent  } from './icon.component';
import { IconResolverService } from './icon-resolver.service';
import { IconService } from './icon.service';
import { HostIconRendererService } from './host-icon-renderer.service';
import { IconAliasResolverServiceBase, VCLIconAliasMap  } from './icon-alias-resolver.service';

export { IconComponent, HostIconRendererService, IconAliasResolverServiceBase, VCLIconAliasMap, IconResolverService, IconService };

@NgModule({
  imports: [CommonModule],
  exports: [IconComponent],
  declarations: [IconComponent],
  providers: [
    IconService,
  ]
})
export class VCLIconModule { }
