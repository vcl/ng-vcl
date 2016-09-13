var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core', 'rxjs/Observable', 'rxjs/add/observable/of'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var Observable_1 = require('rxjs/Observable');
    require('rxjs/add/observable/of');
    ;
    exports.L10N_LOADER_CONFIG = new core_1.OpaqueToken('l10n.loader.config');
    var L10nLoaderService = (function () {
        function L10nLoaderService() {
        }
        L10nLoaderService.prototype.getSupportedLocales = function () {
            return Observable_1.Observable.of([]);
        };
        return L10nLoaderService;
    }());
    exports.L10nLoaderService = L10nLoaderService;
    var L10nStaticLoaderService = (function (_super) {
        __extends(L10nStaticLoaderService, _super);
        function L10nStaticLoaderService(config) {
            _super.call(this);
            this.config = config;
        }
        L10nStaticLoaderService.prototype.flatten = function (locale, data) {
            var pkg = {};
            Object.keys(data).forEach(function (key) {
                if (data[key] && data[key][locale]) {
                    pkg[key] = data[key][locale];
                }
            });
            return pkg;
        };
        L10nStaticLoaderService.prototype.getSupportedLocales = function () {
            var _this = this;
            var supportedLocales = [];
            Object.keys(this.config).forEach(function (key) {
                if (_this.config[key]) {
                    Object.keys(_this.config[key]).forEach(function (locale) {
                        supportedLocales.push(locale);
                    });
                }
            });
            // unique
            return Observable_1.Observable.of(Array.from(new Set(supportedLocales)));
        };
        L10nStaticLoaderService.prototype.getTranslationPackage = function (locale) {
            var pkg = this.flatten(locale, this.config);
            return Observable_1.Observable.of(pkg);
        };
        L10nStaticLoaderService.decorators = [
            { type: core_1.Injectable },
        ];
        /** @nocollapse */
        L10nStaticLoaderService.ctorParameters = [
            { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.L10N_LOADER_CONFIG,] },] },
        ];
        return L10nStaticLoaderService;
    }(L10nLoaderService));
    exports.L10nStaticLoaderService = L10nStaticLoaderService;
    var L10nNoopLoaderService = (function (_super) {
        __extends(L10nNoopLoaderService, _super);
        function L10nNoopLoaderService() {
            _super.apply(this, arguments);
        }
        L10nNoopLoaderService.prototype.getTranslationPackage = function (locale) {
            return Observable_1.Observable.of({});
        };
        L10nNoopLoaderService.decorators = [
            { type: core_1.Injectable },
        ];
        /** @nocollapse */
        L10nNoopLoaderService.ctorParameters = [];
        return L10nNoopLoaderService;
    }(L10nLoaderService));
    exports.L10nNoopLoaderService = L10nNoopLoaderService;
});
