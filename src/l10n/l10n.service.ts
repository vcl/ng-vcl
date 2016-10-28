import { Injectable, OpaqueToken, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/publishLast';

import {L10nLoaderService, TranslationPackage} from './l10n-loader.service';
import {L10nParserService } from './l10n-parser.service';

export const L10N_CONFIG = new OpaqueToken('l10n.config');

export interface L10nConfig {
  locale?: string;
};

@Injectable()
export class L10nService {

  private _locale$: BehaviorSubject<string>;
  get locale$() {
    return this._locale$.asObservable();
  }

  private packages: { [key: string]: Observable<TranslationPackage> };
  private supportedLocales$: Observable<string[]>;

  private package$: Observable<TranslationPackage>;
  private fbPackage$: Observable<TranslationPackage>;

  public locale: string;

  constructor(
    @Inject(L10N_CONFIG)
    private config: any,  // TODO: L10nConfig - problem with ngc
    private loader: L10nLoaderService,
    private parser: L10nParserService
  ) {
    this.packages = {};

    this.locale = (config.locale || this.getNavigatorLang() || 'en-us').toLowerCase();
    this._locale$ = new BehaviorSubject<string>(this.locale);

    // Initialize the streams

    let supportedLocales$ = this.getSupportedLocales();

    // Set up stream of valid locale
    let locale$ = Observable.combineLatest<string[], string, string>(supportedLocales$, this.locale$, (supportedLocales, locale) => {
      if (supportedLocales.length > 0) {
        // If not supported use first locale as fallback
        return (supportedLocales.indexOf(locale) >= 0) ? locale : supportedLocales[0];
      } else {
        // If there are no supported locales, presume every locale as supported
        return locale;
      }
    });

    // Set up stream of valid fallback locale
    let fbLocale$ = Observable.combineLatest<string[], string, string>(supportedLocales$, locale$, (supportedLocales, locale) => {
      if (supportedLocales.length > 0 && supportedLocales[0] !== locale) {
        return supportedLocales[0];
      } else if (supportedLocales.length > 1 && supportedLocales[0] === locale) {
        return supportedLocales[1];
      } else {
        return null;
      }
    });

    this.package$ = locale$.switchMap(locale => this.getTranslationPackage(locale));

    // Setup the fallback package stream
    let fbPackageTemp$ = fbLocale$.switchMap((fbLocale) => {
      return fbLocale ? this.getTranslationPackage(fbLocale) : Observable.of({});
    });

    // The real fallback stream is a combination of the latest package and fallback package 
    this.fbPackage$ = Observable.combineLatest(this.package$, fbPackageTemp$, (pkg, fbPkg) => {
      return fbPkg ? Object.assign({}, fbPkg, pkg) : pkg;
    });
  }

  /**
  * @internal
  */
  getTranslationPackage(locale) {
    // Cache package streams and share
    if (!this.packages[locale]) {
      this.packages[locale] = this.loader
                                  .getTranslationPackage(locale)
                                  .publishReplay(1)
                                  .refCount();
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
                                   .publishReplay(1)
                                   .refCount();
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
    this._locale$.next(this.locale);
  }

  /**
  * Looks up the value for the provided key in the current tranlsation package.
  * Falls back to the fbLocale translation package if the key is not found.
  * @param key
  * @param params
  * @returns {Observable<string>} The translated key
  */
  localize(key: string, ...args: string[]): Observable<string> {
    return this.package$.switchMap(pkg => {
      return pkg[key] ? Observable.of(pkg) : this.fbPackage$;
    }).map(pkg => {
      return pkg[key] ? this.parser.parse(pkg[key], ...args) : key;
    });
  }

  // alias for localize
  loc(key: string, ...args: string[]): Observable<string> {
    return this.localize(key, ...args);
  }

  getNavigatorLang(): string {
    if (typeof window !== 'undefined' &&  typeof window.navigator !== 'undefined') {
      const nav = window.navigator;
      if (nav['languages'] && nav['languages'].length > 0) {
        return nav['languages'][0];
      } else {
        return nav['language'] || nav['browserLanguage'];
      }
    }
  }
}


