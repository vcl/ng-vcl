export declare class ProgressBarComponent {
    value: number;
    secondaryValue: number;
    minValue: number;
    maxValue: number;
    indeterminate: boolean;
    label: string;
    readonly showIndeterminate: boolean;
    readonly showValue: boolean;
    readonly showSecondaryValue: boolean;
    readonly transformValue: string;
    readonly transformSecondaryValue: string;
    readonly range: number;
    scaleValue(value: number): number;
    validateValue(value: number): boolean;
}
