import { Component, Input, HostBinding, Optional, Inject, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FORM_CONTROL_GROUP, FormControlGroup } from './interfaces';

@Component({
  selector: 'vcl-hint, vcl-hint-error, vcl-hint-warning, vcl-hint-success',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlHintComponent {

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private cdRef: ChangeDetectorRef,
    @Optional()
    @Inject(FORM_CONTROL_GROUP)
    private fcg?: FormControlGroup,
  ) {
    fcg && fcg.stateChange.subscribe(() => {
      this.cdRef.detectChanges();
      this.cdRef.markForCheck();
    });
  }

  @HostBinding('class.vclFormControlHint')
  classVCLFormControlHint = true;

  @HostBinding('class.vclError')
  get classVCLError() {
    return this.elementRef.nativeElement.tagName.toLowerCase() === 'vcl-hint-error';
  }

  @HostBinding('class.vclWarning')
  get classVCLWarning() {
    return this.elementRef.nativeElement.tagName.toLowerCase() === 'vcl-hint-warning';
  }

  @HostBinding('class.vclSuccess')
  get classVCLSuccess() {
    return this.elementRef.nativeElement.tagName.toLowerCase() === 'vcl-hint-success';
  }

  @Input()
  error?: string;

  @HostBinding('style.display')
  get styleDisplay() {
    return this.visible ? null : 'none';
  }

  get visible() {
    const input = this.fcg && this.fcg.input;

    if (!input) {
      return true;
    }

    if (this.error === undefined) {
      // Show hint
      return true;
    } else if (typeof this.error === 'string') {
      return input.ngControl && input.hasError ? !!input.ngControl.getError(this.error) : false;
    }

    return true;
  }
}
