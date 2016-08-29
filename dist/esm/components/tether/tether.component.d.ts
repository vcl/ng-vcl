import { ElementRef } from '@angular/core';
export declare class TetherComponent {
    private myElement;
    private id;
    target: string;
    class: string;
    zIndex: number;
    targetAttachment: string;
    attachment: string;
    constructor(myElement: ElementRef);
    ngAfterViewInit(): void;
}
