import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent  } from './icon.component';
import { VCLIconResolverServiceBase, IconResolverService, IconAliases } from './icon-resolver.service';
import { IconService } from './icon.service';
import { HostIconRendererService } from './host-icon-renderer.service';

export { IconComponent, HostIconRendererService, VCLIconResolverServiceBase, IconResolverService, IconService, IconAliases };

@NgModule({
  imports: [CommonModule],
  exports: [IconComponent],
  declarations: [IconComponent],
  providers: [IconService]
})
export class VCLIconModule { }
