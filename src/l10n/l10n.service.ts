import { Injectable, OpaqueToken, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {L10nLoaderService, TranslationPackage} from './l10n-loader.service';
import {L10nParserService } from './l10n-parser.service';

export let L10N_CONFIG = new OpaqueToken('l10n.config');

export interface L10nConfig {
  locale?: string;
};

@Injectable()
export class L10nService {

  private locale$: BehaviorSubject<string>;
  private packages: { [key: string]: Observable<TranslationPackage> };
  private supportedLocales$: Observable<string[]>;

  private package$: Observable<TranslationPackage>;
  private fbPackage$: Observable<TranslationPackage>;

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


