/// <reference types="core-js" />
import { Type, AnimationEntryMetadata, Component } from '@angular/core';
export declare function setAnimations(cls: Type<{}>, animations: AnimationEntryMetadata[]): void;
export declare function setAnnotation(cls: Type<{}>, key: string, value: any): void;
export declare function SubComponent(annotation: Component): (cls: Function) => void;
