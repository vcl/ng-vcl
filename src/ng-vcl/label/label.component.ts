import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'vcl-label',
  templateUrl: 'label.component.html',
  host: {
    '[class.vclFormControlLabel]': 'true',
    '[class]': 'labelClass',
  }
})
export class LabelComponent {

  @Input('label') label: string;
  @Input('subLabel') subLabel: string;
  @Input('type') type: '' | 'primary' | 'sucess' | 'info' | 'warning' | 'error' = '';

  @Input('requiredIndicatorCharacter') requiredIndicatorCharacter: string = '•';
  @Input('required') required: boolean = false;

  labelClass: string = '';

  @Input('for') for: string;

  constructor() { }

  ngOnInit() {
    /**
     * TODO(issue) this overwrites the users classes
     * @link https://github.com/angular/angular/issues/7289
     */
    if (this.type != '') this.labelClass = 'vclLabel vcl' + this.ucfirst(this.type);
  }

  ucfirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
