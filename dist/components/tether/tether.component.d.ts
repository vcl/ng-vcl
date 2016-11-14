import { Observable } from 'rxjs/Observable';
import { ElementRef, EventEmitter } from '@angular/core';
import * as Tether from 'tether';
export declare class TetherComponent {
    private myElement;
    id: string;
    target: string;
    class: string;
    zIndex: number;
    targetAttachment: string;
    attachment: string;
    tether: Tether;
    _error: EventEmitter<any>;
    readonly error: Observable<any>;
    constructor(myElement: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
