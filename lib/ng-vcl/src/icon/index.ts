import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent  } from './icon.component';
import { VCLIconResolverServiceBase, IconResolverService, IconAliases } from './icon-resolver.service';
import { IconService } from './icon.service';

export { IconComponent, VCLIconResolverServiceBase, IconResolverService, IconService, IconAliases };

@NgModule({
  imports: [CommonModule],
  exports: [IconComponent],
  declarations: [IconComponent],
  providers: [IconService]
})
export class VCLIconModule { }
