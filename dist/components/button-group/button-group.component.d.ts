import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { OnDestroy, QueryList, EventEmitter, SimpleChanges } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
export declare enum SelectionMode {
    Single = 0,
    Multiple = 1,
}
export interface ButtonGroupChange {
    source: ButtonComponent;
    index: number | number[];
}
export declare class ButtonGroupComponent implements OnDestroy {
    subscriptions: Subscription[];
    selectionMode: SelectionMode;
    mode: string;
    selectedIndex: number | number[];
    _selectedIndexChange: EventEmitter<number | number[]>;
    readonly selectedIndexChange: Observable<number | number[]>;
    private _change;
    readonly change: Observable<ButtonGroupChange>;
    buttons: QueryList<ButtonComponent>;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    initButtons(): void;
    unselectAll(): void;
    dispose(): void;
}
