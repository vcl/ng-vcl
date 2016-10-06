import { OnInit } from '@angular/core';
/**
Radio button.

## Usage

```html
<vcl-radio-button
  [(checked)]="checked">
</vcl-radio-button>
```
*/
export declare class FormControlLabelComponent implements OnInit {
    disabled: boolean;
    requiredIndicatorCharacter: string;
    label: any;
    subLabel: any;
    prepend: boolean;
    wrapping: boolean;
    required: boolean;
    requiredIndLabel: any;
    ngOnInit(): void;
    readonly hbWrapping: boolean;
    readonly hbVclDisabled: boolean;
}
