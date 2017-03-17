import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter, SimpleChanges, forwardRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ButtonComponent } from '../button/index';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgModel } from "@angular/forms";

export enum SelectionMode {
  Single,
  Multiple
}

/* change event paremter. Emitted when selected buttons have changed */
export interface ButtonGroupChange {
  source: ButtonComponent | null;
  index: number | number[];
}

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ButtonGroupComponent),
  multi: true
};

@Component({
  selector: 'vcl-button-group',
  host: {
    '[class.vclButtonGroup]': 'true',
  },
  template: `<ng-content></ng-content>`,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent implements OnDestroy, ControlValueAccessor {

  private pressSubscription: Subscription | undefined;

  // If `Single`, a single button from the group can be selected
  // If `Multiple` multipe buttons can be selected
  @Input()
  selectionMode: SelectionMode = SelectionMode.Single;

  // String alias for selectionMode
  @Input()
  set mode(value: string) {
    if (value === 'multiple') {
      this.selectionMode = SelectionMode.Multiple;
    } else {
      this.selectionMode = SelectionMode.Single;
    }
  }

  private _selectedIndex: number | number[];

  @Input()
  set selectedIndex(value: number | number[]) {
    if (this.selectionMode === SelectionMode.Single && Array.isArray(value) && typeof value[0] === 'number') {
      this._selectedIndex = value[0];
    } else if (this.selectionMode === SelectionMode.Single && typeof value === 'number') {
      this._selectedIndex = value;
    } else if (this.selectionMode === SelectionMode.Multiple && Array.isArray(value)) {
      this._selectedIndex = value;
    }
    this.updateButtons();
  }

  get selectedIndex() {
    return this._selectedIndex;
  }

  @Output()
  selectedIndexChange = new EventEmitter<number | number[]>();

  updateSelectedIndex(index: number[], source?: ButtonComponent) {
    this.selectedIndex = index;
    this.selectedIndexChange.emit(this.selectedIndex);
    this.change.emit({
      index: this.selectedIndex,
      source: source || null
    });
    if (this.onChangeCallback) {
      this.onChangeCallback(this.selectedIndex);
    }
  }

  @Output()
  change = new EventEmitter<ButtonGroupChange>();

  @ContentChildren(ButtonComponent)
  buttons: QueryList<ButtonComponent>;

  ngAfterContentInit() {
    // When not using ngModel
    if (!this.onChangeCallback) {
      // and selectedIndex is provided
      if (this.selectedIndex !== undefined && this.selectedIndex !== null) {
        // update buttons so they match the provided selectedIndex
        this.updateButtons();
      } else {
        // else update selectedIndex so it matches the selected buttons
        const newIndex = this.buttons.map((btn, i) => ({ i, btn }) ).filter(v => v.btn.selected).map(v => v.i);
        this.updateSelectedIndex(newIndex);
      }
    }

    // Subscribes to buttons press event
    const listenButtonPress = () => {
      this.dispose();

      const press$ = Observable.merge(...(this.buttons.map(btn => btn.press.map(() => btn))));

      this.pressSubscription =  press$.subscribe(btn => {
        this.buttons.forEach((cbtn, idx) => {
          if (this.selectionMode === SelectionMode.Single) {
            // Mark one button on single mode
            cbtn.selected = cbtn === btn;
          } else if (this.selectionMode === SelectionMode.Multiple && btn === cbtn) {
            // Toggle pressed button on multiple mode
            cbtn.selected = !cbtn.selected;
          }
        });

        const newIndex = this.buttons.map((btn, i) => ({ i, btn }) ).filter(v => v.btn.selected).map(v => v.i);
        this.updateSelectedIndex(newIndex, btn);
      });
    };

    listenButtonPress();
    this.buttons.changes.subscribe(() => {
      listenButtonPress();
    });
  }

  ngOnDestroy() {
    this.dispose();
  }

  dispose() {
    this.pressSubscription && this.pressSubscription.unsubscribe();
  }

  updateButtons() {
    if (this.buttons) {
      const index = this.selectedIndex;
      let indexArr: number[];
      if (typeof index === 'number') {
        indexArr = [index];
      } else if (Array.isArray(index)) {
        indexArr = index.filter(i => typeof i === 'number');
      } else {
        return;
      }

      this.buttons.filter((btn, i) => indexArr.includes(i)).forEach(btn => {
        btn.selected = true;
      });
    }
  }
    /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;
  writeValue(value: any): void {
    if (value !== this.selectedIndex) {
      this.selectedIndex = value;
    }
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
