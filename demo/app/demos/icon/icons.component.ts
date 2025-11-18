import { Component } from '@angular/core';
import {
  MaterialDesignVCLIconAliasResolverService,
  FontAwesomeVCLIconAliasResolverService,
  IconService,
  IconResolverService,
  MaterialDesignIconResolverService,
  FontAwesomeIconResolverService,
  VCLIconComponent,
} from '@vcl/ng-vcl';

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
  imports: [VCLIconComponent],
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
  imports: [VCLIconComponent],
})
export class DemoFontAwesomeComponent {}
