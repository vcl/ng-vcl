import {
  Component,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';

import { FORM_CONTROL_GROUP_REQUIRED_INDICATOR } from './interfaces';

@Component({
  selector: 'vcl-required',
  template: `{{ indicator }}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlRequiredComponent {
  constructor(
    @Inject(FORM_CONTROL_GROUP_REQUIRED_INDICATOR)
    private _indicator?: string
  ) {}

  @Input()
  indicator = this._indicator ?? '•';

  @HostBinding('attr.aria-hidden')
  attrAriaHidden = true;

  @HostBinding('class.required-indicator')
  classVclRequiredIndicator = true;
}
