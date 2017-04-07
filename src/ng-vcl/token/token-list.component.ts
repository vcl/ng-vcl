import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  forwardRef,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Token, TokenComponent } from './token.component';


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
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TokenListComponent implements ControlValueAccessor {

  tokenSubscription: Subscription | undefined;

  @ContentChildren(TokenComponent)
  tokens: QueryList<TokenComponent>;

  @Input()
  selectable: boolean = true;

  @Output()
  change = new EventEmitter();

  labels: any[];

  private syncTokens() {
    const labels = this.labels;
    if (Array.isArray(labels)) {
      (this.tokens || []).forEach((token) => {
        token.selected = labels.includes(token.label);
      });
    }
  }

  private syncSelectedValues() {
    this.labels = (this.tokens || []).filter(t => t.selected).map(t => t.label);
  }


  private triggerChange() {
    this.change.emit(this.labels);
    !!this.onChangeCallback && this.onChangeCallback(this.labels);
  }

  ngAfterContentInit() {
    // Update the selectedIndex to match the selected buttons when not using ngModel
    if (!this.onChangeCallback) {
      this.syncSelectedValues();
      this.triggerChange();
    }

    // Subscribes to buttons press event
    const listenButtonPress = () => {
      this.dispose();

      const select$ = Observable.merge(...(this.tokens.map(token => token.select.map(() => token))));

      this.tokenSubscription =  select$.subscribe(token => {
        if (this.selectable) {
          token.selected = !token.selected;
        }
        this.syncSelectedValues();
        this.triggerChange();
      });
    };

    listenButtonPress();
    this.tokens.changes.subscribe(() => {
      listenButtonPress();
      setTimeout(() => this.syncSelectedValues());
    });
  }

  ngOnDestroy() {
    this.dispose();
  }

  dispose() {
    this.tokenSubscription && this.tokenSubscription.unsubscribe();
  }

    /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;
  writeValue(value: any): void {
    this.labels = value;
    this.syncTokens();
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}



