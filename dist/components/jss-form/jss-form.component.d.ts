/// <reference types="core-js" />
import { EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
export declare class JssFormObjectComponent {
    schema: any;
    parentPath: string;
    formGroup: FormGroup;
    constructor();
    formType(schemaObj: any): string;
    keys(obj: any): string[];
    name(parentPath: any, key: any): string;
    placeholder(schemaObj: any): any;
    radioOptions(schemaObj: any): any;
    selectItems(schemaObj: any): any;
}
export declare class JssFormComponent implements OnInit {
    fb: FormBuilder;
    schema: any;
    value: Object;
    error: EventEmitter<any[]>;
    form: any;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    keys(obj: any): string[];
    /**
     * create the formGroup for the given schema
     */
    formGroupFromSchema(schemaObj: any): FormGroup;
    /**
     * validate if value matches schema
     * @return {?Object[]} error-array or null if no errors
     */
    jsonSchemaValidate(obj: Object, schema?: any): Object[] | null;
    ngAfterViewInit(): void;
}
