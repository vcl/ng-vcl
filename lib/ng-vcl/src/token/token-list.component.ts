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
  OnDestroy
} from '@angular/core';
import { merge ,  Subscription } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { TokenComponent } from './token.component';
import { map, startWith } from 'rxjs/operators';


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TokenListComponent),
  multi: true
};
@Component({
  selector: 'vcl-token-list',
  template: '<ng-content></ng-content>',
  host: {
    '[class.vclTokenList]': 'true',
    '[class.vclTokenContainer]': 'true'
  },
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  // Used by select
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenListComponent implements AfterContentInit, OnChanges, OnDestroy, ControlValueAccessor {

  constructor(private cdRef: ChangeDetectorRef) { }

  tokenSubscription: Subscription | undefined;

  @ContentChildren(TokenComponent)
  tokens?: QueryList<TokenComponent>;

  @Input()
  selectable = false;

  @Input()
  dispatchEvent = false;

  @Input()
  disabled = false;

  @Output()
  tokensChange = new EventEmitter();

  labels: any[] = [];

  private onChangeCallback?: (_: any) => (_: any) => null;

  private syncTokens() {
    const labels = this.labels;
    if (Array.isArray(labels)) {
      this.tokens && this.tokens.forEach((token) => {
        token.selected = labels.includes(token.label);
      });
    }
  }

  private syncSelectedValues() {
    this.labels = this.tokens ? this.tokens.filter(t => t.selected).map(t => t.label) : [];
  }


  private triggerChange() {
    this.tokensChange.emit(this.labels);
    !!this.onChangeCallback && this.onChangeCallback(this.labels);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled) {
      this.setDisabledState(changes.disabled.currentValue);
    }
  }

  ngAfterContentInit() {
    // Update the selectedIndex to match the selected buttons when not using ngModel
    if (!this.onChangeCallback) {
      this.syncSelectedValues();
      this.triggerChange();
    }

    // Subscribes to buttons press event
    const listenButtonPress = () => {
      if (!this.tokens) {
        return;
      }

      this.dispose();

      this.cdRef.markForCheck();

      const select$ = merge(...(this.tokens.map(token => token.select.pipe(map(() => token)))));

      this.tokenSubscription =  select$.subscribe(token => {
        if (this.selectable) {
          token.selected = !token.selected;
        }
        this.syncSelectedValues();
        this.triggerChange();
      });
    };

    this.tokens && this.tokens.changes.pipe(startWith(null)).subscribe(() => {
      listenButtonPress();
      setTimeout(() => {
        this.syncSelectedValues();
        this.setDisabledState(this.disabled);
      });
    });
  }

  ngOnDestroy() {
    this.dispose();
  }

  dispose() {
    this.tokenSubscription && this.tokenSubscription.unsubscribe();
  }
  writeValue(value: any): void {
    this.labels = value;
    this.syncTokens();
    this.cdRef.markForCheck();
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
  }
  setDisabledState(isDisabled: boolean) {
    this.tokens && this.tokens.forEach(t => t.setDisabledState(isDisabled));
  }
}



