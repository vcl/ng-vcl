import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDirective, IconFontDirective } from './icon.directive';
import { VCL_ICON_RESOLVER, FontAwesomeIconResolverService, MDIIconResolverService, IconResolver } from './icon-resolver.service';

export { IconDirective, IconFontDirective, FontAwesomeIconResolverService, MDIIconResolverService, IconResolver, VCL_ICON_RESOLVER };

@NgModule({
  imports: [CommonModule],
  exports: [IconDirective, IconFontDirective],
  declarations: [IconDirective, IconFontDirective],
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
