import { PipeTransform, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { L10nService } from './l10n.service';
export declare class L10nPipe implements PipeTransform, OnDestroy {
    private l10n;
    key: string;
    args: string[];
    value: string;
    subscription: Subscription;
    constructor(l10n: L10nService);
    compare(key: any, ...args: any[]): boolean;
    transform(key: string, ...args: string[]): any;
    _dispose(): void;
    ngOnDestroy(): void;
}
