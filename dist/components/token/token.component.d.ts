import { EventEmitter } from '@angular/core';
export declare class TokenComponent {
    label: string;
    selected: boolean;
    removeable: boolean;
    onRemove: EventEmitter<{}>;
    constructor();
    remove(): void;
}
