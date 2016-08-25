import { OnInit } from '@angular/core';
/**
The main control for triggering actions

## Usage

```html
<button vcl-button label="My Button" (click)=""doSomething()></button>
```

@demo example

@property     {String}    label    textual label
*/
export declare class ButtonComponent implements OnInit {
    hovered: boolean;
    pressed: boolean;
    focused: boolean;
    selected: boolean;
    busy: boolean;
    flexLabel: boolean;
    busyLabel: string;
    label: string;
    prepIcon: string;
    prepIconBusy: string;
    appIcon: string;
    appIconBusy: string;
    domouseenter(): void;
    domouseleave(): void;
    constructor();
    ngOnInit(): void;
    readonly calculatedLabel: string;
    readonly calculatedPrepIcon: string;
    readonly calculatedAppIcon: string;
}
