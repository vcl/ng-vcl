import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { OnInit, OnDestroy, QueryList, SimpleChanges } from '@angular/core';
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

@demo example1
*/
export declare enum SelectionMode {
    Single = 0,
    Multiple = 1,
}
/** A simple change event emitted by either MdButtonToggle or MdButtonToggleGroup. */
export interface ButtonGroupChange {
    source: ButtonComponent;
    index: number | number[];
}
export declare class ButtonGroupComponent implements OnInit, OnDestroy {
    subscriptions: Subscription[];
    selectionMode: SelectionMode;
    mode: string;
    /** Event emitted when the group's value changes. */
    private _change;
    readonly change: Observable<ButtonGroupChange>;
    buttons: QueryList<ButtonComponent>;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    initButtons(): void;
    unselectAll(): void;
    dispose(): void;
}
