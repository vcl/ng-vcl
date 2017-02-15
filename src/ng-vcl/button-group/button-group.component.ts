import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ButtonComponent } from '../button/index';

export enum SelectionMode {
  Single,
  Multiple
}

/* change event paremter. Emitted when selected buttons have changed */
export interface ButtonGroupChange {
  source: ButtonComponent;
  index: number | number[];
}

@Component({
  selector: 'vcl-button-group',
  host: {
    '[class.vclButtonGroup]': 'true',
  },
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent implements OnDestroy {

  subscriptions: Subscription[] = [];

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

  @Input() selectedIndex: number | number[];

  @Output('selectedIndexChange')
  selectedIndexChangeEE = new EventEmitter<number | number[]>();

  /* Event emitted when the group's value changes. */
  @Output('change')
  private changeEE = new EventEmitter<ButtonGroupChange>();

  @ContentChildren(ButtonComponent)
  buttons: QueryList<ButtonComponent>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedIndex'] && changes['selectedIndex'].currentValue !== undefined) {
      this.initButtons();
    }
  }

  ngOnDestroy() {
    this.dispose();
  }

  ngAfterContentInit() {
    this.initButtons();
    // Reinitialize if buttons change
    this.buttons.changes.subscribe(() => {
      this.initButtons();
    });
  }

  // - Dipose old Subscription
  // - Validate and init selectedIndex
  // - Subscribe to buttons press event
  initButtons() {
    if (!this.buttons) {
      return;
    }

    // Unsubscribe from the old buttons
    this.dispose();

    // Validate the provided selectedIndex value
    let selectedIndex;
    if (this.selectionMode === SelectionMode.Single && typeof this.selectedIndex === 'number') {
      selectedIndex = [this.selectedIndex];
    } else if (this.selectionMode === SelectionMode.Multiple &&
               Array.isArray(this.selectedIndex) &&
               this.selectedIndex.every(n => typeof n === 'number') ) {
      selectedIndex = this.selectedIndex;
    }

    // If valid selectedIndex is provided, change the button selected states
    if (selectedIndex) {
      this.buttons.forEach((btn, idx) => {
        btn.selected = selectedIndex.indexOf(idx) >= 0;
      });
    }

    // Subscribe to buttons press event
    this.subscriptions = this.buttons.map((btn, idx) => btn.press.subscribe(() => {
      if (this.selectionMode === SelectionMode.Single) {
        this.unselectAll();
        btn.selected = true;
        this.changeEE.emit({ source: btn, index: idx });
        this.selectedIndexChangeEE.emit(idx);
      } else {
        btn.selected = !btn.selected;
        const indexes = this.buttons.map((btn, idx) => ({s: btn.selected, idx})).filter(o => o.s).map(o => o.idx);
        this.changeEE.emit({ source: btn, index: indexes });
        this.selectedIndexChangeEE.emit(indexes);
      }
    }));
  }

  unselectAll() {
    this.buttons.forEach(btn => btn.selected = false);
  }

  dispose() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
  }
}
