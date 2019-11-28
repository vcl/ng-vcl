import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  forwardRef,
  ChangeDetectorRef,
  AfterContentInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  ChangeDetectionStrategy,
  HostBinding
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { startWith } from 'rxjs/operators';

import { TokenComponent, TOKEN_OBSERVER_TOKEN } from './token.component';
import { TokenObserver, Token } from './interfaces';

@Component({
  selector: 'vcl-token-list',
  template: '<ng-content></ng-content>',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TokenListComponent),
      multi: true
    },
    {
      provide: TOKEN_OBSERVER_TOKEN,
      useExisting: TokenListComponent
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenListComponent implements AfterContentInit, OnChanges, OnDestroy, ControlValueAccessor, TokenObserver {

  constructor(private cdRef: ChangeDetectorRef) { }

  tokenSub: Subscription | undefined;

  private cvaDisabled = false;

  @HostBinding('class.token-list')
  @HostBinding('class.token-container')
  _hostClasses = true;

  @ContentChildren(TokenComponent)
  tokens?: QueryList<TokenComponent>;

  @Input()
  disabled = false;

  @Input()
  selectable = false;

  @Input()
  removable = false;

  @Output()
  tokensChange = new EventEmitter();

  @Input()
  value: any[] = [];

  get isDisabled() {
    return this.disabled || this.cvaDisabled;
  }

  private onChangeCallback = (_value) => {};
  private onTouchedCallback = () => {};

  private syncTokens() {
    let value = this.value;
    if (!Array.isArray(value)) {
      value = [];
    }
    this.tokens && this.tokens.forEach((token) => {
      token.selected = value.includes(token.value);
      token.selectable = this.selectable;
      token.removable = this.removable;
      token.setDisabledState(this.isDisabled);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled || changes.value) {
      this.syncTokens();
    }
  }

  notifyTokenRemove(token: Token): void {
    // this.value = this.tokens.filter(t => t !== token).map(t => t.value);
    this.syncTokens();
  }

  notifyTokenSelect(token: Token): void {
    this.value = this.tokens ? this.tokens.filter(t => t.selected).map(t => t.value) : [];
    this.syncTokens();
    this.onChangeCallback(this.value);
  }

  notifyTokenBlur(token: Token): void {
    if (token === this.tokens.last) {
      this.onTouchedCallback();
    }
  }

  ngAfterContentInit() {
    this.tokenSub = this.tokens && this.tokens.changes.pipe(startWith(null)).subscribe(() => {
      this.syncTokens();
    });
  }

  ngOnDestroy() {
    this.dispose();
  }

  dispose() {
    this.tokenSub && this.tokenSub.unsubscribe();
  }

  writeValue(value: any): void {
    this.value = value;
    this.syncTokens();
    this.cdRef.markForCheck();
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.cvaDisabled = isDisabled;
    this.syncTokens();
  }
}



