import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  forwardRef,
} from '@angular/core';
import { SELECT_LIST_CONTENT_TOKEN } from '../types';

@Component({
  selector: 'vcl-select-list-separator',
  exportAs: 'vclSelectListSeparator',
  templateUrl: 'select-list-separator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: SELECT_LIST_CONTENT_TOKEN,
      useExisting: forwardRef(() => SelectListSeparatorComponent),
    },
  ],
})
export class SelectListSeparatorComponent {
  @HostBinding('attr.role')
  attrRole = 'separator';
}
