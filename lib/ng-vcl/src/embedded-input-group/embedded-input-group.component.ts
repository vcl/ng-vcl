import { Component, Input, ContentChildren, forwardRef, QueryList, HostBinding } from '@angular/core';
import { EMBEDDED_INPUT_GROUP_TOKEN, EmbeddedInputGroupHost } from './interfaces';
import { EmbeddedInputGroupButtonDirective } from './embedded-input-group-button.directive';

@Component({
  selector: 'vcl-embedded-input-group',
  templateUrl: 'embedded-input-group.component.html',
  exportAs: 'vclEmbeddedInputGroup',
  providers: [
    {
      provide: EMBEDDED_INPUT_GROUP_TOKEN,
      useExisting: forwardRef(() => EmbeddedInputGroupComponent)
    }
  ]
})
export class EmbeddedInputGroupComponent implements EmbeddedInputGroupHost {

  // TODO remove workaround
  @HostBinding('style.display')
  styleDisplay = 'block';

  @HostBinding('class.vclInputGroupEmb')
  classVCLInputGroupEmb = true;

  @Input()
  disabled = false;

  @Input()
  prepIcon?: string;

  @Input()
  appIcon?: string;

  @ContentChildren(forwardRef(() => EmbeddedInputGroupButtonDirective))
  buttons?: QueryList<EmbeddedInputGroupButtonDirective>;

  get hasAppendedItem() {
    return !!this.appIcon || (this.buttons && this.buttons.length > 0);
  }
}
