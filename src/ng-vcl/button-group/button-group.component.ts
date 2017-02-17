import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
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

  btnSub: Subscription;
  pressSubs: Subscription[] = [];

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

  @Input()
  selectedIndex: number | number[];

  @Output('selectedIndexChange')
  selectedIndexChangeEE = new EventEmitter<number | number[]>();

  @ContentChildren(ButtonComponent)
  buttons: QueryList<ButtonComponent>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedIndex']) {
      this.selectButtons(changes['selectedIndex'].currentValue);
    }
  }

  ngAfterContentInit() {
    if (this.selectedIndex !== undefined) {
      // Prioritize selectedIndex over button.selected attribute
      this.selectButtons(this.selectedIndex);
    } else {
      // Determine selectedIndex if not initially provided
      const newIndex = this.buttons.map((btn, i) => ({ i, btn }) ).filter(v => v.btn.selected).map(v => v.i);
      this.setSelectedIndex(newIndex);
      this.selectedIndexChangeEE.emit(this.selectedIndex);
    }

    // Subscribes to buttons press event
    const listenButtonPress = () => {
      this.disposePressSubs();
      this.pressSubs = this.buttons.map((btn, idx) => btn.press.subscribe(() => {
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
        this.setSelectedIndex(newIndex);
        this.selectedIndexChangeEE.emit(this.selectedIndex);
      }));
    };

    listenButtonPress();
    this.buttons.changes.subscribe(() => {
      listenButtonPress();
    });
  }

  ngOnDestroy() {
    this.disposePressSubs();
    this.btnSub && this.btnSub.unsubscribe();
  }

  disposePressSubs() {
    this.pressSubs.forEach(s => s.unsubscribe());
    this.pressSubs = [];
  }
  setSelectedIndex(index: number[]) {
    if (this.selectionMode === SelectionMode.Single) {
      this.selectedIndex = typeof index[0] === 'number' ? index[0] : null;
    } else {
      this.selectedIndex = index;
    }

  }

  selectButtons(index: number | number[]) {
    if (this.buttons) {
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
}
