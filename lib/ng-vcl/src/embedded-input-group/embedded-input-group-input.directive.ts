import { HostBinding, Directive, ElementRef, Inject } from '@angular/core';
import { InputDirective } from '../input/index';
import { EMBEDDED_INPUT_GROUP_TOKEN, EmbeddedInputGroup } from './interfaces';

@Directive({
  selector: 'input[vclEmbeddedInputGroup]',
  exportAs: 'vclInput'
})
export class EmbeddedInputGroupInputDirective extends InputDirective {
  constructor(
    elRef: ElementRef<HTMLInputElement>,
    @Inject(EMBEDDED_INPUT_GROUP_TOKEN)
    private host: EmbeddedInputGroup
  ) {
    super(elRef);
  }

  get isDisabled() {
    return this.disabled || this.host.disabled;
  }

  @HostBinding('class.vclDisabled')
  get classDisabled() {
    return this.isDisabled;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.isDisabled ? true : null;
  }

  @HostBinding('class.vclPrepItem')
  get prepItem() {
    return !!this.host.prepIcon;
  }

  @HostBinding('class.vclAppItem')
  get hasAppendedItem() {
    return this.host.hasAppendedItem;
  }
}
