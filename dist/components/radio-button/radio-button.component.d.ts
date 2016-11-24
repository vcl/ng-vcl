import { Observable } from 'rxjs/Observable';
import { OnInit, OnChanges, SimpleChanges, EventEmitter, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class RadioButtonComponent implements OnInit, OnChanges, ControlValueAccessor {
    private elementRef;
    checkedIcon: string;
    uncheckedIcon: string;
    disabled: boolean;
    labelPosition: 'left' | 'right';
    tabindex: number;
    checked: boolean;
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
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
