import { forwardRef, Component, ChangeDetectionStrategy } from '@angular/core';
import { SELECT_LIST_CONTENT_TOKEN } from '../types';

@Component({
  selector: 'vcl-select-list-content',
  template: '<ng-content></ng-content>',
  exportAs: 'vclSelectListContent',
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [
    {
      provide: SELECT_LIST_CONTENT_TOKEN,
      useExisting: forwardRef(() => VCLSelectListContentComponent),
    },
  ],
})
export class VCLSelectListContentComponent {}
