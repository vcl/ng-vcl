import { OnInit } from '@angular/core';
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
export declare class ButtonGroupComponent implements OnInit {
    select: boolean;
    multiple: boolean;
    private buttons;
    constructor();
    ngOnInit(): void;
}
