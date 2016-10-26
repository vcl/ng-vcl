/// <reference types="core-js" />
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retryWhen';
import { Response, Request, RequestOptions, ConnectionBackend, RequestOptionsArgs, Http } from '@angular/http';
import { OpaqueToken } from '@angular/core';
declare module 'rxjs/Observable' {
    interface Observable<T> {
        syncable: Function;
    }
}
/**
 *  Error handling
 */
export declare enum ErrorHandlingStrategy {
    default = 0,
    retry = 1,
    notify = 2,
}
export declare const ADV_HTTP_CONFIG: OpaqueToken;
export declare class ErrorHandlerService {
    notify(err: any): void;
    retry(err: any, retry: Function, abort: Function): void;
    transform(req$: Observable<Response>, errorStrategy?: ErrorHandlingStrategy | string): Observable<Response>;
}
export interface AdvHttpConfig {
    defaultErrorHandlingStrategy: ErrorHandlingStrategy;
}
export declare class AdvHttp extends Http {
    private config;
    private errorHandler;
    constructor(config: AdvHttpConfig, errorHandler: ErrorHandlerService, _backend: ConnectionBackend, _defaultOptions: RequestOptions);
    request(url: string | Request, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response>;
    get(url: string, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response>;
    post(url: string, body: any, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response>;
    put(url: string, body: any, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response>;
    delete(url: string, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response>;
    patch(url: string, body: any, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response>;
    head(url: string, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response>;
    options(url: string, options?: RequestOptionsArgs, errorStrategy?: ErrorHandlingStrategy): Observable<Response>;
}
