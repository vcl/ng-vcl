import { Injectable, OpaqueToken, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import {L10nLoaderService, TranslationPackage} from './l10n-loader.service';
import {L10nParserService } from './l10n-parser.service';

export let L10N_CONFIG = new OpaqueToken('l10n.config');

export interface L10nConfig {
  locale?: string
};

@Injectable()
export class L10nService {

  private locale$: BehaviorSubject<string>;
  private packages: { [key:string]: Observable<TranslationPackage> }
  private supportedLocales$: Observable<string[]>;

  public locale: string;

  constructor(
    @Inject(L10N_CONFIG)
    private config: L10nConfig,
    private loader: L10nLoaderService,
    private parser: L10nParserService
  ) {
    this.packages = {};

    this.locale = (config.locale || this.getNavigatorLang() || 'en-us').toLowerCase();
    this.locale$ = new BehaviorSubject<string>(this.locale);
  }

  /**
  * @internal
  */
  getTranslationPackage(locale) {
    // Cache package streams and share
    if(!this.packages[locale]) {
      this.packages[locale] = this.loader.getTranslationPackage(locale).publishLast().refCount();
    }
    return this.packages[locale];
  }

  /**
  * Match supportedLocales with provided locale
  * If supportedLocales are not provided, presume every locale is supported
  * @internal
  */
  getValidLocale() {
    let supportedLocales$ = this.getSupportedLocales();
    return Observable.combineLatest(supportedLocales$, this.locale$, (supportedLocales, locale)=>{
      if(supportedLocales.length>0) {
        // If not supported use first locale as fallback
        return (supportedLocales.indexOf(locale)>=0) ? locale : supportedLocales[0]; 
      } else {
        return locale;
      }
    });
  }

  /**
  * Gets supported locales
  */
  getSupportedLocales() {
    // Cache supportedLocales and share
    if(!this.supportedLocales$) {
      this.supportedLocales$ = this.loader.getSupportedLocales().map(supportedLocales=>{
        return supportedLocales.map(locale=>locale.toLowerCase());
      }).publishLast().refCount();
    }
    return this.supportedLocales$;
  }

  /**
  * Set the current locale. 
  * Emits new translation values to subscribers  
  * @param locale
  */
  setLocale(locale: string) {
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
  localize(key:string, ...args:string[]) : Observable<string> {
    return this.getValidLocale()
               .switchMap(locale=>this.getTranslationPackage(locale))
               .switchMap(pkg=>{
                 if(pkg[key]) {
                   return Observable.of(pkg)
                 } else {
                   return this.getSupportedLocales().map(locales=>{
                     return locales.length>0?locales[0]:null;
                   }).switchMap(fbLocale=>{
                     return fbLocale ? this.getTranslationPackage(fbLocale) : Observable.of({});
                   }).map(fbPkg=>{
                     return Object.assign({}, fbPkg, pkg)
                   });
                  //  return Observable.combineLatest(fb$, this.package$, (fbPkg, pkg)=>Object.assign({}, fbPkg, pkg));
                 }
               }).map(pkg=>{
                 return pkg[key] ? this.parser.parse(pkg[key], ...args) : key;
               });
  }

  // alias for localize
  loc(key:string, ...args:string[]) : Observable<string> {
    return this.localize(key, ...args);
  }

  getNavigatorLang(): string {
    if (typeof window!=='undefined' &&  typeof window.navigator!=='undefined') {
      const nav = window.navigator;
      if(nav['languages'] && nav['languages'].length>0) {
        return nav['languages'][0];
      } else {
        return nav['language'] || nav['browserLanguage'];
      }
    }
  }
}


