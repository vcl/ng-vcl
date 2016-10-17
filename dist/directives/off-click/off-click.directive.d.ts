import { EventEmitter, ElementRef } from '@angular/core';
export declare class OffClickDirective {
    private elem;
    offClick: EventEmitter<{}>;
    private listener;
    constructor(elem: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
