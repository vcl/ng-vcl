import { Component } from '@angular/core';
import {
  MaterialDesignVCLIconAliasResolverService,
  FontAwesomeVCLIconAliasResolverService,
  IconService,
  IconResolverService,
  MaterialDesignIconResolverService,
  FontAwesomeIconResolverService,
  VCLIconModule,
} from '@vcl/ng-vcl';

// Icon resolvers can be set on module or component level by setting providers

@Component({
  templateUrl: 'icons.component.html',
  providers: [
    // Material design providers
    IconService,
    {
      provide: IconResolverService,
      useClass: MaterialDesignIconResolverService,
      multi: true,
    },
    {
      provide: IconResolverService,
      useClass: MaterialDesignVCLIconAliasResolverService,
      multi: true,
    },
  ],
  imports: [VCLIconModule],
})
export class DemoMdiIconsComponent {}

@Component({
  templateUrl: 'icons.component.html',
  providers: [
    // Font Awesome providers
    IconService,
    {
      provide: IconResolverService,
      useClass: FontAwesomeIconResolverService,
      multi: true,
    },
    {
      provide: IconResolverService,
      useClass: FontAwesomeVCLIconAliasResolverService,
      multi: true,
    },
  ],
  imports: [VCLIconModule],
})
export class DemoFontAwesomeComponent {}
