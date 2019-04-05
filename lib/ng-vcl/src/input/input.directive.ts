import { Directive, ElementRef, HostBinding, Input, HostListener, forwardRef } from '@angular/core';
import { FORM_CONTROL_LABEL_MEMBER_TOKEN, FormControlLabelMember } from '../form-control-label';

export let UNIQUE_ID = 0;

export interface VCLInput {
  readonly isDisabled: boolean;
  setDisabled(disabled: boolean): void;
}

@Directive({
  selector: 'input[vclInput]',
  exportAs: 'vclInput',
  providers: [
    {
      provide: FORM_CONTROL_LABEL_MEMBER_TOKEN,
      useExisting: forwardRef(() => InputDirective)
    },
  ],
})
export class InputDirective implements FormControlLabelMember, VCLInput {

  constructor(private elRef: ElementRef<HTMLInputElement>) { }

  private generatedId = 'vcl_input_' + UNIQUE_ID++;

  private _disabled = false;

  @Input()
  id?: string;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.generatedId;
  }
  @Input()
  disabled = false;

  @Input()
  autoselect = false;

  @HostBinding('class.vclInput')
  classVclInput = true;

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this.disabled || this._disabled;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.disabled ? true : null;
  }

  // Autoselect
  @HostListener('focus')
  onFocus() {
    if (this.autoselect) {
      this.elRef.nativeElement.select();
    }
  }

  setDisabled(disabled: boolean) {
    this._disabled = disabled;
  }

  notifyFormControlLabelClick(event: Event): void {
    this.elRef.nativeElement.focus();
  }
}
