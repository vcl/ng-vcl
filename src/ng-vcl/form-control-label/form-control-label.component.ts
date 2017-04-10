import { Component, Input, OnInit, HostBinding, ViewChild, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'label[vcl-form-control-label]',
  templateUrl: 'form-control-label.component.html',
  host: {
    '[class.vclFormControlLabel]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlLabelComponent {

  @ViewChild('content')
  content: ElementRef;

  @Input()
  @HostBinding('class.vclDisabled')
  disabled = false;

  @Input()
  requiredIndicatorCharacter: string = '•';

  @Input()
  label: string | undefined;

  @Input()
  subLabel: string | undefined;

  // Whether the label wraps the control
  @HostBinding('class.vclFormControlLabelWrapping')
  get hasContent() {
    return this.content.nativeElement.childNodes.length > 0;
  }

  // Whether an indicator that an input in to the labelled control is required
  @Input()
  required: boolean = false;

  // Accessible label for the required indicator
  @Input()
  requiredIndLabel: string;
}
