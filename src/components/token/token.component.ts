import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';



@Component({
  selector: 'vcl-token',
  template: `
    <div class="vclToken"
      [class.vclSelected]="selected"
    >
      <span class="vclTokenLabel">{{ label }}</span>
      <button *ngIf="removeable" type="button" title="Remove" class="vclTransparent vclButton">
        <div class="vclIcogram" (tap)="remove()">
          <span class="vclIcon fa fa-remove"></span>
        </div>
      </button>
    </div>`,
  host: {
    '[class.vclSelected]': 'selected',
    '[class]': 'labelClass',
  }
})
export class Token {

  @Input('label') label: string;
  @Input('selected') selected: boolean = false;
  @Input('removeable') removeable: boolean = false;
  @Input('labelClass') labelClass: string = '';

  @Output() onRemove = new EventEmitter();

  constructor() {

  }


  remove() {
    this.onRemove.emit();
  }

}


@Component({
  selector: 'vcl-token-list',
  templateUrl: 'token.component.html',
  host: {
    '[class.vclFormControlLabel]': 'true',
    '[class]': 'labelClass',
  }
})
export class TokenComponent {

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
