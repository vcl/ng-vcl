import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  HostBinding,
  ChangeDetectorRef
} from '@angular/core';

export interface Token {
  label: string;
  selected?: boolean;
  removable?: boolean;
  value?: any;
  tokenIcon?: string;
}

@Component({
  selector: 'vcl-token',
  templateUrl: 'token.component.html',
  host: {
    '[class.vclToken]': 'true',
  },
  // Used by select
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenComponent implements Token {

  @Input()
  label = '';

  @Input()
  value?: string;

  @Input()
  disabled = false;

  @HostBinding('class.vclSelected')
  @Input()
  selected = false;

  @Input()
  removable = false;

  @Input()
  icon = 'fa:times';

  @Input()
  tokenIcon?: string;

  @Output()
  remove = new EventEmitter();

  @Output()
  select = new EventEmitter();

  // Store cva disabled state in an extra property to remember the old state after the token-list has been disabled
  private cvaDisabled = false;

  @HostListener('tap', ['$event'])
  onTap(e: Event) {
    if (this.isDisabled) {
      return;
    }
    this.select.emit(e);
  }

  constructor(private cdRef: ChangeDetectorRef) { }

  onRemoveClick(event) {
    event.stopPropagation();
    this.remove.emit(event);
  }


  setDisabledState(isDisabled: boolean) {
    this.cvaDisabled = isDisabled;
    this.cdRef.markForCheck();
  }

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this.cvaDisabled || this.disabled;
  }
}
