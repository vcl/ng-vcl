import { Component, Input, HostBinding, ChangeDetectionStrategy, Optional, Inject } from '@angular/core';

@Component({
  selector: 'vcl-required',
  template: `{{indicator}}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlRequiredComponent {

  @Input()
  indicator = '•';

  @HostBinding('attr.aria-hidden')
  attrAriaHidden = true;

  @HostBinding('class.required-indicator')
  classVclRequiredIndicator = true;
}
