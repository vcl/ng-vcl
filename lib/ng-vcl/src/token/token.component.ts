import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  HostBinding,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  InjectionToken,
  SkipSelf,
  Inject,
  Optional,
  ElementRef,
} from '@angular/core';
import { TokenObserver, Token } from './interfaces';

export const TOKEN_OBSERVER_TOKEN = new InjectionToken<TokenObserver>(
  'vcl_token_observer'
);

@Component({
    selector: 'vcl-token',
    templateUrl: 'token.component.html',
    exportAs: 'vclToken',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TokenComponent implements Token {
  constructor(
    private cdRef: ChangeDetectorRef,
    private elementRef: ElementRef<HTMLElement>,
    @SkipSelf()
    @Optional()
    @Inject(TOKEN_OBSERVER_TOKEN)
    private observer?: TokenObserver
  ) {}

  @HostBinding('class.token')
  @Input()
  classVclToken = true;

  @HostBinding('attr.tabindex')
  @Input()
  tabindex = 0;

  // tslint:disable-next-line:no-input-rename
  @Input('label')
  _label?: string;

  // tslint:disable-next-line:no-input-rename
  @Input('value')
  _value?: any;

  set label(label: string) {
    this._label = label;
  }

  get label() {
    return this._label || this.elementRef.nativeElement.innerHTML;
  }

  get value() {
    return this._value || this.label;
  }

  @Input()
  disabled = false;

  @HostBinding('class.selected')
  @Input()
  selected = false;

  @Input()
  selectable = false;

  @HostBinding('style.cursor')
  get styleCursor() {
    return !this.selectable ? 'unset' : null;
  }

  @Input()
  removable = false;

  @Output()
  remove = new EventEmitter();

  @Output()
  selectionChange = new EventEmitter<boolean>();

  // Store cva disabled state in an extra property to remember the old state after the token-list has been disabled
  private cvaDisabled = false;

  @HostListener('blur', ['$event'])
  onBlur(e: Event) {
    this.observer && this.observer.notifyTokenBlur(this);
  }

  @HostListener('click', ['$event'])
  onClick(e: Event) {
    if (this.isDisabled || !this.selectable) {
      return;
    }
    this.selected = !this.selected;
    this.selectionChange.emit(this.selected);
    this.observer && this.observer.notifyTokenSelect(this);
  }

  onRemoveClick(event) {
    event.stopPropagation();
    this.remove.emit(event);
    this.observer && this.observer.notifyTokenRemove(this);
  }

  setDisabledState(isDisabled: boolean) {
    this.cvaDisabled = isDisabled;
    this.cdRef.markForCheck();
  }

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.cvaDisabled || this.disabled;
  }
}
