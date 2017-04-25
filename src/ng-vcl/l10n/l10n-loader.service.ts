import { Inject, Injectable, OpaqueToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

export interface TranslationPackage {
  [key: string]: string;
}

export interface TranslationPackageGroup {
  [key: string]: {
    [locale: string]: string;
  };
}

export let L10N_LOADER_CONFIG = new OpaqueToken('l10n.loader.config');

export abstract class L10nLoaderService {

  /**
   * Return a TranslationPackage as a stream.
   * May emit new values over time
   */
  abstract getTranslationPackage(locale: string): Observable<TranslationPackage>;
  abstract getSupportedLocales(): Observable<string[]>;
}

function extractLocales(group: TranslationPackageGroup) {
  let supportedLocales: string[] = [];
  Object.keys(group).forEach(key => {
    if (group[key]) {
      Object.keys(group[key]).forEach(locale => {
        supportedLocales.push(locale);
      });
    }
  });
  // unique
  return Array.from(new Set(supportedLocales));
}

function flatten(locale: string, group: TranslationPackageGroup): TranslationPackage {
  const pkg = {};
  Object.keys(group).forEach(key => {
    if (group[key] && group[key][locale]) {
      pkg[key] = group[key][locale];
    }
  });
  return pkg;
}

@Injectable()
export class L10nStaticLoaderService extends L10nLoaderService {
  constructor(
    @Inject(L10N_LOADER_CONFIG)
    private config: TranslationPackageGroup
  ) {
    super();
  }

  getTranslationPackage(locale: string): Observable<TranslationPackage> {
    return Observable.of(flatten(locale, this.config));
  }

  getSupportedLocales(): Observable<string[]> {
    return Observable.of(extractLocales(this.config));
  }
}

@Injectable()
export class L10nAsyncLoaderService extends L10nLoaderService {
  private data$: Observable<TranslationPackageGroup>;
  constructor(
    @Inject(L10N_LOADER_CONFIG)
    private config: any
  ) {
    super();
    let streamlike: Observable<TranslationPackageGroup>;
    if (typeof config === 'function') {
      streamlike = config();
    } else {
      streamlike = Observable.from(config);
    }
    // Enable caching
    this.data$ = streamlike.publishReplay(1).refCount();
  }

  getTranslationPackage(locale: string): Observable<TranslationPackage> {
    return this.data$.map(data => flatten(locale, data));
  }

  getSupportedLocales(): Observable<string[]> {
    return this.data$.map(data => extractLocales(data));
  }
}

@Injectable()
export class L10nNoopLoaderService extends L10nLoaderService {
  getTranslationPackage(locale: string): Observable<TranslationPackage> {
    return Observable.of({});
  }

  getSupportedLocales(): Observable<string[]> {
    return Observable.of([]);
  }
}
