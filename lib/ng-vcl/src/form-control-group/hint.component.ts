import { Component, Input, HostBinding, Optional, Inject, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormControlGroupComponent } from './form-control-group.component';

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
    private fcg?: FormControlGroupComponent,
  ) {
    fcg && fcg.stateChange.subscribe(() => {
      this.cdRef.detectChanges();
      this.cdRef.markForCheck();
    });
  }

  @HostBinding('class.form-control-hint')
  classVCLFormControlHint = true;

  @HostBinding('class.error')
  get classVCLError() {
    return this.elementRef.nativeElement.tagName.toLowerCase() === 'vcl-hint-error';
  }

  @HostBinding('class.warning')
  get classVCLWarning() {
    return this.elementRef.nativeElement.tagName.toLowerCase() === 'vcl-hint-warning';
  }

  @HostBinding('class.success')
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
