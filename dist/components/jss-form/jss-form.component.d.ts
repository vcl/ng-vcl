/// <reference types="core-js" />
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
export declare class JssFormObjectComponent {
    schema: any;
    parentPath: string;
    formGroup: FormGroup;
    constructor();
    formType(schemaObj: any): string;
    keys(obj: any): string[];
    name(parentPath: any, key: any): string;
}
export declare class JssFormComponent implements OnInit {
    fb: FormBuilder;
    schema: any;
    value: Object;
    form: any;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    keys(obj: any): string[];
    /**
     * create the formGroup for the given schema
     * @param  {Object}    schemaObj
     * @return {FormGroup}               [description]
     */
    formGroupFromSchema(schemaObj: any): FormGroup;
    jsonSchemaValidate(obj: Object, schema?: any): true;
    ngAfterViewInit(): void;
}
