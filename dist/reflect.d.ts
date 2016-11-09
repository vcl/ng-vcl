import { Type, AnimationEntryMetadata } from '@angular/core';
export declare function setAnimations(cls: Type<{}>, animations: AnimationEntryMetadata[]): void;
export declare function setAnnotation(cls: Type<{}>, key: string, value: any): void;
export declare function Effect(): PropertyDecorator;
export declare function getEffectsMetadata(instance: any): string[];
