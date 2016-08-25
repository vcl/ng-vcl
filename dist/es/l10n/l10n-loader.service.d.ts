import { OpaqueToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operators/add/observable/of';
export interface TranslationPackage {
    [key: string]: string;
}
export declare let L10N_LOADER_CONFIG: OpaqueToken;
export interface L10nLoaderConfig {
    [key: string]: any;
}
export declare abstract class L10nLoaderService {
    /**
     * Return a TranslationPackage as an Observable.
     * May emit new values over time
     */
    abstract getTranslationPackage(locale: string): Observable<TranslationPackage>;
    getSupportedLocales(): Observable<string[]>;
}
export declare class L10nStaticLoaderService extends L10nLoaderService {
    protected config: L10nLoaderConfig;
    constructor(config: L10nLoaderConfig);
    flatten(locale: string, data: any): TranslationPackage;
    getSupportedLocales(): Observable<string[]>;
    getTranslationPackage(locale: string): Observable<TranslationPackage>;
}
export declare class L10nNoopLoaderService extends L10nLoaderService {
    getTranslationPackage(locale: string): Observable<{}>;
}
