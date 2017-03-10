import { Inject, Injectable, OpaqueToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export interface TranslationPackage {
  [key: string]: string;
};

export let L10N_LOADER_CONFIG = new OpaqueToken('l10n.loader.config');

export interface L10nLoaderConfig {
  [key: string]: any;
}

export abstract class L10nLoaderService {

  /**
   * Return a TranslationPackage as an Observable.
   * May emit new values over time
   */
  abstract getTranslationPackage(locale: string): Observable<TranslationPackage>

  getSupportedLocales(): Observable<string[]> {
    return Observable.of([]);
  }
}


@Injectable()
export class L10nStaticLoaderService extends L10nLoaderService {
    constructor(
      @Inject(L10N_LOADER_CONFIG)
      protected config: any // TODO: L10nLoaderConfig - problem with ngc
    ) {
      super();
    }
  flatten(locale: string, data): TranslationPackage {
    let pkg = {};
    Object.keys(data).forEach(key => {
      if (data[key] && data[key][locale]) {
        pkg[key] = data[key][locale];
      }
    });
    return pkg;
  }

  getSupportedLocales(): Observable<string[]> {
    let supportedLocales: string[] = [];
    Object.keys(this.config).forEach(key => {
      if (this.config[key]) {
        Object.keys(this.config[key]).forEach(locale => {
          supportedLocales.push(locale);
        });
      }
    });
    // unique
    supportedLocales = Array.from(new Set(supportedLocales));
    return Observable.of(supportedLocales);
  }

  getTranslationPackage(locale: string) {
    let pkg = this.flatten(locale, this.config);
    return Observable.of(pkg);
  }
}


@Injectable()
export class L10nNoopLoaderService extends L10nLoaderService {
  getTranslationPackage(locale: string) {
    return Observable.of({});
  }
}
