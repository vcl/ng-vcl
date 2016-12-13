import {
  Component, Input, OnInit, HostBinding,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: '[vcl-form-control-label]',
  templateUrl: 'form-control-label.component.html',
  host: {
    '[class.vclFormControlLabel]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlLabelComponent {

  @Input()
  @HostBinding('class.vclDisabled')
  disabled: boolean = false;

  @Input() requiredIndicatorCharacter: string = '•';
  @Input() label: string;
  @Input() subLabel: string;

  // Whether the label prepends the child content
  @Input() prepend: boolean = false;

  // Whether the label wraps the labelled control
  @Input()
  @HostBinding('class.vclFormControlLabelWrapping')
  wrapping: boolean = false;

  // Whether an indicator that an input in to the labelled control is required
  @Input() required: boolean = false;

  // Accessible label for the required indicator
  @Input() requiredIndLabel: string;
}
