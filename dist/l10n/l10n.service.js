(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core', 'rxjs/Observable', 'rxjs/BehaviorSubject', 'rxjs/add/observable/combineLatest', 'rxjs/add/operator/combineLatest', 'rxjs/add/operator/map', 'rxjs/add/operator/switchMap', 'rxjs/add/operator/publishLast', './l10n-loader.service', './l10n-parser.service'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var Observable_1 = require('rxjs/Observable');
    var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
    require('rxjs/add/observable/combineLatest');
    require('rxjs/add/operator/combineLatest');
    require('rxjs/add/operator/map');
    require('rxjs/add/operator/switchMap');
    require('rxjs/add/operator/publishLast');
    var l10n_loader_service_1 = require('./l10n-loader.service');
    var l10n_parser_service_1 = require('./l10n-parser.service');
    exports.L10N_CONFIG = new core_1.OpaqueToken('l10n.config');
    ;
    var L10nService = (function () {
        function L10nService(config, loader, parser) {
            var _this = this;
            this.config = config;
            this.loader = loader;
            this.parser = parser;
            this.packages = {};
            this.locale = (config.locale || this.getNavigatorLang() || 'en-us').toLowerCase();
            this.locale$ = new BehaviorSubject_1.BehaviorSubject(this.locale);
            // Initialize the streams
            var supportedLocales$ = this.getSupportedLocales();
            // Set up stream of valid locale
            var locale$ = Observable_1.Observable.combineLatest(supportedLocales$, this.locale$, function (supportedLocales, locale) {
                if (supportedLocales.length > 0) {
                    // If not supported use first locale as fallback
                    return (supportedLocales.indexOf(locale) >= 0) ? locale : supportedLocales[0];
                }
                else {
                    // If there are no supported locales, presume every locale as supported
                    return locale;
                }
            });
            // Set up stream of valid fallback locale
            var fbLocale$ = Observable_1.Observable.combineLatest(supportedLocales$, locale$, function (supportedLocales, locale) {
                if (supportedLocales.length > 0 && supportedLocales[0] !== locale) {
                    return supportedLocales[0];
                }
                else if (supportedLocales.length > 1 && supportedLocales[0] === locale) {
                    return supportedLocales[1];
                }
                else {
                    return null;
                }
            });
            this.package$ = locale$.switchMap(function (locale) { return _this.getTranslationPackage(locale); });
            var fbPackage$ = fbLocale$.switchMap(function (fbLocale) {
                return fbLocale ? _this.getTranslationPackage(fbLocale) : Observable_1.Observable.of({});
            });
            this.fbPackage$ = Observable_1.Observable.combineLatest(this.package$, fbPackage$, function (pkg, fbPkg) {
                return fbPkg ? Object.assign({}, fbPkg, pkg) : pkg;
            });
        }
        /**
        * @internal
        */
        L10nService.prototype.getTranslationPackage = function (locale) {
            // Cache package streams and share
            if (!this.packages[locale]) {
                this.packages[locale] = this.loader.getTranslationPackage(locale).publishLast().refCount();
            }
            return this.packages[locale];
        };
        /**
        * Gets supported locales
        */
        L10nService.prototype.getSupportedLocales = function () {
            // Cache supportedLocales and share
            if (!this.supportedLocales$) {
                this.supportedLocales$ = this.loader
                    .getSupportedLocales()
                    .map(function (sl) { return sl.map(function (locale) { return locale.toLowerCase(); }); })
                    .publishLast()
                    .refCount();
            }
            return this.supportedLocales$;
        };
        /**
        * Set the current locale.
        * Emits new translation values to subscribers
        * @param locale
        */
        L10nService.prototype.setLocale = function (locale) {
            this.locale = locale.toLowerCase();
            this.locale$.next(this.locale);
        };
        /**
        * Looks up the value for the provided key in the current tranlsation package.
        * Falls back to the fbLocale translation package if the key is not found.
        * @param key
        * @param params
        * @returns {Observable<string>} The translated key
        */
        L10nService.prototype.localize = function (key) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return this.package$.switchMap(function (pkg) {
                return pkg[key] ? Observable_1.Observable.of(pkg) : _this.fbPackage$;
            }).map(function (pkg) {
                return pkg[key] ? (_a = _this.parser).parse.apply(_a, [pkg[key]].concat(args)) : key;
                var _a;
            });
        };
        // alias for localize
        L10nService.prototype.loc = function (key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return this.localize.apply(this, [key].concat(args));
        };
        L10nService.prototype.getNavigatorLang = function () {
            if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
                var nav = window.navigator;
                if (nav['languages'] && nav['languages'].length > 0) {
                    return nav['languages'][0];
                }
                else {
                    return nav['language'] || nav['browserLanguage'];
                }
            }
        };
        L10nService.decorators = [
            { type: core_1.Injectable },
        ];
        /** @nocollapse */
        L10nService.ctorParameters = [
            { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.L10N_CONFIG,] },] },
            { type: l10n_loader_service_1.L10nLoaderService, },
            { type: l10n_parser_service_1.L10nParserService, },
        ];
        return L10nService;
    }());
    exports.L10nService = L10nService;
});
