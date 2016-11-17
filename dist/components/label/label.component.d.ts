export declare class LabelComponent {
    label: string;
    subLabel: string;
    type: '' | 'primary' | 'sucess' | 'info' | 'warning' | 'error';
    requiredIndicatorCharacter: string;
    required: boolean;
    labelClass: string;
    for: string;
    constructor();
    ngOnInit(): void;
    ucfirst(str: string): string;
}
