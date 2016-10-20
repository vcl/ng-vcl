import { Observable } from 'rxjs/Observable';
import { OnInit, OnChanges, SimpleChanges, EventEmitter, ElementRef } from '@angular/core';
export declare class RadioButtonComponent implements OnInit, OnChanges {
    private elementRef;
    checkedIcon: string;
    uncheckedIcon: string;
    disabled: boolean;
    tabindex: number;
    /**
    Refelects the checked state, `true` is checked and `false` is unchecked
    @public
    */
    checked: boolean;
    /**
    Action fired when the `checked` state changes due to user interaction.
    */
    _checkedChange: EventEmitter<boolean>;
    readonly checkedChange: Observable<boolean>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    readonly clsVclDisabled: boolean;
    readonly attrAriaDisabled: boolean;
    readonly attrChecked: boolean;
    onKeyup(e: any): void;
    onClick(e: any): void;
    triggerChangeAction(e: any): void;
    focusMaintenance(checked: boolean): void;
    readonly icon: string;
}
