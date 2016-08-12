import { OnInit } from '@angular/core';
/**
The main control for triggering actions

## Usage

```html
{{vcl-button label="My Button" action=(action "closureAction")}}
```

@demo example

@property     {String}    label    textual label
@property     {String}    title    textual title
*/
export declare class ButtonComponent implements OnInit {
    hovered: boolean;
    pressed: boolean;
    focused: boolean;
    busy: boolean;
    selected: boolean;
    constructor();
    flexLabel: boolean;
    busyLabel: string;
    label: string;
    prepIcon: string;
    prepIconBusy: string;
    appIcon: string;
    appIconBusy: string;
    domouseenter(): void;
    domouseleave(): void;
    ngOnInit(): void;
    readonly calculatedLabel: string;
    readonly calculatedPrepIcon: string;
    readonly calculatedAppIcon: string;
}
