import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class SliderComponent implements ControlValueAccessor {
    value: number;
    min: number;
    max: number;
    step: number;
    stepsOnly: boolean;
    round: number;
    scaleNames: string[];
    scale: any;
    constructor();
    ngAfterContentInit(): void;
    percentLeftKnob: number;
    scalePoints: any[];
    calculatePercentLeftKnob(): void;
    percentToValue(per: number): number;
    getScalePoints(): void;
    closestScalePoint(percentValue: any): number;
    scalePointLabel(i: number): string;
    deltaPxToPercent(deltaPx: number): number;
    lastPercentLeftKnob: number;
    firstPan: boolean;
    onPan(ev: any): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
