import { Directive, forwardRef } from '@angular/core';
import { SELECT_LIST_CONTENT_TOKEN } from '../types';

@Directive({
  selector: 'vcl-select-list-content',
  exportAs: 'vclSelectListContent',
  providers: [{
    provide: SELECT_LIST_CONTENT_TOKEN,
    useExisting: forwardRef(() => SelectListContentDirective)
  }]
})
export class SelectListContentDirective {

}
