import { forwardRef, Component } from '@angular/core';

import { SELECT_LIST_CONTENT_TOKEN } from '../types';

@Component({
  selector: 'vcl-select-list-content',
  template: '<ng-content></ng-content>',
  exportAs: 'vclSelectListContent',
  providers: [
    {
      provide: SELECT_LIST_CONTENT_TOKEN,
      useExisting: forwardRef(() => SelectListContentComponent),
    },
  ],
})
export class SelectListContentComponent {}
