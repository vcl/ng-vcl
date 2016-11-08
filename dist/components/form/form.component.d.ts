/// <reference types="core-js" />
import { OnInit, EventEmitter } from '@angular/core';
export declare class FormInputControlGroup {
    inline: boolean;
}
export declare class FormComponent implements OnInit {
    layout: 'vertical' | 'horizontal' | 'inline';
    valueChange: EventEmitter<Object>;
    onSubmitTemplateBased(): void;
    constructor();
    ngOnInit(): void;
    ngSubmit(form: any): void;
}
