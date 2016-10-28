"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('rxjs/Observable');
var ReplaySubject_1 = require('rxjs/ReplaySubject');
require('rxjs/add/operator/publishReplay');
require('rxjs/add/operator/publish');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/retryWhen');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
/**
 *  Data caching
 */
var SyncableObservable = (function (_super) {
    __extends(SyncableObservable, _super);
    function SyncableObservable(source) {
        _super.call(this);
        this.source = source;
    }
    SyncableObservable.prototype._subscribe = function (subscriber) {
        return this.getDataSubject().subscribe(subscriber);
    };
    SyncableObservable.prototype.getDataSubject = function () {
        var subject = this._dataSubject;
        if (!subject) {
            this._dataSubject = new ReplaySubject_1.ReplaySubject(1);
        }
        return this._dataSubject;
    };
    SyncableObservable.prototype.sync = function () {
        var _this = this;
        var dataSubject = this.getDataSubject();
        if (this.sub) {
            this.sub.unsubscribe();
        }
        var sync$ = new Observable_1.Observable(function (observer) {
            var httpSub = _this.source.subscribe(function (data) {
                dataSubject.next(data);
                observer.next(data);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
            return function () {
                httpSub.unsubscribe();
            };
        }).publish();
        this.sub = sync$.connect();
        return sync$;
    };
    return SyncableObservable;
}(Observable_1.Observable));
exports.SyncableObservable = SyncableObservable;
Observable_1.Observable.prototype.syncable = function () {
    return new SyncableObservable(this);
};
/**
 *  Error handling
 */
(function (ErrorHandlingStrategy) {
    ErrorHandlingStrategy[ErrorHandlingStrategy["default"] = 0] = "default";
    ErrorHandlingStrategy[ErrorHandlingStrategy["retry"] = 1] = "retry";
    ErrorHandlingStrategy[ErrorHandlingStrategy["notify"] = 2] = "notify";
})(exports.ErrorHandlingStrategy || (exports.ErrorHandlingStrategy = {}));
var ErrorHandlingStrategy = exports.ErrorHandlingStrategy;
exports.ADV_HTTP_CONFIG = new core_1.OpaqueToken('adv.http.config');
var ErrorHandlerService = (function () {
    function ErrorHandlerService() {
    }
    ErrorHandlerService.prototype.notify = function (err) {
        console.log(err);
    };
    ErrorHandlerService.prototype.retry = function (err, retry, abort) {
        this.notify(err);
        abort();
    };
    ErrorHandlerService.prototype.transform = function (req$, errorStrategy) {
        var _this = this;
        // errorStrategy = errorStrategy || this.config.defaultErrorHandlingStrategy || ErrorHandlingStrategy.default;
        errorStrategy = errorStrategy || ErrorHandlingStrategy.default;
        if (errorStrategy && (errorStrategy === ErrorHandlingStrategy.notify || typeof errorStrategy === 'string')) {
            // Catch an error...
            req$ = req$.catch(function (err) {
                // ... and just pass it to the error handler
                // The error is rethrown so it can be catched
                if (errorStrategy === ErrorHandlingStrategy.notify) {
                    _this.notify(err);
                }
                else {
                    if (!_this[errorStrategy]) {
                        throw 'Error handling strategy not found: ' + errorStrategy;
                    }
                    _this[errorStrategy]();
                }
                return Observable_1.Observable.throw(err);
            });
        }
        else if (errorStrategy && errorStrategy === ErrorHandlingStrategy.retry) {
            req$ = req$.retryWhen(function (errors) {
                return errors.switchMap(function (err) {
                    return new Observable_1.Observable(function (observer) {
                        _this.retry(err, function () {
                            observer.next();
                        }, function () {
                            observer.error(err);
                        });
                    });
                });
            });
        }
        return req$;
    };
    ErrorHandlerService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ErrorHandlerService.ctorParameters = [];
    return ErrorHandlerService;
}());
exports.ErrorHandlerService = ErrorHandlerService;
var AdvHttp = (function (_super) {
    __extends(AdvHttp, _super);
    function AdvHttp(config, errorHandler, _backend, _defaultOptions) {
        _super.call(this, _backend, _defaultOptions);
        this.config = config;
        this.errorHandler = errorHandler;
    }
    AdvHttp.prototype.request = function (url, options, errorStrategy) {
        return this.errorHandler.transform(_super.prototype.request.call(this, url, options), errorStrategy);
    };
    ;
    AdvHttp.prototype.get = function (url, options, errorStrategy) {
        return this.errorHandler.transform(_super.prototype.get.call(this, url, options), errorStrategy);
    };
    ;
    AdvHttp.prototype.post = function (url, body, options, errorStrategy) {
        return this.errorHandler.transform(_super.prototype.post.call(this, url, body, options), errorStrategy);
    };
    ;
    AdvHttp.prototype.put = function (url, body, options, errorStrategy) {
        return this.errorHandler.transform(_super.prototype.put.call(this, url, body, options), errorStrategy);
    };
    ;
    AdvHttp.prototype.delete = function (url, options, errorStrategy) {
        return this.errorHandler.transform(_super.prototype.delete.call(this, url, options), errorStrategy);
    };
    ;
    AdvHttp.prototype.patch = function (url, body, options, errorStrategy) {
        return this.errorHandler.transform(_super.prototype.patch.call(this, url, body, options), errorStrategy);
    };
    ;
    AdvHttp.prototype.head = function (url, options, errorStrategy) {
        return this.errorHandler.transform(_super.prototype.head.call(this, url, options), errorStrategy);
    };
    ;
    AdvHttp.prototype.options = function (url, options, errorStrategy) {
        return this.errorHandler.transform(_super.prototype.options.call(this, url, options), errorStrategy);
    };
    ;
    AdvHttp.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AdvHttp.ctorParameters = [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.ADV_HTTP_CONFIG,] },] },
        { type: ErrorHandlerService, },
        { type: http_1.ConnectionBackend, },
        { type: http_1.RequestOptions, },
    ];
    return AdvHttp;
}(http_1.Http));
exports.AdvHttp = AdvHttp;
