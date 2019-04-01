import { Component, Input, OnInit, HostBinding, ViewChild, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { FormControlLabelComponent } from './form-control-label.component';

@Component({
  selector: 'label[vcl-form-control-label-wrapping]',
  templateUrl: 'form-control-label-wrapping.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlLabelWrappingComponent extends FormControlLabelComponent {

  @ViewChild('content')
  content: ElementRef<HTMLElement>;

  @HostBinding('class.vclFormControlLabelWrapping')
  classVCLFormControlLabelWrapping = true;
}
