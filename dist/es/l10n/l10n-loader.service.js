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
import { Inject, Injectable, OpaqueToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operators/add/observable/of';
;
export let L10N_LOADER_CONFIG = new OpaqueToken('l10n.loader.config');
export class L10nLoaderService {
    getSupportedLocales() {
        return Observable.of([]);
    }
}
export let L10nStaticLoaderService = class L10nStaticLoaderService extends L10nLoaderService {
    constructor(config) {
        super();
        this.config = config;
    }
    flatten(locale, data) {
        let pkg = {};
        Object.keys(data).forEach(key => {
            if (data[key] && data[key][locale]) {
                pkg[key] = data[key][locale];
            }
        });
        return pkg;
    }
    getSupportedLocales() {
        let supportedLocales = [];
        Object.keys(this.config).forEach(key => {
            if (this.config[key]) {
                Object.keys(this.config[key]).forEach(locale => {
                    supportedLocales.push(locale);
                });
            }
        });
        // unique
        return Observable.of(Array.from(new Set(supportedLocales)));
    }
    getTranslationPackage(locale) {
        let pkg = this.flatten(locale, this.config);
        return Observable.of(pkg);
    }
};
L10nStaticLoaderService = __decorate([
    Injectable(),
    __param(0, Inject(L10N_LOADER_CONFIG)), 
    __metadata('design:paramtypes', [Object])
], L10nStaticLoaderService);
export let L10nNoopLoaderService = class L10nNoopLoaderService extends L10nLoaderService {
    getTranslationPackage(locale) {
        return Observable.of({});
    }
};
L10nNoopLoaderService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], L10nNoopLoaderService);
