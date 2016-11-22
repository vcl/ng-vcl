/// <reference types="core-js" />
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
export declare class JssFormObjectComponent {
    schema: any;
    constructor();
    inputSwitch(schemaObj: any): string;
    keys(obj: any): string[];
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class JssFormComponent implements OnInit {
    fb: FormBuilder;
    schema: any;
    value: Object;
    form: any;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    keys(obj: any): string[];
    jsonSchemaValidate(obj: Object): true;
    ngAfterViewInit(): void;
}
