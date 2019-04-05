import { Component, Input, ContentChildren, forwardRef, QueryList, HostBinding } from '@angular/core';
import { EMBEDDED_INPUT_GROUP_TOKEN, EmbeddedInputGroup } from './interfaces';
import { EmbeddedInputGroupButtonComponent } from './embedded-input-group-button.component';

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
export class EmbeddedInputGroupComponent implements EmbeddedInputGroup {

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

  @ContentChildren(forwardRef(() => EmbeddedInputGroupButtonComponent))
  buttons?: QueryList<EmbeddedInputGroupButtonComponent>;

  get hasAppendedItem() {
    return !!this.appIcon || (this.buttons && this.buttons.length > 0);
  }
}
