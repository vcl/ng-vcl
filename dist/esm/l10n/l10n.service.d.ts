import { OpaqueToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { L10nLoaderService, TranslationPackage } from './l10n-loader.service';
import { L10nParserService } from './l10n-parser.service';
export declare let L10N_CONFIG: OpaqueToken;
export interface L10nConfig {
    locale?: string;
}
export declare class L10nService {
    private config;
    private loader;
    private parser;
    private locale$;
    private packages;
    private supportedLocales$;
    private package$;
    private fbPackage$;
    locale: string;
    constructor(config: L10nConfig, loader: L10nLoaderService, parser: L10nParserService);
    /**
    * @internal
    */
    getTranslationPackage(locale: any): Observable<TranslationPackage>;
    /**
    * Gets supported locales
    */
    getSupportedLocales(): Observable<string[]>;
    /**
    * Set the current locale.
    * Emits new translation values to subscribers
    * @param locale
    */
    setLocale(locale: string): void;
    /**
    * Looks up the value for the provided key in the current tranlsation package.
    * Falls back to the fbLocale translation package if the key is not found.
    * @param key
    * @param params
    * @returns {Observable<string>} The translated key
    */
    localize(key: string, ...args: string[]): Observable<string>;
    loc(key: string, ...args: string[]): Observable<string>;
    getNavigatorLang(): string;
}
