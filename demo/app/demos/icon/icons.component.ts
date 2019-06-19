import { Component } from '@angular/core';
import { MaterialDesignIconResolverService, FontAwesomeIconResolverService, IconService } from '@ng-vcl/ng-vcl';

@Component({
  templateUrl: 'icons.component.html',
  providers: [{
    provide: IconService,
    useClass: MaterialDesignIconResolverService
  }]
})
export class DemoMdiIconsComponent {

}

@Component({
  templateUrl: 'icons.component.html',
  providers: [{
    provide: IconService,
    useClass: FontAwesomeIconResolverService
  }]
})
export class DemoFontAwesomeComponent {

}
