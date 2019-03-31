import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent  } from './icon.component';
import { VCLIconResolverServiceBase, IconResolverService } from './icon-resolver.service';
import { IconService } from './icon.service';

export { IconComponent, VCLIconResolverServiceBase, IconResolverService, IconService };

@NgModule({
  imports: [CommonModule],
  exports: [IconComponent],
  declarations: [IconComponent],
  providers: [IconService]
})
export class VCLIconModule { }
