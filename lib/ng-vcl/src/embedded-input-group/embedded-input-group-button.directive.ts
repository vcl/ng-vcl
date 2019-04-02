import { ElementRef, Inject, HostBinding, Component, Directive, Self } from '@angular/core';
import { ButtonComponent } from '../button';
import { EMBEDDED_INPUT_GROUP_TOKEN, EmbeddedInputGroupHost } from './interfaces';

@Directive({
  selector: 'button[vclEmbeddedInputGroup]',
})
export class EmbeddedInputGroupButtonDirective {

  constructor(
    @Self()
    private button: ButtonComponent,
    @Inject(EMBEDDED_INPUT_GROUP_TOKEN)
    private host: EmbeddedInputGroupHost
  ) { }

  @HostBinding('class.vclTransparent')
  classVCLTransparent = true;

  @HostBinding('class.vclAppended')
  classVCLAppended = true;

  @HostBinding('class.vclDisabled')
  get classVCLDisabled() {
    return this.isDisabled;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.isDisabled ? true : null;
  }

  get isDisabled() {
    return (this.button.isDisabled || this.host.disabled) ? true : null;
  }
}
