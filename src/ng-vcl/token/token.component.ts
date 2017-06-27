import {
  Component,
  Input,
  Output,
  EventEmitter,
  trigger,
  HostListener,
  HostBinding
} from '@angular/core';

export interface Token {
  label: string;
  selected?: boolean;
  removable?: boolean;
}

@Component({
  selector: 'vcl-token',
  templateUrl: 'token.component.html',
  animations: [trigger('checkState', [])],
  host: {
    '[class.vclToken]': 'true',
    '[@checkState]': 'selected'
  }
})
export class TokenComponent implements Token {

  @Input()
  label: string;

  @HostListener('tap', ['$event'])
  onTap(e: Event) {
    this.select.emit(e);
  }

  onRemoveClick(event) {
    event.stopPropagation();
    this.remove.emit(event);
  }

  @HostBinding('class.vclSelected')
  @Input()
  selected: boolean = false;

  @Input()
  removable: boolean = false;

  @Input()
  icon: string = 'fa:remove';

  @Output()
  remove = new EventEmitter();

  @Output()
  select = new EventEmitter();
}
