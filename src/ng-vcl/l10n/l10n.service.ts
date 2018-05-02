import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable ,  BehaviorSubject ,  combineLatest ,  of } from 'rxjs';

import { L10nLoaderService, TranslationPackage } from './l10n-loader.service';
import { L10nParserService } from './l10n-parser.service';
import { switchMap, refCount, publishReplay, map } from 'rxjs/operators';

export const L10N_CONFIG = new InjectionToken('l10n.config');

export interface L10nConfig {
  locale?: string;
}

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
    let locale$ = combineLatest<string[], string, string>(supportedLocales$, this.locale$, (supportedLocales, locale) => {
      if (supportedLocales.length > 0) {
        // If not supported use first locale as fallback
        return (supportedLocales.indexOf(locale) >= 0) ? locale : supportedLocales[0];
      } else {
        // If there are no supported locales, presume every locale as supported
        return locale;
      }
    });

    // Set up stream of valid fallback locale
    let fbLocale$ = combineLatest(supportedLocales$, locale$, (supportedLocales, locale) => {
      if (supportedLocales.length > 0 && supportedLocales[0] !== locale) {
        return supportedLocales[0];
      } else if (supportedLocales.length > 1 && supportedLocales[0] === locale) {
        return supportedLocales[1];
      } else {
        return null;
      }
    });

    this.package$ = locale$.pipe(switchMap(locale => this.getTranslationPackage(locale)));

    // Setup the fallback package stream
    let fbPackageTemp$ = fbLocale$.pipe(switchMap((fbLocale) => {
      return fbLocale ? this.getTranslationPackage(fbLocale) : of({});
    }));

    // The real fallback stream is a combination of the latest package and fallback package
    this.fbPackage$ = combineLatest(this.package$, fbPackageTemp$, (pkg, fbPkg) => {
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
        .getTranslationPackage(locale).pipe(
          publishReplay(1),
          refCount()
        );
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
        .getSupportedLocales().pipe(
          map(sl => sl.map(locale => locale.toLowerCase())),
          publishReplay(1),
          refCount()
        );
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
    return this.package$.pipe(
      switchMap(pkg => pkg[key] ? of(pkg) : this.fbPackage$),
      map(pkg => pkg[key] ? this.parser.parse(pkg[key], ...args) : key)
    );
  }

  // alias for localize
  loc(key: string, ...args: string[]): Observable<string> {
    return this.localize(key, ...args);
  }

  getNavigatorLang(): string {
    let lang = '';
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      const nav = window.navigator;
      if (nav['languages'] && nav['languages'].length > 0) {
        lang = nav['languages'][0];
      } else {
        lang = nav['language'] || nav['browserLanguage'];
      }
    }
    return lang || 'en-US';
  }
}
