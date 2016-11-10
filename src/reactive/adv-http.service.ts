import { Observable } from 'rxjs/Observable';
import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import { Subscription } from 'rxjs/Subscription';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/let';
import { Response, Request, RequestOptions, ConnectionBackend, RequestOptionsArgs, Http, HttpModule, XHRBackend } from '@angular/http';
import { Injectable, OpaqueToken, Inject, NgModule, Type, ModuleWithProviders } from '@angular/core';

/**
 *  Data caching
 */
export class SyncableObservable<T> extends Observable<T> {
  protected _dataSubject: Subject<T>;
  protected sub: Subscription;

  constructor(protected source: Observable<T>) {
    super();
  }

  protected _subscribe(subscriber: Subscriber<T>) {
    return this.getDataSubject().subscribe(subscriber);
  }

  protected getDataSubject(): Subject<T> {
    const subject = this._dataSubject;
    if (!subject) {
      this._dataSubject = new ReplaySubject(1);
    }
    return this._dataSubject;
  }

  sync(): ConnectableObservable<T> {
    const dataSubject = this.getDataSubject();

    if (this.sub) {
      this.sub.unsubscribe();
    }

    const sync$ = new Observable(observer => {
      const httpSub = this.source.subscribe(data => {
        dataSubject.next(data);
        observer.next(data);
        observer.complete();
      }, err => {
        observer.error(err);
      });

      return () => {
        httpSub.unsubscribe();
      };
    }).publish();

    this.sub = sync$.connect();

    return sync$;
  }
}

// tslint:disable-next-line:only-arrow-functions
Observable.prototype.syncable = function() {
  return new SyncableObservable(this);
};

declare module 'rxjs/Observable' {
  interface Observable<T> {
    syncable: { (): SyncableObservable<T> };
  }
}

/**
 *  Error handling
 */

export enum ErrorHandlingStrategy {
  default,
  retry,
  notify
}

declare module 'rxjs/Observable' {
  interface Observable<T> {
    handleError: { (errorHandlingStrategy: ErrorHandlingStrategy | string): Observable<T> };
  }
}

export const ADV_HTTP_CONFIG = new OpaqueToken('adv.http.config');

@Injectable()
export class ErrorHandlerService {

  notify(err: any) {
    console.log(err);
  }

  retry(err: any, retry: Function, abort: Function) {
    this.notify(err);
    abort();
  }

  attach(source: Observable<any>, errorHandlingStrategy: ErrorHandlingStrategy | string) {
    // errorStrategy = errorStrategy || this.config.defaultErrorHandlingStrategy || ErrorHandlingStrategy.default;
    errorHandlingStrategy = errorHandlingStrategy || ErrorHandlingStrategy.default;

    if (errorHandlingStrategy && (errorHandlingStrategy === ErrorHandlingStrategy.notify || typeof errorHandlingStrategy === 'string')) {
      // Catch an error...
      source = source.catch(err => {
        // ... and just pass it to the error handler
        // The error is rethrown so it can be catched
        if (errorHandlingStrategy === ErrorHandlingStrategy.notify) {
          this.notify(err);
        } else {
          if (!this[errorHandlingStrategy]) {
            throw 'Error handling strategy not found: ' + errorHandlingStrategy;
          }
          this[errorHandlingStrategy]();
        }
        return Observable.throw(err);
      });
    } else if (errorHandlingStrategy && errorHandlingStrategy === ErrorHandlingStrategy.retry) {
      source = source.retryWhen(errors => {
        return errors.switchMap(err => {
          return new Observable<any>(observer => {
            this.retry(err, () => {
              observer.next();
            }, () => {
              observer.error(err);
            });
          });
        });
      });
    }
    return source;
  }
}

export interface AdvHttpConfig {
  defaultErrorHandlingStrategy: ErrorHandlingStrategy;
}

@Injectable()
export class AdvHttp extends Http {

  constructor(
    @Inject(ADV_HTTP_CONFIG)
    private config: AdvHttpConfig,
    private errorHandler: ErrorHandlerService,
    _backend: ConnectionBackend,
    _defaultOptions: RequestOptions) {
    super(_backend, _defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response> {
    return super.request(url, options).let(o => this.errorHandler.attach(o, errorStrategy || this.config.defaultErrorHandlingStrategy));
  };

  get(url: string, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response> {
    return super.get(url, options).let(o => this.errorHandler.attach(o, errorStrategy || this.config.defaultErrorHandlingStrategy));
  };

  post(url: string, body: any, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response> {
    return super.post(url, body, options).let(o => this.errorHandler.attach(o, errorStrategy || this.config.defaultErrorHandlingStrategy));
  };

  put(url: string, body: any, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response> {
    return super.put(url, body, options).let(o => this.errorHandler.attach(o, errorStrategy || this.config.defaultErrorHandlingStrategy));
  };

  delete (url: string, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response> {
    return super.delete(url, options).let(o => this.errorHandler.attach(o, errorStrategy || this.config.defaultErrorHandlingStrategy));
  };
  patch(url: string, body: any, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response> {
    return super.patch(url, body, options).let(o => this.errorHandler.attach(o, errorStrategy || this.config.defaultErrorHandlingStrategy));
  };

  head(url: string, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response> {
    return super.head(url, options).let(o => this.errorHandler.attach(o, errorStrategy || this.config.defaultErrorHandlingStrategy));
  };

  options(url: string, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response> {
    return super.options(url, options).let(o => this.errorHandler.attach(o, errorStrategy || this.config.defaultErrorHandlingStrategy));
  };
}

export declare interface AdvHttpConfig {
  errorHandlerService?: Type<any>;
  defaultErrorHandlingStrategy: ErrorHandlingStrategy;
}


@NgModule({
  imports: [HttpModule],
  providers: [
    {
      provide: ADV_HTTP_CONFIG,
      useValue: {}
    },
    AdvHttp,
    {
      provide: ErrorHandlerService,
      useClass: ErrorHandlerService
    },
    {
      provide: AdvHttp,
      useFactory: (config: any, errorHandler: ErrorHandlerService, backend: XHRBackend, defaultOptions: RequestOptions) => {
        return new AdvHttp(config, errorHandler, backend, defaultOptions);
      },
      deps: [ ADV_HTTP_CONFIG, ErrorHandlerService, XHRBackend, RequestOptions]
    },
    {
      provide: ADV_HTTP_CONFIG,
      useValue: {}
    }
  ]
})
export class AdvHttpModule { 
  static forRoot(config: AdvHttpConfig): ModuleWithProviders {
    return {
      ngModule: AdvHttpModule,
      providers: [
        {
          provide: ADV_HTTP_CONFIG,
          useValue: config
        },
        AdvHttp,
        {
          provide: ErrorHandlerService,
          useClass: config.errorHandlerService || ErrorHandlerService
        },
        {
          provide: AdvHttp,
          useFactory: (config: any, errorHandler: ErrorHandlerService, backend: XHRBackend, defaultOptions: RequestOptions) => {
            return new AdvHttp(config, errorHandler, backend, defaultOptions);
          },
          deps: [ ADV_HTTP_CONFIG, ErrorHandlerService, XHRBackend, RequestOptions]
        },
      ]
    };
  }
}
