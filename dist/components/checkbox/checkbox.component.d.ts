import { OnInit, OnChanges, SimpleChanges, EventEmitter, ElementRef } from '@angular/core';
/**
Checkbox

## Usage

```html+hbs
<vcl-checkbox [(checked)]="checked"></vcl-checkbox>
```

@demo example
*/
export declare class CheckboxComponent implements OnInit, OnChanges {
    private elementRef;
    checkedIcon: string;
    uncheckedIcon: string;
    disabled: boolean;
    /**
    Refelects the checked state, `true` is checked and `false` is unchecked
    @public
    */
    checked: boolean;
    /**
    Action fired when the `checked` state changes due to user interaction.
    The first parameter is the value of the `checked` property.
    @public
    @action
    */
    checkedChange: EventEmitter<boolean>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    readonly hbVclDisabled: boolean;
    readonly hbAriaDisabled: boolean;
    readonly hbChecked: boolean;
    onKeyup(e: any): void;
    onClick(e: any): void;
    triggerChangeAction(e: any): void;
    focusMaintenance(checked: boolean): void;
    readonly icon: string;
}
