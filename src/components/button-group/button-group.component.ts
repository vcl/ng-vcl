import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

/**
A button group which distributes space for each button
equally to occupy 100% horizontal space.

## Usage

```html
<vcl-button-group select=true>
  ...
</vcl-button-group>
```

The buttons must be defined as an item array
with the following structure:

```js
buttons: [
  {
    index: 0,
    label: 'Privacy',
    action: 'tabIndex',
    selected: true
  },
  {
    index: 1,
    label: 'Terms',
    action: 'tabIndex',
    selected: false
  }
]
```

When a button's action is triggered,
it emits the given `action` with the `index` as param.
*/

export enum SelectionMode {
  Single,
  Multiple
}

/** A simple change event emitted by either MdButtonToggle or MdButtonToggleGroup. */
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
export class ButtonGroupComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  // If `Single`, a single button from the group can be selected. The selection is tracked following the actions.
  // If `Multiple` multipe buttons can be selected
  @Input()
  selectionMode: SelectionMode = SelectionMode.Single;

  // string alias forSelectionMode
  @Input()
  mode: string;

  /** Event emitted when the group's value changes. */
  private _change = new EventEmitter<ButtonGroupChange>();
  @Output()
  get change(): Observable<ButtonGroupChange> {
    return this._change.asObservable();
  }

  @ContentChildren(ButtonComponent)
  buttons: QueryList<ButtonComponent>;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['mode']) {
      if (changes['mode'].currentValue === 'multiple') {
        this.selectionMode = SelectionMode.Multiple;
      } else {
        this.selectionMode = SelectionMode.Single;
      }
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.dispose();
  }

  ngAfterContentInit() {
    this.initButtons();
    this.buttons.changes.subscribe((x) => {
      this.initButtons();
    });
  }

  initButtons() {
    this.dispose();
    this.subscriptions = this.buttons.map((btn, idx) => btn.press.subscribe(() => {
      if (this.selectionMode === SelectionMode.Single) {
        this.unselectAll();
        btn.selected = true;
        this._change.emit({
          source: btn,
          index: idx
        });
      } else {
        btn.selected = !btn.selected;
        this._change.emit({
          source: btn,
          index: this.buttons.map((btn, idx) => ({s: btn.selected, idx})).filter(o => o.s).map(o => o.idx)
        });
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
