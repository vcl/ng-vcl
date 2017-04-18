import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter, SimpleChanges, forwardRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ButtonComponent } from '../button/index';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgModel } from "@angular/forms";

export enum SelectionMode {
  Single,
  Multiple
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

  @ContentChildren(ButtonComponent)
  buttons: QueryList<ButtonComponent>;

  // If `Single`, a single button from the group can be selected
  // If `Multiple` multiple buttons can be selected
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

  @Output()
  change = new EventEmitter<number | number[]>();

  selectedIndex: number | number[];

  private syncButtons() {
    const selectedIndex = this.selectedIndex;
    if (this.selectionMode === SelectionMode.Multiple && Array.isArray(selectedIndex)) {
      (this.buttons || []).forEach((btn, idx) => {
        btn.selected = selectedIndex.includes(idx);
      });
    } else if (this.selectionMode === SelectionMode.Single && typeof selectedIndex === 'number') {
      (this.buttons || []).forEach((btn, idx) => {
        btn.selected = selectedIndex === idx;
      });
    }
  }

  private syncSelectedIndex() {
    const items = this.buttons || [];
    const selectedIndex = items.map((btn, idx) => ({selected: btn.selected, idx })).filter(v => v.selected).map(v => v.idx);
    this.selectedIndex = this.selectionMode === SelectionMode.Multiple ? selectedIndex : selectedIndex[0];
  }


  private triggerChange() {
    this.change.emit(this.selectedIndex);
    this.onChange(this.selectedIndex);
  }

  ngAfterContentInit() {
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

        this.syncSelectedIndex();
        this.triggerChange();
        this.onTouched();
      });
    };

    listenButtonPress();
    this.buttons.changes.subscribe(() => {
      listenButtonPress();
      setTimeout(() => this.syncButtons());
    });
  }

  ngOnDestroy() {
    this.dispose();
  }

  dispose() {
    this.pressSubscription && this.pressSubscription.unsubscribe();
  }

    /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};
  writeValue(value: any): void {
    this.selectedIndex = value;
    this.syncButtons();
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
