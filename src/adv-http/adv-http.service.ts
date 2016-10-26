import { Observable } from 'rxjs/Observable';
import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import { Subscription } from 'rxjs/Subscription';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retryWhen';
import { Response, Request, RequestOptions, ConnectionBackend, RequestOptionsArgs, Http } from '@angular/http';
import { Injectable, OpaqueToken, Inject } from '@angular/core';

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

  transform(req$: Observable<Response>, errorStrategy?: ErrorHandlingStrategy | string): Observable<Response> {
    // errorStrategy = errorStrategy || this.config.defaultErrorHandlingStrategy || ErrorHandlingStrategy.default;
    errorStrategy = errorStrategy || ErrorHandlingStrategy.default;

    if (errorStrategy && (errorStrategy === ErrorHandlingStrategy.notify || typeof errorStrategy === 'string')) {
      // Catch an error...
      req$ = req$.catch(err => {
        // ... and just pass it to the error handler
        // The error is rethrown so it can be catched
        if (errorStrategy === ErrorHandlingStrategy.notify) {
          this.notify(err);
        } else {
          if (!this[errorStrategy]) {
            throw 'Error handling strategy not found: ' + errorStrategy;
          }
          this[errorStrategy]();
        }
        return Observable.throw(err);
      });
    } else if (errorStrategy && errorStrategy === ErrorHandlingStrategy.retry) {
      req$ = req$.retryWhen(errors => {
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
    return req$;
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
    return this.errorHandler.transform(super.request(url, options), errorStrategy);
  };

  get(url: string, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response> {
    return this.errorHandler.transform(super.get(url, options), errorStrategy);
  };

  post(url: string, body: any, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response> {
    return this.errorHandler.transform(super.post(url, body, options), errorStrategy);
  };

  put(url: string, body: any, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response> {
    return this.errorHandler.transform(super.put(url, body, options), errorStrategy);
  };

  delete (url: string, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response> {
    return this.errorHandler.transform(super.delete(url, options), errorStrategy);
  };
  patch(url: string, body: any, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response> {
    return this.errorHandler.transform(super.patch(url, body, options), errorStrategy);
  };

  head(url: string, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response> {
    return this.errorHandler.transform(super.head(url, options), errorStrategy);
  };

  options(url: string, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response> {
    return this.errorHandler.transform(super.options(url, options), errorStrategy);
  };
}
