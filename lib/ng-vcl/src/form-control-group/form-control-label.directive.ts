import { Input, HostBinding, HostListener, Inject, Optional, ElementRef, Directive, ChangeDetectorRef } from '@angular/core';
import { FormControlGroupComponent } from './form-control-group.component';

@Directive({
  selector: 'label[vclFormControlLabel]',
})
export class FormControlLabelDirective {

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    cdRef: ChangeDetectorRef,
    @Optional()
    private fcg?: FormControlGroupComponent
  ) {
    this.fcg && this.fcg.stateChange.subscribe(() => {
      cdRef.markForCheck();
      cdRef.detectChanges();
    });
  }

  @HostBinding('class.form-control-label')
  classVCLFormControlLabel = true;

  @HostBinding('attr.for')
  get attrFor() {
    if (this.for) {
      return this.for;
    } else if (this.fcg && this.fcg.input) {
      return this.fcg.input.elementId;
    }
    return null;
  }

  @HostBinding('class.disabled')
  get isDisabled() {
    const input = this.fcg && this.fcg.input;
    return input && input.isDisabled;
  }

  @Input()
  for?: string;

  // tslint:disable-next-line:no-input-rename
  @Input('label')
  @HostBinding('attr.aria-label')
  _label?: string;

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const input = this.fcg && this.fcg.input;
    input && input.onLabelClick(event);
  }

  get label() {
    return this._label || this.elementRef.nativeElement.innerText;
  }

}
