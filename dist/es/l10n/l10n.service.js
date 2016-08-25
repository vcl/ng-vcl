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
import { Injectable, OpaqueToken, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/operators/add/observable/of';
import { L10nLoaderService } from './l10n-loader.service';
import { L10nParserService } from './l10n-parser.service';
export let L10N_CONFIG = new OpaqueToken('l10n.config');
;
export let L10nService = class L10nService {
    constructor(config, loader, parser) {
        this.config = config;
        this.loader = loader;
        this.parser = parser;
        this.packages = {};
        this.locale = (config.locale || this.getNavigatorLang() || 'en-us').toLowerCase();
        this.locale$ = new BehaviorSubject(this.locale);
        // Initialize the streams
        let supportedLocales$ = this.getSupportedLocales();
        // Set up stream of valid locale 
        let locale$ = Observable.combineLatest(supportedLocales$, this.locale$, (supportedLocales, locale) => {
            if (supportedLocales.length > 0) {
                // If not supported use first locale as fallback
                return (supportedLocales.indexOf(locale) >= 0) ? locale : supportedLocales[0];
            }
            else {
                // If there are no supported locales, presume every locale as supported
                return locale;
            }
        });
        // Set up stream of valid fallback locale
        let fbLocale$ = Observable.combineLatest(supportedLocales$, locale$, (supportedLocales, locale) => {
            if (supportedLocales.length > 0 && supportedLocales[0] !== locale) {
                return supportedLocales[0];
            }
            else if (supportedLocales.length > 1 && supportedLocales[0] === locale) {
                return supportedLocales[1];
            }
            else {
                return null;
            }
        });
        this.package$ = locale$.switchMap(locale => this.getTranslationPackage(locale));
        let fbPackage$ = fbLocale$.switchMap((fbLocale) => {
            return fbLocale ? this.getTranslationPackage(fbLocale) : Observable.of({});
        });
        this.fbPackage$ = Observable.combineLatest(this.package$, fbPackage$, (pkg, fbPkg) => {
            return fbPkg ? Object.assign({}, fbPkg, pkg) : pkg;
        });
    }
    /**
    * @internal
    */
    getTranslationPackage(locale) {
        // Cache package streams and share
        if (!this.packages[locale]) {
            this.packages[locale] = this.loader.getTranslationPackage(locale).publishLast().refCount();
        }
        return this.packages[locale];
    }
    /**
    * Gets supported locales
    */
    getSupportedLocales() {
        // Cache supportedLocales and share
        if (!this.supportedLocales$) {
            this.supportedLocales$ = this.loader
                .getSupportedLocales()
                .map(sl => sl.map(locale => locale.toLowerCase()))
                .publishLast()
                .refCount();
        }
        return this.supportedLocales$;
    }
    /**
    * Set the current locale.
    * Emits new translation values to subscribers
    * @param locale
    */
    setLocale(locale) {
        this.locale = locale.toLowerCase();
        this.locale$.next(this.locale);
    }
    /**
    * Looks up the value for the provided key in the current tranlsation package.
    * Falls back to the fbLocale translation package if the key is not found.
    * @param key
    * @param params
    * @returns {Observable<string>} The translated key
    */
    localize(key, ...args) {
        return this.package$.switchMap(pkg => {
            return pkg[key] ? Observable.of(pkg) : this.fbPackage$;
        }).map(pkg => {
            return pkg[key] ? this.parser.parse(pkg[key], ...args) : key;
        });
    }
    // alias for localize
    loc(key, ...args) {
        return this.localize(key, ...args);
    }
    getNavigatorLang() {
        if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
            const nav = window.navigator;
            if (nav['languages'] && nav['languages'].length > 0) {
                return nav['languages'][0];
            }
            else {
                return nav['language'] || nav['browserLanguage'];
            }
        }
    }
};
L10nService = __decorate([
    Injectable(),
    __param(0, Inject(L10N_CONFIG)), 
    __metadata('design:paramtypes', [Object, L10nLoaderService, L10nParserService])
], L10nService);
