var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Optional, Pipe } from '@angular/core';
import { L10nService } from './l10n.service';
export let L10nPipe = class L10nPipe {
    constructor(l10n) {
        this.l10n = l10n;
        this.args = [];
    }
    // Check if key and args match
    compare(key, ...args) {
        return key === this.key &&
            args.length === this.args.length &&
            args.every((v, idx) => v === this.args[idx]);
    }
    transform(key, ...args) {
        // Dispose subscription if key or params are different
        if (!this.compare(key, ...args) && this.subscription) {
            this._dispose();
        }
        // store key and args for comparison
        this.key = key;
        this.args = args;
        if (!this.subscription) {
            this.subscription = this.l10n.localize(key, ...args).subscribe(value => {
                this.value = value;
            });
        }
        return this.value;
    }
    _dispose() {
        this.subscription.unsubscribe();
        this.value = null;
        this.subscription = null;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this._dispose();
        }
    }
};
L10nPipe = __decorate([
    Pipe({
        name: 'loc',
        pure: false
    }),
    __param(0, Optional()), 
    __metadata('design:paramtypes', [L10nService])
], L10nPipe);
