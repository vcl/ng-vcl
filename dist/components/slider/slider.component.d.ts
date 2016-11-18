import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class SliderComponent implements ControlValueAccessor {
    value: number;
    min: number;
    max: number;
    step: number;
    round: number;
    scaleNames: string[];
    constructor();
    ngAfterContentInit(): void;
    percentLeftKnob: number;
    scalePoints: any[];
    calculatePercentLeftKnob(): void;
    getScalePoints(): void;
    scalePointLabel(i: number): string;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
