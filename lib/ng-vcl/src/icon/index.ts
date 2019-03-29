import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent  } from './icon.component';
import { VCL_ICON_RESOLVER, FontAwesomeIconResolverService, MDIIconResolverService, IconResolver } from './icon-resolver.service';

export { IconComponent, FontAwesomeIconResolverService, MDIIconResolverService, IconResolver, VCL_ICON_RESOLVER };

@NgModule({
  imports: [CommonModule],
  exports: [IconComponent],
  declarations: [IconComponent],
  providers: [{
    provide: VCL_ICON_RESOLVER,
    useClass: FontAwesomeIconResolverService,
    multi: true
  }, {
    provide: VCL_ICON_RESOLVER,
    useClass: MDIIconResolverService,
    multi: true
  }],
})
export class VCLIconModule { }
