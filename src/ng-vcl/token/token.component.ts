import {
  Component,
  Input,
  Output,
  EventEmitter,
  trigger
} from '@angular/core';


@Component({
  selector: 'vcl-token',
  templateUrl: 'token.component.html',
  animations: [trigger('checkState', [])],
  host: {
    '[class.vclToken]': 'true',
    '[class.vclSelected]': 'selected',
    '[@checkState]': 'selected'
  }
})
export class TokenComponent {

  @Input('label') label: string;
  @Input('selected') selected: boolean = false;
  @Input('removeable') removeable: boolean = false;

  @Output('remove') onRemove = new EventEmitter();

  constructor() {

  }

  remove() {
    this.onRemove.emit();
  }

  /**
   * transforms this NavigationItemComponent into an object,
   * so it can be handled the same way as an inputList
   * @return {Object}
   */
  toObject(): Object {
    const ret = {
      label: this.label,
      removeable: this.removeable,
      selected: this.selected
    };
    return ret;
  }
}
