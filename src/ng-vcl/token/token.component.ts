import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  HostBinding,
  ChangeDetectionStrategy,
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
  label: string = '';

  @Input()
  value?: string;

  @Input()
  disabled: boolean = false;

  @HostListener('tap', ['$event'])
  onTap(e: Event) {
    if (this.isDisabled) {
      return;
    }
    this.select.emit(e);
  }

  @HostBinding('class.vclSelected')
  @Input()
  selected: boolean = false;

  @Input()
  removable: boolean = false;

  @Input()
  icon: string = 'fa:times';

  @Input()
  tokenIcon?: string;

  @Output()
  remove = new EventEmitter();

  @Output()
  select = new EventEmitter();

  constructor(private cdRef: ChangeDetectorRef) { }

  onRemoveClick(event) {
    event.stopPropagation();
    this.remove.emit(event);
  }

  // Store cva disabled state in an extra property to remember the old state after the token-list has been disabled
  private cvaDisabled = false;
  setDisabledState(isDisabled: boolean) {
    this.cvaDisabled = isDisabled;
    this.cdRef.markForCheck();
  }

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this.cvaDisabled || this.disabled;
  }
}
