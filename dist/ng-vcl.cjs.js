'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _angular_core = require('@angular/core');
var rxjs_Observable = require('rxjs/Observable');
var _angular_common = require('@angular/common');
var _angular_forms = require('@angular/forms');
var rxjs_add_observable_of = require('rxjs/add/observable/of');
var rxjs_BehaviorSubject = require('rxjs/BehaviorSubject');
var rxjs_add_observable_combineLatest = require('rxjs/add/observable/combineLatest');
var rxjs_add_operator_combineLatest = require('rxjs/add/operator/combineLatest');
var rxjs_add_operator_map = require('rxjs/add/operator/map');
var rxjs_add_operator_switchMap = require('rxjs/add/operator/switchMap');
var rxjs_add_operator_publishLast = require('rxjs/add/operator/publishLast');
var hammerjs = require('hammerjs');
var Tether = require('tether');
var rxjs_Subject = require('rxjs/Subject');
var _angular_router = require('@angular/router');
var rxjs_ReplaySubject = require('rxjs/ReplaySubject');
var rxjs_add_operator_publishReplay = require('rxjs/add/operator/publishReplay');
var rxjs_add_operator_publish = require('rxjs/add/operator/publish');
var rxjs_add_operator_catch = require('rxjs/add/operator/catch');
var rxjs_add_operator_retryWhen = require('rxjs/add/operator/retryWhen');
var rxjs_add_operator_let = require('rxjs/add/operator/let');
var rxjs_add_observable_throw = require('rxjs/add/observable/throw');
var _angular_http = require('@angular/http');
var rxjs_add_operator_filter = require('rxjs/add/operator/filter');
var rxjs_observable_merge = require('rxjs/observable/merge');
var rxjs_add_operator_scan = require('rxjs/add/operator/scan');
var rxjs_add_operator_pluck = require('rxjs/add/operator/pluck');
var rxjs_add_operator_distinctUntilChanged = require('rxjs/add/operator/distinctUntilChanged');
var rxjs_add_operator_withLatestFrom = require('rxjs/add/operator/withLatestFrom');

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

var InputComponent = (function () {
    function InputComponent(elRef) {
        this.elRef = elRef;
        this.valueType = null;
        this.typedValue = null;
        this._typedValueChange = new _angular_core.EventEmitter();
        this.selectAllOnFocus = false;
    }
    Object.defineProperty(InputComponent.prototype, "typedValueChange", {
        get: function () {
            return this._typedValueChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    InputComponent.prototype.ngOnInit = function () { };
    InputComponent.prototype.onChange = function (value) {
        this._typedValueChange.emit(this.toType(value));
    };
    InputComponent.prototype.toType = function (value) {
        if (this.valueType === 'number') {
            var tValue = Number(value);
            return isNaN(tValue) ? 0 : tValue;
        }
        else {
            return value;
        }
    };
    InputComponent.prototype.onFocus = function (value) {
        if (this.selectAllOnFocus) {
            if (this.elRef && this.elRef.nativeElement) {
                this.elRef.nativeElement.select();
            }
        }
    };
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], InputComponent.prototype, "valueType", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], InputComponent.prototype, "typedValue", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', (typeof (_a = typeof rxjs_Observable.Observable !== 'undefined' && rxjs_Observable.Observable) === 'function' && _a) || Object)
    ], InputComponent.prototype, "typedValueChange", null);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], InputComponent.prototype, "selectAllOnFocus", void 0);
    __decorate([
        _angular_core.HostListener('input', ['$event.target.value']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], InputComponent.prototype, "onChange", null);
    __decorate([
        _angular_core.HostListener('focus', ['$event.target.value']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], InputComponent.prototype, "onFocus", null);
    InputComponent = __decorate([
        _angular_core.Directive({
            selector: '[vcl-input]',
            host: {
                '[class.vclInput]': 'true',
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof _angular_core.ElementRef !== 'undefined' && _angular_core.ElementRef) === 'function' && _b) || Object])
    ], InputComponent);
    return InputComponent;
    var _a, _b;
}());

var VCLInputModule = (function () {
    function VCLInputModule() {
    }
    VCLInputModule = __decorate([
        _angular_core.NgModule({
            imports: [],
            exports: [InputComponent],
            declarations: [InputComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLInputModule);
    return VCLInputModule;
}());

var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return FlipSwitchComponent; }),
    multi: true
};
var FlipSwitchComponent = (function () {
    function FlipSwitchComponent() {
        var _this = this;
        this.value = false;
        this.toggle$ = new _angular_core.EventEmitter();
        this.toggle$.subscribe(function (newVal) {
            _this.value = newVal;
            !!_this.onChangeCallback && _this.onChangeCallback(newVal);
        });
    }
    FlipSwitchComponent.prototype.onClick = function () {
        this.value = !this.value;
        this.toggle$.emit(this.value);
    };
    FlipSwitchComponent.prototype.writeValue = function (value) {
        if (value !== this.value)
            this.value = value;
    };
    FlipSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    FlipSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        _angular_core.Input('onLabel'), 
        __metadata('design:type', String)
    ], FlipSwitchComponent.prototype, "onLabel", void 0);
    __decorate([
        _angular_core.Input('offLabel'), 
        __metadata('design:type', String)
    ], FlipSwitchComponent.prototype, "offLabel", void 0);
    __decorate([
        _angular_core.Input('value'), 
        __metadata('design:type', Boolean)
    ], FlipSwitchComponent.prototype, "value", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', Object)
    ], FlipSwitchComponent.prototype, "toggle$", void 0);
    FlipSwitchComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-flip-switch',
            template: "<div class=\"vclFlipSwitch\" [class.vclFlipSwitchPressed]=\"value\" touch-action=\"pan-y\" role=\"button\" tabindex=\"0\" aria-pressed=\"true\" aria-labelledby=\"fs-label-0\" (tap)=\"onClick()\">\n  <label class=\"vclFlipSwitchLabel\" id=\"fs-label-0\">\n    <div class=\"vclFlipSwitchTrack\">\n      <div class=\"vclFlipSwitchActive\" aria-hidden=\"false\">{{onLabel}}</div>\n      <div class=\"vclFlipSwitchInactive\" aria-hidden=\"true\">{{offLabel}}</div>\n    </div>\n    <div class=\"vclFlipSwitchKnob\"></div>\n  </label>\n</div>\n",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], FlipSwitchComponent);
    return FlipSwitchComponent;
}());

var MetalistComponent = (function () {
    function MetalistComponent() {
        this.select = new _angular_core.EventEmitter();
        this.minSelectableItems = 1;
        this.maxSelectableItems = 1;
        this.maxItemsSelected = false;
    }
    MetalistComponent.prototype.next = function () {
        var oldIndex = this.getMarkedItemIndex();
        if (oldIndex !== -1) {
            var newIndex = oldIndex + 1;
            if (this.items.length > newIndex) {
                this.setMarkedIndex(newIndex);
            }
        }
        else {
            this.setMarkedIndex(0);
        }
    };
    MetalistComponent.prototype.prev = function () {
        var oldIndex = this.getMarkedItemIndex();
        if (oldIndex !== -1) {
            var newIndex = oldIndex - 1;
            if (newIndex >= 0) {
                this.setMarkedIndex(newIndex);
            }
        }
    };
    MetalistComponent.prototype.ngOnInit = function () {
        if (!this.meta) {
            // create meta if not present
            this.meta = [];
        }
    };
    MetalistComponent.prototype.selectItem = function (item) {
        var itemIndex = this.items.indexOf(item);
        if (itemIndex === -1) {
            return;
        }
        // maxSelectableItems === 1 -> deselect old item
        if (this.maxSelectableItems === 1) {
            var metaItems = this.meta.filter(function (obj) {
                return obj && obj.selected === true;
            });
            for (var i = 0; i < metaItems.length; i++) {
                metaItems[i].selected = false;
            }
        }
        if (this.getSelectedItems().length < this.maxSelectableItems && this.meta[itemIndex]) {
            this.meta[itemIndex].selected = true;
        }
        this.select.emit(this.getSelectedItems());
    };
    MetalistComponent.prototype.deSelectItem = function (item) {
        var itemIndex = this.items.indexOf(item);
        if (itemIndex === -1) {
            return;
        }
        if (this.meta[itemIndex]) {
            this.meta[itemIndex].selected = false;
        }
        this.select.emit(this.getSelectedItems());
    };
    MetalistComponent.prototype.getSelectedItems = function () {
        var metaItems = this.meta.filter(function (obj) {
            return obj && obj.selected === true;
        });
        var result = [];
        for (var i = 0; i < metaItems.length; i++) {
            result.push(this.items[this.meta.indexOf(metaItems[i])]);
        }
        return result;
    };
    MetalistComponent.prototype.setSelectedItems = function () {
    };
    MetalistComponent.prototype.getMarkedItemIndex = function () {
        var meta = this.getMarkedItemMeta();
        if (meta) {
            return this.meta.indexOf(meta);
        }
        return -1;
    };
    MetalistComponent.prototype.getMarkedItemMeta = function () {
        return this.meta.filter(function (obj) {
            return obj && obj.marked === true;
        })[0];
    };
    MetalistComponent.prototype.setMarkedIndex = function (index) {
        // unset old item
        var oldItem = this.getMarkedItemMeta();
        if (oldItem) {
            oldItem.marked = false;
        }
        var meta = this.meta[index];
        if (meta) {
            meta.marked = true;
        }
    };
    MetalistComponent.prototype.setMarkedItem = function (item) {
        var markedIndex = this.items.indexOf(item);
        if (markedIndex !== -1) {
            this.setMarkedIndex(markedIndex);
        }
    };
    MetalistComponent.prototype.getMeta = function (item) {
        var key = this.items.indexOf(item);
        if (!this.meta[key]) {
            this.meta[key] = {};
        }
        return this.meta[key];
    };
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', Object)
    ], MetalistComponent.prototype, "select", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Array)
    ], MetalistComponent.prototype, "items", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], MetalistComponent.prototype, "meta", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], MetalistComponent.prototype, "minSelectableItems", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], MetalistComponent.prototype, "maxSelectableItems", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', Boolean)
    ], MetalistComponent.prototype, "maxItemsSelected", void 0);
    __decorate([
        _angular_core.ContentChild(_angular_core.TemplateRef), 
        __metadata('design:type', Object)
    ], MetalistComponent.prototype, "template", void 0);
    MetalistComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-metalist',
            template: "<template\n  *ngFor=\"let item of items\"\n  [ngTemplateOutlet]=\"template\"\n  [ngOutletContext]=\"{item: item, meta: getMeta(item) }\">\n</template>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], MetalistComponent);
    return MetalistComponent;
}());

var L10N_LOADER_CONFIG = new _angular_core.OpaqueToken('l10n.loader.config');
var L10nLoaderService = (function () {
    function L10nLoaderService() {
    }
    L10nLoaderService.prototype.getSupportedLocales = function () {
        return rxjs_Observable.Observable.of([]);
    };
    return L10nLoaderService;
}());
var L10nStaticLoaderService = (function (_super) {
    __extends(L10nStaticLoaderService, _super);
    function L10nStaticLoaderService(config // TODO: L10nLoaderConfig - problem with ngc
        ) {
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
        supportedLocales = Array.from(new Set(supportedLocales));
        return rxjs_Observable.Observable.of(supportedLocales);
    };
    L10nStaticLoaderService.prototype.getTranslationPackage = function (locale) {
        var pkg = this.flatten(locale, this.config);
        return rxjs_Observable.Observable.of(pkg);
    };
    L10nStaticLoaderService = __decorate([
        _angular_core.Injectable(),
        __param(0, _angular_core.Inject(L10N_LOADER_CONFIG)), 
        __metadata('design:paramtypes', [Object])
    ], L10nStaticLoaderService);
    return L10nStaticLoaderService;
}(L10nLoaderService));
var L10nNoopLoaderService = (function (_super) {
    __extends(L10nNoopLoaderService, _super);
    function L10nNoopLoaderService() {
        _super.apply(this, arguments);
    }
    L10nNoopLoaderService.prototype.getTranslationPackage = function (locale) {
        return rxjs_Observable.Observable.of({});
    };
    L10nNoopLoaderService = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [])
    ], L10nNoopLoaderService);
    return L10nNoopLoaderService;
}(L10nLoaderService));

var L10nParserService = (function () {
    function L10nParserService() {
    }
    return L10nParserService;
}());
var L10nFormatParserService = (function (_super) {
    __extends(L10nFormatParserService, _super);
    function L10nFormatParserService() {
        _super.apply(this, arguments);
    }
    L10nFormatParserService.prototype.parse = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.replace(/{(\d+)}/g, function (match, idx) {
            return typeof args[idx] === 'string' ? args[idx] : match;
        });
    };
    L10nFormatParserService = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [])
    ], L10nFormatParserService);
    return L10nFormatParserService;
}(L10nParserService));

var L10N_CONFIG = new _angular_core.OpaqueToken('l10n.config');

var L10nService = (function () {
    function L10nService(config, // TODO: L10nConfig - problem with ngc
        loader, parser) {
        var _this = this;
        this.config = config;
        this.loader = loader;
        this.parser = parser;
        this.packages = {};
        this.locale = (config.locale || this.getNavigatorLang() || 'en-us').toLowerCase();
        this._locale$ = new rxjs_BehaviorSubject.BehaviorSubject(this.locale);
        // Initialize the streams
        var supportedLocales$ = this.getSupportedLocales();
        // Set up stream of valid locale
        var locale$ = rxjs_Observable.Observable.combineLatest(supportedLocales$, this.locale$, function (supportedLocales, locale) {
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
        var fbLocale$ = rxjs_Observable.Observable.combineLatest(supportedLocales$, locale$, function (supportedLocales, locale) {
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
        // Setup the fallback package stream
        var fbPackageTemp$ = fbLocale$.switchMap(function (fbLocale) {
            return fbLocale ? _this.getTranslationPackage(fbLocale) : rxjs_Observable.Observable.of({});
        });
        // The real fallback stream is a combination of the latest package and fallback package 
        this.fbPackage$ = rxjs_Observable.Observable.combineLatest(this.package$, fbPackageTemp$, function (pkg, fbPkg) {
            return fbPkg ? Object.assign({}, fbPkg, pkg) : pkg;
        });
    }
    Object.defineProperty(L10nService.prototype, "locale$", {
        get: function () {
            return this._locale$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
    * @internal
    */
    L10nService.prototype.getTranslationPackage = function (locale) {
        // Cache package streams and share
        if (!this.packages[locale]) {
            this.packages[locale] = this.loader
                .getTranslationPackage(locale)
                .publishReplay(1)
                .refCount();
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
                .publishReplay(1)
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
        this._locale$.next(this.locale);
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
            return pkg[key] ? rxjs_Observable.Observable.of(pkg) : _this.fbPackage$;
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
    L10nService = __decorate([
        _angular_core.Injectable(),
        __param(0, _angular_core.Inject(L10N_CONFIG)), 
        __metadata('design:paramtypes', [Object, (typeof (_a = typeof L10nLoaderService !== 'undefined' && L10nLoaderService) === 'function' && _a) || Object, (typeof (_b = typeof L10nParserService !== 'undefined' && L10nParserService) === 'function' && _b) || Object])
    ], L10nService);
    return L10nService;
    var _a, _b;
}());

var L10nPipe = (function () {
    function L10nPipe(l10n) {
        this.l10n = l10n;
        this.args = [];
    }
    // Check if key and args match
    L10nPipe.prototype.compare = function (key) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return key === this.key &&
            args.length === this.args.length &&
            args.every(function (v, idx) { return v === _this.args[idx]; });
    };
    L10nPipe.prototype.transform = function (key) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // Dispose subscription if key or params are different
        if (!this.compare.apply(this, [key].concat(args)) && this.subscription) {
            this._dispose();
        }
        // store key and args for comparison
        this.key = key;
        this.args = args;
        if (!this.subscription) {
            this.subscription = (_a = this.l10n).localize.apply(_a, [key].concat(args)).subscribe(function (value) {
                _this.value = value;
            });
        }
        return this.value;
        var _a;
    };
    L10nPipe.prototype._dispose = function () {
        this.subscription.unsubscribe();
        this.value = null;
        this.subscription = null;
    };
    L10nPipe.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this._dispose();
        }
    };
    L10nPipe = __decorate([
        _angular_core.Pipe({
            name: 'loc',
            pure: false
        }),
        __param(0, _angular_core.Optional()), 
        __metadata('design:paramtypes', [(typeof (_a = typeof L10nService !== 'undefined' && L10nService) === 'function' && _a) || Object])
    ], L10nPipe);
    return L10nPipe;
    var _a;
}());

var L10nModule = (function () {
    function L10nModule() {
    }
    L10nModule.forRoot = function (config) {
        return {
            ngModule: L10nModule,
            providers: [
                L10nService,
                {
                    provide: L10N_CONFIG,
                    useValue: config.config || {}
                },
                {
                    provide: L10nLoaderService,
                    useClass: config.loader
                }, {
                    provide: L10N_LOADER_CONFIG,
                    useValue: config.loaderConfig || {}
                }, {
                    provide: L10nParserService,
                    useClass: config.parser || L10nFormatParserService
                }
            ]
        };
    };
    L10nModule = __decorate([
        _angular_core.NgModule({
            imports: [],
            declarations: [
                L10nPipe
            ],
            exports: [
                L10nPipe
            ],
            providers: [
                // TODO: Remove provider. Should work when marked optional in pipe
                // not sure why it isn't
                {
                    provide: L10N_CONFIG,
                    useValue: {}
                },
                L10nService,
                {
                    provide: L10nLoaderService,
                    useClass: L10nNoopLoaderService
                },
                {
                    provide: L10N_LOADER_CONFIG,
                    useValue: {}
                },
                {
                    provide: L10nParserService,
                    useClass: L10nFormatParserService
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], L10nModule);
    return L10nModule;
}());

var VCLMetalistModule = (function () {
    function VCLMetalistModule() {
    }
    VCLMetalistModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, L10nModule],
            exports: [MetalistComponent],
            declarations: [MetalistComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLMetalistModule);
    return VCLMetalistModule;
}());

var VCLFlipSwitchModule = (function () {
    function VCLFlipSwitchModule() {
    }
    VCLFlipSwitchModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, L10nModule, VCLMetalistModule],
            exports: [FlipSwitchComponent],
            declarations: [FlipSwitchComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLFlipSwitchModule);
    return VCLFlipSwitchModule;
}());

var IconService = (function () {
    function IconService() {
    }
    // A default name resolver following the CSS class name conventions of
    // the well-known Font Awesome icon font. Bascially it translates
    // `fa:user` into `fa fa-user`
    IconService.prototype.defaultNameResolver = function (icon) {
        var iconParts = icon.split(':');
        if (iconParts.length > 1) {
            var setName = iconParts[0];
            iconParts.shift();
            var iconClasses = iconParts.join(" " + setName + "-");
            return setName + " " + setName + "-" + iconClasses;
        }
        else {
            return icon;
        }
    };
    IconService.prototype.lookup = function (icon) {
        if (typeof icon === 'string' && icon) {
            var iconName = icon;
            var providerName = void 0;
            // Split on first : occurrence
            var iconParts = iconName.split(/:(.+)?/);
            if (iconParts.length === 0) {
                return icon;
            }
            else {
                providerName = iconParts[0];
                // TODO: for now, just hardcode to default resolver, later we need
                // a mapping between the provider and the resolver or each font
                // brings its own resolver.
                providerName = 'defaultNameResolver';
                return this[providerName](iconName);
            }
        }
        return icon;
    };
    IconService = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [])
    ], IconService);
    return IconService;
}());

var IconComponent = (function () {
    function IconComponent(_iconService) {
        this._iconService = _iconService;
    }
    Object.defineProperty(IconComponent.prototype, "mergedIconClass", {
        get: function () {
            var fontIconClass = this.icon ? this._iconService.lookup(this.icon) : '';
            return "vclIcon " + fontIconClass + " " + (this.iconClass || '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "isAriaHidden", {
        // Do not hide from aria when a label is provided
        get: function () {
            return !this.label;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "src", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "svguse", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "iconClass", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "icon", void 0);
    __decorate([
        _angular_core.HostBinding('attr.aria-label'),
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "label", void 0);
    __decorate([
        _angular_core.HostBinding('attr.role'),
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "ariaRole", void 0);
    __decorate([
        _angular_core.HostBinding('class'), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "mergedIconClass", null);
    __decorate([
        _angular_core.HostBinding('attr.aria-hidden'), 
        __metadata('design:type', Object)
    ], IconComponent.prototype, "isAriaHidden", null);
    IconComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-icon, [vcl-icon]',
            template: "<ng-content></ng-content>\n<img *ngIf=\"src\" src=\"{{src}}\">\n<svg *ngIf=\"svguse\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n  <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" attr.xlink:href=\"{{svguse}}\"></use>\n</svg>\n",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
            host: {
                '[class.vclIcon]': 'true',
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof IconService !== 'undefined' && IconService) === 'function' && _a) || Object])
    ], IconComponent);
    return IconComponent;
    var _a;
}());

var VCLIconModule = (function () {
    function VCLIconModule() {
    }
    VCLIconModule.forRoot = function (config) {
        return {
            ngModule: VCLIconModule,
            providers: [
                {
                    provide: IconService,
                    useClass: config.service || IconService
                }
            ]
        };
    };
    VCLIconModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, L10nModule],
            exports: [IconComponent],
            declarations: [IconComponent],
            providers: [IconService],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLIconModule);
    return VCLIconModule;
}());

var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$1 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return DropdownComponent; }),
    multi: true
};
var DropdownComponent = (function () {
    function DropdownComponent() {
        var _this = this;
        this.select = new _angular_core.EventEmitter();
        this.tabindex = 0;
        this.expanded = false;
        this.expandedChange = new _angular_core.EventEmitter();
        this.maxSelectableItems = 1;
        this.minSelectableItems = 1;
        this.ariaRole = 'listbox';
        this.metaInformation = [];
        this.select.subscribe(function (selectedItems) {
            _this.selected = selectedItems;
            !!_this.onChangeCallback && _this.onChangeCallback(selectedItems);
        });
    }
    DropdownComponent.prototype._selectItem = function (item, meta, metalist) {
        if (this.maxSelectableItems === 1) {
            this.expanded = false;
            this.expandedChange.emit(this.expanded);
            metalist.selectItem(item);
        }
        else {
            if (meta.selected) {
                metalist.deSelectItem(item);
            }
            else {
                metalist.selectItem(item);
            }
        }
    };
    DropdownComponent.prototype.selectItem = function (item) {
        this.metalist.selectItem(item);
    };
    DropdownComponent.prototype.onSelect = function (selectedItems) {
        this.select.emit(selectedItems);
    };
    DropdownComponent.prototype.writeValue = function (value) {
        if (value !== this.selected) {
            this.selected = value;
        }
    };
    DropdownComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DropdownComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        _angular_core.ViewChild('metalist'), 
        __metadata('design:type', Object)
    ], DropdownComponent.prototype, "metalist", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', Object)
    ], DropdownComponent.prototype, "select", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Array)
    ], DropdownComponent.prototype, "items", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], DropdownComponent.prototype, "tabindex", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownComponent.prototype, "expanded", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', (typeof (_a = typeof _angular_core.EventEmitter !== 'undefined' && _angular_core.EventEmitter) === 'function' && _a) || Object)
    ], DropdownComponent.prototype, "expandedChange", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], DropdownComponent.prototype, "maxSelectableItems", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], DropdownComponent.prototype, "minSelectableItems", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], DropdownComponent.prototype, "ariaRole", void 0);
    DropdownComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-dropdown',
            template: "<ul class=\"vclDropdown\"\n  [class.vclOpen]=\"expanded\"\n  [attr.role]=\"ariaRole\"\n  [attr.tabindex]=\"tabindex\"\n  [attr.aria-multiselectable]=\"maxSelectableItems > 1\"\n  [attr.aria-expanded]=\"expanded\">\n  <vcl-metalist (select)=\"onSelect($event)\" #metalist [items]=\"items\"\n  [meta]=\"metaInformation\" [maxSelectableItems]=\"maxSelectableItems\"\n  [minSelectableItems]=\"minSelectableItems\">\n    <template let-item=\"item\" let-meta=\"meta\">\n      <li class=\"vclDropdownItem\"\n        [class.vclSelected]=\"meta.selected\"\n        [attr.aria-selected]=\"meta.selected\"\n        role=\"menuitem\"\n        tabindex=\"0\"\n        (tap)=\"_selectItem(item, meta, metalist)\"\n        [ngClass]=\"item.class\">\n        <div class=\"vclDropdownItemLabel\">\n          {{item.label}}\n        </div>\n        <div *ngIf=\"item.sublabel\" class=\"vclDropdownItemSubLabel\">\n          {{item.sublabel}}\n        </div>\n      </li>\n    </template>\n  </vcl-metalist>\n</ul>\n",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$1]
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownComponent);
    return DropdownComponent;
    var _a;
}());

var VCLDropdownModule = (function () {
    function VCLDropdownModule() {
    }
    VCLDropdownModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, L10nModule, VCLMetalistModule],
            exports: [DropdownComponent],
            declarations: [DropdownComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLDropdownModule);
    return VCLDropdownModule;
}());

var ButtonComponent = (function () {
    function ButtonComponent(elementRef) {
        this.elementRef = elementRef;
        this.pressed = false; // `true` if a pointer device is conducting a `down` gesture on the button
        this.focused = false; // `true` if the element is focused  (CSS' :focus)
        this.hovered = false; // `true` if a pointer device is hovering the button (CSS' :hover)
        this.selected = false;
        this.busy = false; // State to indicate that the button is disabled as a operation is in progress
        this.flexLabel = false;
        this.autoBlur = true;
        this._press = new _angular_core.EventEmitter();
    }
    Object.defineProperty(ButtonComponent.prototype, "press", {
        get: function () {
            return this._press.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.press.subscribe(function () {
            if (_this.autoBlur) {
                if (_this.elementRef.nativeElement && _this.elementRef.nativeElement.blur) {
                    _this.elementRef.nativeElement.blur();
                }
            }
        });
    };
    ButtonComponent.prototype.onMouseEnter = function (e) { this.hovered = true; };
    ButtonComponent.prototype.onMouseLeave = function (e) { this.hovered = false; };
    ButtonComponent.prototype.onMouseUp = function (e) { this.pressed = false; };
    ButtonComponent.prototype.onMouseDown = function (e) { this.pressed = true; };
    ButtonComponent.prototype.onFocus = function (e) { this.focused = true; };
    ButtonComponent.prototype.onBlur = function (e) { this.focused = false; };
    ButtonComponent.prototype.onTap = function (e) { this._press.emit(e); };
    Object.defineProperty(ButtonComponent.prototype, "calculatedLabel", {
        get: function () {
            return (this.busy && this.busyLabel) ? this.busyLabel : this.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "calculatedPrepIcon", {
        get: function () {
            return (this.busy && this.prepIconBusy) ? this.prepIconBusy : this.prepIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "calculatedAppIcon", {
        get: function () {
            return (this.busy && this.appIconBusy) ? this.appIconBusy : this.appIcon;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        // `true` if the element is focused  (CSS' :focus)
        _angular_core.HostBinding('class.vclHovered'), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "hovered", void 0);
    __decorate([
        // `true` if a pointer device is hovering the button (CSS' :hover)
        _angular_core.Input(),
        _angular_core.HostBinding('class.vclSelected'), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "selected", void 0);
    __decorate([
        _angular_core.HostBinding('attr.aria-label'),
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "title", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "busy", void 0);
    __decorate([
        // State to indicate that the button is disabled as a operation is in progress
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "flexLabel", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "busyLabel", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "label", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "prepIcon", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "prepIconBusy", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "autoBlur", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "appIcon", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "appIconBusy", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', (typeof (_a = typeof rxjs_Observable.Observable !== 'undefined' && rxjs_Observable.Observable) === 'function' && _a) || Object)
    ], ButtonComponent.prototype, "press", null);
    __decorate([
        _angular_core.HostListener('mouseenter', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ButtonComponent.prototype, "onMouseEnter", null);
    __decorate([
        _angular_core.HostListener('mouseleave', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ButtonComponent.prototype, "onMouseLeave", null);
    __decorate([
        _angular_core.HostListener('mouseup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ButtonComponent.prototype, "onMouseUp", null);
    __decorate([
        _angular_core.HostListener('mousedown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ButtonComponent.prototype, "onMouseDown", null);
    __decorate([
        _angular_core.HostListener('onfocus', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ButtonComponent.prototype, "onFocus", null);
    __decorate([
        _angular_core.HostListener('onblur', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ButtonComponent.prototype, "onBlur", null);
    __decorate([
        _angular_core.HostListener('tap', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ButtonComponent.prototype, "onTap", null);
    ButtonComponent = __decorate([
        _angular_core.Component({
            selector: '[vcl-button]',
            host: {
                '[class.vclButton]': 'true',
            },
            template: "<vcl-icogram\n  [label]=\"calculatedLabel | loc\"\n  [flexLabel]=\"flexLabel | loc\"\n  [prepIcon]=\"calculatedPrepIcon\"\n  [appIcon]=\"calculatedAppIcon\">\n  <ng-content></ng-content>\n</vcl-icogram>\n",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof _angular_core.ElementRef !== 'undefined' && _angular_core.ElementRef) === 'function' && _b) || Object])
    ], ButtonComponent);
    return ButtonComponent;
    var _a, _b;
}());

var IcogramComponent = (function () {
    function IcogramComponent(elRef) {
        this.elRef = elRef;
    }
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], IcogramComponent.prototype, "label", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], IcogramComponent.prototype, "flexLabel", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], IcogramComponent.prototype, "prepIcon", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], IcogramComponent.prototype, "appIcon", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], IcogramComponent.prototype, "prepIconSrc", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], IcogramComponent.prototype, "appIconSrc", void 0);
    IcogramComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-icogram, [vcl-icogram]',
            host: {
                '[class.vclIcogram]': 'true',
                '[attr.role]': 'img'
            },
            template: "<ng-content></ng-content>\n<div vcl-icon *ngIf=\"prepIcon\" [icon]=\"prepIcon\"></div>\n<span *ngIf=\"!!label\" [class.vclLayoutFlex]=\"!!flexLabel\" class=\"vclText\">\n  {{label | loc}}\n</span>\n<div vcl-icon *ngIf=\"appIcon\" [icon]=\"appIcon\"></div>\n",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof _angular_core.ElementRef !== 'undefined' && _angular_core.ElementRef) === 'function' && _a) || Object])
    ], IcogramComponent);
    return IcogramComponent;
    var _a;
}());

var VCLIcogramModule = (function () {
    function VCLIcogramModule() {
    }
    VCLIcogramModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, VCLIconModule, L10nModule],
            exports: [IcogramComponent],
            declarations: [IcogramComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLIcogramModule);
    return VCLIcogramModule;
}());

var VCLButtonModule = (function () {
    function VCLButtonModule() {
    }
    VCLButtonModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, VCLIcogramModule, L10nModule],
            exports: [ButtonComponent],
            declarations: [ButtonComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLButtonModule);
    return VCLButtonModule;
}());

/**
 * see
 * @link http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
 */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$2 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return SelectComponent; }),
    multi: true
};
var SelectComponent = (function () {
    function SelectComponent() {
        var _this = this;
        this.clickInside = false;
        this.popoverTarget = 'popoverTarget' + Math.random().toString().slice(2);
        this.select = new _angular_core.EventEmitter();
        this.expanded = false;
        this.minSelectableItems = 1;
        this.maxSelectableItems = 1;
        this.expandedIcon = 'fa:chevron-up';
        this.collapsedIcon = 'fa:chevron-down';
        this.inputValue = 'label';
        this.emptyLabel = 'Select value';
        this.select.subscribe(function (selectedItems) {
            _this.selected = selectedItems;
            !!_this.onChangeCallback && _this.onChangeCallback(selectedItems);
        });
    }
    SelectComponent.prototype.ngOnInit = function () {
        this.displayValue = this.emptyLabel;
    };
    SelectComponent.prototype.expand = function () {
        this.expanded = !this.expanded;
    };
    SelectComponent.prototype.selectItem = function (item) {
        this.dropdown.selectItem(item);
    };
    /**
     * TODO refactor this
     */
    SelectComponent.prototype.onSelect = function (items) {
        this.clickInside = true;
        this.select.emit(items);
        if (items && items[0] && this.maxSelectableItems === 1) {
            this.displayValue = items[0][this.inputValue];
        }
        else if (!items || items.length === 0) {
            this.displayValue = this.emptyLabel;
        }
        else {
            var result = '';
            for (var i = 0; i < items.length; i++) {
                result += items[i][this.inputValue];
                if (i !== items.length - 1) {
                    result += ', ';
                }
            }
            this.displayValue = result;
        }
    };
    SelectComponent.prototype.onOutsideClick = function (event) {
        this.expanded = false;
    };
    SelectComponent.prototype.writeValue = function (value) {
        if (value !== this.selected) {
            this.selected = value;
        }
    };
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        _angular_core.ViewChild('dropdown'), 
        __metadata('design:type', Object)
    ], SelectComponent.prototype, "dropdown", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', Object)
    ], SelectComponent.prototype, "select", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], SelectComponent.prototype, "expanded", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Array)
    ], SelectComponent.prototype, "items", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], SelectComponent.prototype, "minSelectableItems", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], SelectComponent.prototype, "maxSelectableItems", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], SelectComponent.prototype, "expandedIcon", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], SelectComponent.prototype, "collapsedIcon", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], SelectComponent.prototype, "inputValue", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], SelectComponent.prototype, "emptyLabel", void 0);
    SelectComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-select',
            template: "<div\n  [attr.id]=\"popoverTarget\"\n  (tap)=\"expand()\"\n  [attr.aria-autocomplete]=\"list\"\n  class=\"vclLayoutHorizontal vclSelect vclInputGroupEmb\">\n\n  <div class=\"vclInput\" readonly>\n    {{displayValue}}\n  </div>\n\n  <button vcl-button\n    tabindex=\"-1\"\n    class=\"vclTransparent vclSquare vclAppended\"\n    [appIcon]=\"expanded ? expandedIcon : collapsedIcon\">\n  </button>\n\n</div>\n\n<vcl-popover\n  [target]=\"'#' + popoverTarget\"\n  targetAttachment='bottom left'\n  attachment='top left'\n  [(open)]=\"expanded\">\n  <vcl-dropdown #dropdown\n    [(expanded)]=\"expanded\"\n    [items]=\"items\"\n    (select)=\"onSelect($event)\"\n    [minSelectableItems]=\"minSelectableItems\"\n    [maxSelectableItems]=\"maxSelectableItems\"\n    [tabindex]=\"0\">\n  </vcl-dropdown>\n</vcl-popover>\n\n\n\n<!--<div\n  [attr.id]=\"popoverTarget\"\n  (tap)=\"expand()\"\n  [attr.aria-autocomplete]=\"list\"\n  class=\"vclSelect vclInputGroupEmb\">\n\n  <div class=\"vclInput\" readonly>\n    {{displayValue}}\n  </div>\n\n  <button vcl-button\n    tabindex=\"-1\"\n    class=\"vclTransparent vclSquare vclAppended\"\n    [appIcon]=\"expanded ? expandedIcon : collapsedIcon\">\n  </button>\n\n</div>\n\n<vcl-popover\n  [target]=\"'#' + popoverTarget\"\n  targetAttachment='bottom left'\n  attachment='top left'\n  [(open)]=\"expanded\">\n  <vcl-dropdown #dropdown\n    [expanded]=\"expanded\"\n    [items]=\"items\"\n    (select)=\"onSelect($event)\"\n    [minSelectableItems]=\"minSelectableItems\"\n    [maxSelectableItems]=\"maxSelectableItems\"\n    [tabindex]=\"0\">\n  </vcl-dropdown>\n</vcl-popover>\n\n\n<div\n  [attr.id]=\"popoverTarget\"\n  (tap)=\"expand()\"\n  [attr.aria-autocomplete]=\"list\"\n  class=\"vclLayoutHorizontal vclSelect vclInputGroupEmb\">\n  <span class=\"vclInput\" readonly>{{displayValue}}</span>\n  <button vcl-button\n    tabindex=\"-1\"\n    class=\"vclTransparent vclSquare\"\n    [appIcon]=\"expanded ? expandedIcon : collapsedIcon\">\n  </button>\n</div>\n\n<vcl-popover\n  [target]=\"'#' + popoverTarget\"\n  targetAttachment='bottom left'\n  attachment='top left'\n  [(open)]=\"expanded\">\n  <vcl-dropdown #dropdown\n    [expanded]=\"expanded\"\n    [items]=\"items\"\n    (select)=\"onSelect($event)\"\n    [minSelectableItems]=\"minSelectableItems\"\n    [maxSelectableItems]=\"maxSelectableItems\"\n    [tabindex]=\"0\">\n  </vcl-dropdown>\n</vcl-popover>-->\n",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$2]
        }), 
        __metadata('design:paramtypes', [])
    ], SelectComponent);
    return SelectComponent;
}());

var OverlayManagerService = (function () {
    function OverlayManagerService() {
        this.components = [];
    }
    OverlayManagerService.prototype.register = function (component) {
        var zIndex = 100;
        for (var i = 0; i < this.components.length; i++) {
            if (this.components[i].zIndex >= zIndex) {
                zIndex = this.components[i].zIndex;
            }
        }
        this.components.push(component);
        return zIndex + 10;
    };
    OverlayManagerService.prototype.unregister = function (component) {
        var index = this.components.indexOf(component);
        this.components.splice(index, 1);
        return -1;
    };
    OverlayManagerService = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [])
    ], OverlayManagerService);
    return OverlayManagerService;
}());

var PopoverComponent = (function () {
    function PopoverComponent(overlayManger, myElement) {
        this.overlayManger = overlayManger;
        this.myElement = myElement;
        this.class = 'vclPopOver';
        this.zIndex = 10;
        this.coverZIndex = -1;
        this.targetAttachment = 'bottom left';
        this.attachment = 'top left';
        this.open = false;
        this.layer = false;
        this.openChange = new _angular_core.EventEmitter();
        this.zIndexManaged = true;
        this.expandManaged = true;
        this.state = 'open';
    }
    PopoverComponent.prototype.close = function () {
        this.state = 'void';
        this.open = false;
        this.openChange.emit(this.open);
    };
    PopoverComponent.prototype.offClick = function () {
        if (this.expandManaged && !this.layer) {
            this.close();
        }
    };
    PopoverComponent.prototype.ngOnChanges = function (changes) {
        try {
            if (this.zIndexManaged) {
                if (changes.open.currentValue === true) {
                    this.zIndex = this.overlayManger.register(this);
                    this.coverZIndex = this.zIndex - 1;
                    this.state = 'open';
                }
                else if (changes.open.currentValue === false) {
                    this.state = 'void';
                    this.zIndex = this.overlayManger.unregister(this);
                    this.coverZIndex = -1;
                }
            }
        }
        catch (ex) { }
    };
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "target", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "style", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "class", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], PopoverComponent.prototype, "zIndex", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "targetAttachment", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "attachment", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], PopoverComponent.prototype, "open", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], PopoverComponent.prototype, "layer", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', (typeof (_a = typeof _angular_core.EventEmitter !== 'undefined' && _angular_core.EventEmitter) === 'function' && _a) || Object)
    ], PopoverComponent.prototype, "openChange", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], PopoverComponent.prototype, "zIndexManaged", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], PopoverComponent.prototype, "expandManaged", void 0);
    PopoverComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-popover',
            template: "<vcl-tether\n  *ngIf=\"open\"\n  [zIndex]=\"zIndex\"\n  [class]=\"class\"\n  [target]=\"target\"\n  [targetAttachment]=\"targetAttachment\"\n  [attachment]=\"attachment\">\n  <div [ngStyle]=\"style\" [@popOverState]=\"state\"\n  (off-click)=\"offClick()\">\n    <ng-content></ng-content>\n  </div>\n</vcl-tether>\n<div *ngIf=\"open && layer\" class=\"vclLayerCover\" [style.zIndex]=\"coverZIndex\"></div>\n",
            animations: [
                _angular_core.trigger('popOverState', [])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof OverlayManagerService !== 'undefined' && OverlayManagerService) === 'function' && _b) || Object, (typeof (_c = typeof _angular_core.ElementRef !== 'undefined' && _angular_core.ElementRef) === 'function' && _c) || Object])
    ], PopoverComponent);
    return PopoverComponent;
    var _a, _b, _c;
}());

var tetherID = 10000;
var TetherComponent = (function () {
    function TetherComponent(myElement) {
        this.myElement = myElement;
        this._error = new _angular_core.EventEmitter();
        this.id = 'vcl-tetherId' + tetherID++;
    }
    Object.defineProperty(TetherComponent.prototype, "error", {
        get: function () {
            return this._error.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    TetherComponent.prototype.ngAfterViewInit = function () {
        try {
            this.tether = new Tether({
                element: '#' + this.id,
                target: this.target,
                attachment: this.attachment,
                targetAttachment: this.targetAttachment
            });
        }
        catch (ex) {
            this._error.emit(ex);
        }
    };
    TetherComponent.prototype.ngOnDestroy = function () {
        try {
            this.tether && this.tether.destroy();
        }
        catch (ex) { }
    };
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], TetherComponent.prototype, "target", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], TetherComponent.prototype, "class", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], TetherComponent.prototype, "zIndex", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], TetherComponent.prototype, "targetAttachment", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], TetherComponent.prototype, "attachment", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', (typeof (_a = typeof rxjs_Observable.Observable !== 'undefined' && rxjs_Observable.Observable) === 'function' && _a) || Object)
    ], TetherComponent.prototype, "error", null);
    TetherComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-tether',
            template: "<div [id]=\"id\" [class]=\"class\" [style.z-index]=\"zIndex\">\n  <ng-content></ng-content>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof _angular_core.ElementRef !== 'undefined' && _angular_core.ElementRef) === 'function' && _b) || Object])
    ], TetherComponent);
    return TetherComponent;
    var _a, _b;
}());

var VCLTetherModule = (function () {
    function VCLTetherModule() {
    }
    VCLTetherModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule],
            exports: [TetherComponent],
            declarations: [TetherComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLTetherModule);
    return VCLTetherModule;
}());

var OffClickDirective = (function () {
    function OffClickDirective(elem) {
        this.elem = elem;
        this.offClick = new _angular_core.EventEmitter();
    }
    OffClickDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (typeof document !== 'undefined') {
            // Create the listener
            this.listener = function (ev) {
                var me = _this.elem.nativeElement;
                // Check if the target is the off-clicks element or an sub element 
                if (ev.target && me !== ev.target && !me.contains(ev.target)) {
                    _this.offClick.emit();
                }
            };
            // Wait for next run loop to attach the listener as it might be triggered by a current click event
            setTimeout(function () {
                document.addEventListener('click', _this.listener);
            }, 0);
        }
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        if (typeof document !== 'undefined' && this.listener) {
            document.removeEventListener('click', this.listener);
        }
    };
    __decorate([
        _angular_core.Output('off-click'), 
        __metadata('design:type', Object)
    ], OffClickDirective.prototype, "offClick", void 0);
    OffClickDirective = __decorate([
        _angular_core.Directive({
            selector: '[off-click]',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof _angular_core.ElementRef !== 'undefined' && _angular_core.ElementRef) === 'function' && _a) || Object])
    ], OffClickDirective);
    return OffClickDirective;
    var _a;
}());

var VCLOffClickModule = (function () {
    function VCLOffClickModule() {
    }
    VCLOffClickModule = __decorate([
        _angular_core.NgModule({
            declarations: [OffClickDirective],
            exports: [OffClickDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLOffClickModule);
    return VCLOffClickModule;
}());

var VCLPopoverModule = (function () {
    function VCLPopoverModule() {
    }
    VCLPopoverModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular_common.CommonModule,
                VCLTetherModule,
                VCLOffClickModule
            ],
            exports: [PopoverComponent],
            declarations: [PopoverComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLPopoverModule);
    return VCLPopoverModule;
}());

var VCLSelectModule = (function () {
    function VCLSelectModule() {
    }
    VCLSelectModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, L10nModule, VCLDropdownModule, VCLButtonModule, VCLOffClickModule, VCLPopoverModule],
            exports: [SelectComponent],
            declarations: [SelectComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLSelectModule);
    return VCLSelectModule;
}());

var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["Single"] = 0] = "Single";
    SelectionMode[SelectionMode["Multiple"] = 1] = "Multiple";
})(SelectionMode || (SelectionMode = {}));
var ButtonGroupComponent = (function () {
    function ButtonGroupComponent() {
        this.subscriptions = [];
        // If `Single`, a single button from the group can be selected
        // If `Multiple` multipe buttons can be selected
        this.selectionMode = SelectionMode.Single;
        this._selectedIndexChange = new _angular_core.EventEmitter();
        /* Event emitted when the group's value changes. */
        this._change = new _angular_core.EventEmitter();
    }
    Object.defineProperty(ButtonGroupComponent.prototype, "mode", {
        // String alias for selectionMode
        set: function (value) {
            if (value === 'multiple') {
                this.selectionMode = SelectionMode.Multiple;
            }
            else {
                this.selectionMode = SelectionMode.Single;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroupComponent.prototype, "selectedIndexChange", {
        get: function () {
            return this._selectedIndexChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(ButtonGroupComponent.prototype, "change", {
        get: function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ButtonGroupComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectedIndex'] && changes['selectedIndex'].currentValue !== undefined) {
            this.initButtons();
        }
    };
    ButtonGroupComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    ButtonGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initButtons();
        // Reinitialize if buttons change
        this.buttons.changes.subscribe(function () {
            _this.initButtons();
        });
    };
    // - Dipose old Subscription
    // - Validate and init selectedIndex
    // - Subscribe to buttons press event
    ButtonGroupComponent.prototype.initButtons = function () {
        var _this = this;
        if (!this.buttons) {
            return;
        }
        // Unsubscribe from the old buttons
        this.dispose();
        // Validate the provided selectedIndex value
        var selectedIndex;
        if (this.selectionMode === SelectionMode.Single && typeof this.selectedIndex === 'number') {
            selectedIndex = [this.selectedIndex];
        }
        else if (this.selectionMode === SelectionMode.Multiple &&
            Array.isArray(this.selectedIndex) &&
            this.selectedIndex.every(function (n) { return typeof n === 'number'; })) {
            selectedIndex = this.selectedIndex;
        }
        // If valid selectedIndex is provided, change the button selected states
        if (selectedIndex) {
            this.buttons.forEach(function (btn, idx) {
                btn.selected = selectedIndex.indexOf(idx) >= 0;
            });
        }
        // Subscribe to buttons press event
        this.subscriptions = this.buttons.map(function (btn, idx) { return btn.press.subscribe(function () {
            if (_this.selectionMode === SelectionMode.Single) {
                _this.unselectAll();
                btn.selected = true;
                _this._change.emit({ source: btn, index: idx });
                _this._selectedIndexChange.emit(idx);
            }
            else {
                btn.selected = !btn.selected;
                var indexes = _this.buttons.map(function (btn, idx) { return ({ s: btn.selected, idx: idx }); }).filter(function (o) { return o.s; }).map(function (o) { return o.idx; });
                _this._change.emit({ source: btn, index: indexes });
                _this._selectedIndexChange.emit(indexes);
            }
        }); });
    };
    ButtonGroupComponent.prototype.unselectAll = function () {
        this.buttons.forEach(function (btn) { return btn.selected = false; });
    };
    ButtonGroupComponent.prototype.dispose = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
        this.subscriptions = [];
    };
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], ButtonGroupComponent.prototype, "selectionMode", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], ButtonGroupComponent.prototype, "mode", null);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], ButtonGroupComponent.prototype, "selectedIndex", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', Object)
    ], ButtonGroupComponent.prototype, "selectedIndexChange", null);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', (typeof (_a = typeof rxjs_Observable.Observable !== 'undefined' && rxjs_Observable.Observable) === 'function' && _a) || Object)
    ], ButtonGroupComponent.prototype, "change", null);
    __decorate([
        _angular_core.ContentChildren(ButtonComponent), 
        __metadata('design:type', (typeof (_b = typeof _angular_core.QueryList !== 'undefined' && _angular_core.QueryList) === 'function' && _b) || Object)
    ], ButtonGroupComponent.prototype, "buttons", void 0);
    ButtonGroupComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-button-group',
            host: {
                '[class.vclButtonGroup]': 'true',
            },
            template: "<ng-content></ng-content>",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonGroupComponent);
    return ButtonGroupComponent;
    var _a, _b;
}());

var VCLButtonGroupModule = (function () {
    function VCLButtonGroupModule() {
    }
    VCLButtonGroupModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, VCLButtonModule, L10nModule],
            exports: [ButtonGroupComponent],
            declarations: [ButtonGroupComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLButtonGroupModule);
    return VCLButtonGroupModule;
}());

// The wormhole Directive is just a reference to a template
var WormholeGenerator = (function () {
    function WormholeGenerator(templateRef) {
        this.templateRef = templateRef;
    }
    Object.defineProperty(WormholeGenerator.prototype, "isConnected", {
        get: function () {
            return !!this.source;
        },
        enumerable: true,
        configurable: true
    });
    WormholeGenerator.prototype.disconnect = function () {
        this.source = null;
    };
    WormholeGenerator.prototype.connect = function (wormhole) {
        this.source = wormhole;
    };
    WormholeGenerator.prototype.getTemplateRef = function () {
        return this.templateRef;
    };
    WormholeGenerator = __decorate([
        _angular_core.Directive({
            selector: '[generateWormhole]',
            exportAs: 'wormhole',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof _angular_core.TemplateRef !== 'undefined' && _angular_core.TemplateRef) === 'function' && _a) || Object])
    ], WormholeGenerator);
    return WormholeGenerator;
    var _a;
}());
var Wormhole = (function () {
    function Wormhole(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        // TODO: workaround. Does not disconnect the view when destroying the element when true
        // ngOnDestroy is called before the animations are fully traversed. This would remove the wormhole's ContentChild
        // before its host is removed from the DOM
        this.indisposable = false;
    }
    Object.defineProperty(Wormhole.prototype, "isConnected", {
        get: function () {
            return !!this.connectedWormhole;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wormhole.prototype, "wormhole", {
        get: function () {
            return this._wormhole;
        },
        set: function (wormhole) {
            if (this.isConnected) {
                this.disconnect();
            }
            if (wormhole) {
                this.connect(wormhole);
                this._wormhole = wormhole;
            }
        },
        enumerable: true,
        configurable: true
    });
    Wormhole.prototype.connect = function (wormhole) {
        this.connectedWormhole = wormhole;
        wormhole.connect(this);
        var templateRef = wormhole.getTemplateRef();
        this.viewContainerRef.createEmbeddedView(templateRef);
    };
    Wormhole.prototype.disconnect = function () {
        if (this.connectedWormhole) {
            this.connectedWormhole.disconnect();
        }
        this.connectedWormhole = null;
        this.viewContainerRef.clear();
    };
    Wormhole.prototype.ngOnDestroy = function () {
        if (this.isConnected && !this.indisposable) {
            this.disconnect();
        }
    };
    __decorate([
        _angular_core.Input('wormhole'), 
        __metadata('design:type', WormholeGenerator)
    ], Wormhole.prototype, "wormhole", null);
    __decorate([
        _angular_core.Input('wormhole-indisposable'), 
        __metadata('design:type', Boolean)
    ], Wormhole.prototype, "indisposable", void 0);
    Wormhole = __decorate([
        _angular_core.Directive({
            selector: '[wormhole]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof _angular_core.ViewContainerRef !== 'undefined' && _angular_core.ViewContainerRef) === 'function' && _a) || Object])
    ], Wormhole);
    return Wormhole;
    var _a;
}());

var VCLWormholeModule = (function () {
    function VCLWormholeModule() {
    }
    VCLWormholeModule = __decorate([
        _angular_core.NgModule({
            exports: [Wormhole, WormholeGenerator],
            declarations: [Wormhole, WormholeGenerator]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLWormholeModule);
    return VCLWormholeModule;
}());

var LayerService = (function () {
    function LayerService() {
        this.visibleLayersChanged$ = new _angular_core.EventEmitter();
        this.subscriptions = new Map();
        this.layers = new Map();
    }
    Object.defineProperty(LayerService.prototype, "visibleLayersChanged", {
        get: function () {
            return this.visibleLayersChanged$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(LayerService.prototype, "visibleLayers", {
        get: function () {
            return Array.from(this.subscriptions.keys()).filter(function (layer) { return layer.visible; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerService.prototype, "currentZIndex", {
        get: function () {
            return this.visibleLayers
                .map(function (layer) { return layer.zIndex; })
                .reduce(function (pzIndex, czIndex) { return Math.max(pzIndex, czIndex); }, 0);
        },
        enumerable: true,
        configurable: true
    });
    LayerService.prototype.open = function (layerName, data) {
        if (this.layers.has(layerName)) {
            return this.layers.get(layerName).open(data);
        }
        else {
            return rxjs_Observable.Observable.throw('Layer not found. ' + layerName);
        }
    };
    LayerService.prototype.close = function (layerName) {
        if (this.layers.has(layerName)) {
            this.layers.get(layerName).close();
        }
    };
    LayerService.prototype.register = function (layer) {
        var _this = this;
        var sub = layer.visibilityChange.subscribe(function (visible) {
            _this.visibleLayersChanged$.emit(_this.visibleLayers);
        });
        this.subscriptions.set(layer, sub);
        if (layer.name) {
            this.layers.set(layer.name, layer);
        }
    };
    LayerService.prototype.unregister = function (layer) {
        layer.close();
        if (layer.name) {
            this.layers.delete(name);
        }
        this.subscriptions.get(layer).unsubscribe();
        this.subscriptions.delete(layer);
    };
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', (typeof (_a = typeof rxjs_Observable.Observable !== 'undefined' && rxjs_Observable.Observable) === 'function' && _a) || Object)
    ], LayerService.prototype, "visibleLayersChanged", null);
    LayerService = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LayerService);
    return LayerService;
    var _a;
}());

var LayerBaseComponent = (function () {
    function LayerBaseComponent(layerService) {
        this.layerService = layerService;
        this.visibleLayers = [];
    }
    LayerBaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.layerService.visibleLayersChanged.subscribe(function (visibleLayers) {
            _this.visibleLayers = visibleLayers;
        });
    };
    LayerBaseComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LayerBaseComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-layer-base',
            template: "<div *ngFor=\"let layer of visibleLayers\">\n  <div class=\"vclLayer\" role=\"dialog\" [@boxState]=\"layer.state\" [style.z-index]=\"layer.zIndex\">\n    <div class=\"vclLayerBox vclLayerGutterPadding\" (off-click)=\"layer.offClick()\">\n      <div [wormhole]=\"layer\" [wormhole-indisposable]=\"true\"></div>\n    </div>\n  </div>\n  <div *ngIf=\"layer.modal\" class=\"vclLayerCover\" [@layerState]=\"layer.state\" [style.z-index]=\"layer.coverzIndex\"></div>\n</div>\n",
            animations: [
                _angular_core.trigger('boxState', []),
                _angular_core.trigger('layerState', [])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof LayerService !== 'undefined' && LayerService) === 'function' && _a) || Object])
    ], LayerBaseComponent);
    return LayerBaseComponent;
    var _a;
}());
var LayerDirective = (function (_super) {
    __extends(LayerDirective, _super);
    function LayerDirective(templateRef, elementRef, layerService) {
        _super.call(this, templateRef);
        this.templateRef = templateRef;
        this.elementRef = elementRef;
        this.layerService = layerService;
        this.visibilityChange$ = new _angular_core.EventEmitter();
        this.modal = true;
        this.data = {};
        this.visible = false;
        this.coverzIndex = 10;
        this.zIndex = 11;
    }
    Object.defineProperty(LayerDirective.prototype, "visibilityChange", {
        get: function () {
            return this.visibilityChange$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerDirective.prototype, "state", {
        get: function () {
            return this.visible ? 'open' : 'closed';
        },
        enumerable: true,
        configurable: true
    });
    LayerDirective.prototype.ngOnInit = function () {
        this.layerService.register(this);
    };
    LayerDirective.prototype.ngOnDestroy = function () {
        this.layerService.unregister(this);
    };
    LayerDirective.prototype.offClick = function () {
        if (!this.modal) {
            this.close();
        }
    };
    LayerDirective.prototype.setZIndex = function (zIndex) {
        if (zIndex === void 0) { zIndex = 10; }
        this.coverzIndex = zIndex;
        this.zIndex = zIndex + 1;
    };
    LayerDirective.prototype.toggle = function () {
        this.visible = !this.visible;
        this.visibilityChange$.emit(this.visible);
    };
    LayerDirective.prototype.open = function (data) {
        if (!this._instanceResults) {
            this._instanceResults = new rxjs_Subject.Subject();
        }
        if (typeof data === 'object' && data) {
            this.data = data;
        }
        this.setZIndex(this.layerService.currentZIndex + 10);
        this.visible = true;
        this.visibilityChange$.emit(this.visible);
        return this._instanceResults.asObservable();
    };
    LayerDirective.prototype.send = function (result) {
        if (result !== undefined && this._instanceResults) {
            this._instanceResults.next(result);
        }
    };
    LayerDirective.prototype.close = function (result) {
        if (result !== undefined && this._instanceResults) {
            this._instanceResults.next(result);
            this._instanceResults.complete();
        }
        this.data = {};
        this._instanceResults = null;
        this.setZIndex();
        this.visible = false;
        this.visibilityChange$.emit(this.visible);
    };
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', (typeof (_a = typeof rxjs_Observable.Observable !== 'undefined' && rxjs_Observable.Observable) === 'function' && _a) || Object)
    ], LayerDirective.prototype, "visibilityChange", null);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], LayerDirective.prototype, "modal", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], LayerDirective.prototype, "name", void 0);
    LayerDirective = __decorate([
        _angular_core.Directive({
            selector: '[vcl-layer]',
            exportAs: 'layer',
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof _angular_core.TemplateRef !== 'undefined' && _angular_core.TemplateRef) === 'function' && _b) || Object, (typeof (_c = typeof _angular_core.ElementRef !== 'undefined' && _angular_core.ElementRef) === 'function' && _c) || Object, (typeof (_d = typeof LayerService !== 'undefined' && LayerService) === 'function' && _d) || Object])
    ], LayerDirective);
    return LayerDirective;
    var _a, _b, _c, _d;
}(WormholeGenerator));

var VCLLayerModule = (function () {
    function VCLLayerModule() {
    }
    VCLLayerModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, VCLWormholeModule, VCLOffClickModule],
            exports: [LayerBaseComponent, LayerDirective],
            declarations: [LayerBaseComponent, LayerDirective],
            providers: [LayerService]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLLayerModule);
    return VCLLayerModule;
}());

var TabLabelDirective = (function (_super) {
    __extends(TabLabelDirective, _super);
    function TabLabelDirective(templateRef) {
        _super.call(this, templateRef);
        this.templateRef = templateRef;
    }
    TabLabelDirective = __decorate([
        _angular_core.Directive({
            selector: '[vcl-tab-label]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof _angular_core.TemplateRef !== 'undefined' && _angular_core.TemplateRef) === 'function' && _a) || Object])
    ], TabLabelDirective);
    return TabLabelDirective;
    var _a;
}(WormholeGenerator));
var TabContentDirective = (function (_super) {
    __extends(TabContentDirective, _super);
    function TabContentDirective(templateRef) {
        _super.call(this, templateRef);
        this.templateRef = templateRef;
    }
    TabContentDirective = __decorate([
        _angular_core.Directive({
            selector: '[vcl-tab-content]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof _angular_core.TemplateRef !== 'undefined' && _angular_core.TemplateRef) === 'function' && _a) || Object])
    ], TabContentDirective);
    return TabContentDirective;
    var _a;
}(WormholeGenerator));
var TabComponent = (function () {
    function TabComponent() {
        this.disabled = false;
        this.tabClass = '';
    }
    __decorate([
        _angular_core.ContentChild(TabLabelDirective), 
        __metadata('design:type', TabLabelDirective)
    ], TabComponent.prototype, "label", void 0);
    __decorate([
        _angular_core.ContentChild(TabContentDirective), 
        __metadata('design:type', TabContentDirective)
    ], TabComponent.prototype, "content", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], TabComponent.prototype, "disabled", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], TabComponent.prototype, "tabClass", void 0);
    TabComponent = __decorate([
        _angular_core.Directive({
            selector: 'vcl-tab'
        }), 
        __metadata('design:paramtypes', [])
    ], TabComponent);
    return TabComponent;
}());
var TabNavComponent = (function () {
    function TabNavComponent() {
        this.layout = '';
        this.tabbableClass = '';
        this.tabsClass = '';
        this.tabContentClass = '';
        // Sets vclTabStyleUni on vclTabs and removes vclNoBorder on vclTabContent when true
        this.borders = false;
        this.selectedTabIndex = 0;
        this.selectedTabIndexChange$ = new _angular_core.EventEmitter();
    }
    Object.defineProperty(TabNavComponent.prototype, "selectedTabIndexChange", {
        get: function () {
            return this.selectedTabIndexChange$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabNavComponent.prototype, "tabsHaveContent", {
        // If any of the tabs has we do not render the shared content template
        // as it might be one the tabs content templates 
        get: function () {
            return this.tabs.some(function (tab) { return !!tab.content; });
        },
        enumerable: true,
        configurable: true
    });
    // Sets a valid selectedTabIndex
    TabNavComponent.prototype.selectTab = function (tab) {
        var tabs = this.tabs.toArray();
        var tabIdx;
        var tabComp;
        if (tab instanceof TabComponent) {
            tabIdx = tabs.indexOf(tab);
            tabComp = tab;
        }
        else if (typeof tab === 'number' && tabs[tab]) {
            tabIdx = tab;
            tabComp = tabs[tabIdx];
        }
        else {
            tabIdx = -1;
            tabComp = null;
        }
        if (tabIdx >= 0 && tab instanceof TabComponent && !tab.disabled) {
            this.selectedTabIndex = tabIdx;
            this.selectedTabIndexChange$.emit(tabIdx);
        }
    };
    __decorate([
        _angular_core.ContentChildren(TabComponent), 
        __metadata('design:type', (typeof (_a = typeof _angular_core.QueryList !== 'undefined' && _angular_core.QueryList) === 'function' && _a) || Object)
    ], TabNavComponent.prototype, "tabs", void 0);
    __decorate([
        _angular_core.ContentChild(TabContentDirective), 
        __metadata('design:type', TabContentDirective)
    ], TabNavComponent.prototype, "content", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], TabNavComponent.prototype, "layout", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], TabNavComponent.prototype, "tabbableClass", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], TabNavComponent.prototype, "tabsClass", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], TabNavComponent.prototype, "tabContentClass", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], TabNavComponent.prototype, "borders", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], TabNavComponent.prototype, "selectedTabIndex", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', (typeof (_b = typeof rxjs_Observable.Observable !== 'undefined' && rxjs_Observable.Observable) === 'function' && _b) || Object)
    ], TabNavComponent.prototype, "selectedTabIndexChange", null);
    TabNavComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-tab-nav',
            template: "<div class=\"vclTabbable {{tabbableClass}}\" \n     [class.vclTabsLeft]=\"layout==='left'\"\n     [class.vclTabsRight]=\"layout==='right'\">\n  <div class=\"vclTabs {{tabsClass}}\" [class.vclTabStyleUni]=\"!!borders\" role=\"tablist\">\n    <div *ngFor=\"let tab of tabs; let i = index\"\n         class=\"vclTab {{tab.tabClass}}\" role=\"tab\"\n         [class.vclDisabled]=\"tab.disabled\"\n         [class.vclSelected]=\"selectedTabIndex===i\"\n         [class.aria-selected]=\"selectedTabIndex===i\"\n         (tap)=\"selectTab(tab)\">\n      <div [wormhole]=\"tab.label\"></div>\n    </div>\n  </div>\n  <div *ngIf=\"tabsHaveContent\" class=\"vclTabContent {{tabContentClass}}\" [class.vclNoBorder]=\"!borders\">\n    <div role=\"tabpanel\" class=\"vclTabPanel\" *ngFor=\"let tab of tabs; let i = index\">\n      <div *ngIf=\"selectedTabIndex===i && tab.content\" [wormhole]=\"tab.content\" [wormhole-indisposable]=\"true\"></div>\n    </div>\n  </div>\n  <div *ngIf=\"!tabsHaveContent && content\" role=\"tabpanel\" class=\"vclTabPanel\">\n    <div [wormhole]=\"content\" [wormhole-indisposable]=\"true\"></div>\n  </div>\n</div>\n\n"
        }), 
        __metadata('design:paramtypes', [])
    ], TabNavComponent);
    return TabNavComponent;
    var _a, _b;
}());

var VCLTabNavModule = (function () {
    function VCLTabNavModule() {
    }
    VCLTabNavModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, L10nModule, VCLWormholeModule],
            exports: [TabComponent, TabContentDirective, TabLabelDirective, TabNavComponent],
            declarations: [TabComponent, TabContentDirective, TabLabelDirective, TabNavComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLTabNavModule);
    return VCLTabNavModule;
}());

var NavigationItemComponent = (function () {
    function NavigationItemComponent() {
        this.active = true;
        this.selected = false;
        this.opened = false;
        this.heading = false;
        this.class = '';
    }
    /**
     * transforms this NavigationItemComponent insto an object,
     * so it can be handled the same way as an inputList
     * @return {Object}
     */
    NavigationItemComponent.prototype.toObject = function () {
        var ret = {
            label: this.label,
            active: this.active,
            selected: this.selected,
            opened: this.opened,
            heading: this.heading,
            href: this.href,
            prepIcon: this.prepIcon,
            appIcon: this.appIcon,
            class: this.class
        };
        if (this.route) {
            ret['route'] = this.route;
            if (!ret['route'].length)
                ret['route'] = [ret['route']]; // force array
        }
        // add nested items
        var items = [];
        var ar = this.items.toArray();
        ar.shift(); // remove first because 'this' is contained
        ar.map(function (navItemCom) { return items.push(navItemCom.toObject()); });
        if (items.length > 0)
            ret['items'] = items; // only add if length>0 to not show nested-icons
        return ret;
    };
    __decorate([
        _angular_core.Input('label'), 
        __metadata('design:type', String)
    ], NavigationItemComponent.prototype, "label", void 0);
    __decorate([
        _angular_core.Input('route'), 
        __metadata('design:type', Object)
    ], NavigationItemComponent.prototype, "route", void 0);
    __decorate([
        _angular_core.ContentChildren(NavigationItemComponent), 
        __metadata('design:type', (typeof (_a = typeof _angular_core.QueryList !== 'undefined' && _angular_core.QueryList) === 'function' && _a) || Object)
    ], NavigationItemComponent.prototype, "items", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], NavigationItemComponent.prototype, "active", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], NavigationItemComponent.prototype, "selected", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], NavigationItemComponent.prototype, "opened", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], NavigationItemComponent.prototype, "heading", void 0);
    __decorate([
        _angular_core.Input('href'), 
        __metadata('design:type', String)
    ], NavigationItemComponent.prototype, "href", void 0);
    __decorate([
        _angular_core.Input('prepIcon'), 
        __metadata('design:type', String)
    ], NavigationItemComponent.prototype, "prepIcon", void 0);
    __decorate([
        _angular_core.Input('appIcon'), 
        __metadata('design:type', String)
    ], NavigationItemComponent.prototype, "appIcon", void 0);
    __decorate([
        _angular_core.Input('class'), 
        __metadata('design:type', String)
    ], NavigationItemComponent.prototype, "class", void 0);
    NavigationItemComponent = __decorate([
        _angular_core.Directive({
            selector: 'vcl-navitem'
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationItemComponent);
    return NavigationItemComponent;
    var _a;
}());
var NavigationComponent = (function () {
    //  isVert: boolean = true;
    function NavigationComponent(router) {
        this.router = router;
        this.ariaRole = 'presentation';
        this.tabindex = 0;
        this.type = 'horizontal';
        this.subLevelHintIconClosed = 'fa:chevron-right';
        this.subLevelHintIconOpened = 'fa:chevron-down';
        this.subLevelHintIconSide = 'right';
        this.navigationItems = [];
        this.select = new _angular_core.EventEmitter();
    }
    NavigationComponent.prototype.ngAfterContentInit = function () {
        var templateItemsAr = this.templateItems.toArray();
        if (templateItemsAr.length > 0) {
            var items_1 = [];
            templateItemsAr.map(function (i) { return items_1.push(i.toObject()); });
            this.navigationItems = items_1;
        }
        var selectedItem = this._navigationItems.filter(function (item) { return item.selected; })[0];
        if (selectedItem) {
            this.selectItem(selectedItem);
        }
    };
    Object.defineProperty(NavigationComponent.prototype, "_navigationItems", {
        get: function () {
            return this.navigationItems.filter(function (item) { return item.active; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "isVertical", {
        get: function () {
            return this.type === 'vertical';
        },
        enumerable: true,
        configurable: true
    });
    NavigationComponent.prototype.getPrepIcon = function (item) {
        return item.items && this.subLevelHintIconSide === 'left'
            ? item.opened
                ? this.subLevelHintIconOpened
                : this.subLevelHintIconClosed
            : item.prepIcon;
    };
    NavigationComponent.prototype.getAppIcon = function (item) {
        return item.items && this.subLevelHintIconSide === 'right'
            ? item.opened
                ? this.subLevelHintIconOpened
                : this.subLevelHintIconClosed
            : item.appIcon;
    };
    NavigationComponent.prototype.selectItem = function (item) {
        if (item == this.selectedItem || item.items) {
            return;
        }
        if (this.selectedItem) {
            this.selectedItem.selected = false;
        }
        item.selected = true;
        this.selectedItem = item;
        if (item.href) {
            window.location.href = item.href;
        }
        else if (item.route) {
            this.router.navigate(item.route);
        }
        this.select.emit(item);
    };
    NavigationComponent.prototype.onSelect = function (item) {
        if (this.selectedItem) {
            this.selectedItem.selected = false;
        }
        this.selectedItem = item;
        this.select.emit(item);
    };
    NavigationComponent.prototype.toggleMenu = function (item) {
        item.opened = !item.opened;
    };
    __decorate([
        _angular_core.Input('ident'), 
        __metadata('design:type', String)
    ], NavigationComponent.prototype, "ident", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], NavigationComponent.prototype, "selectedItem", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], NavigationComponent.prototype, "ariaRole", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], NavigationComponent.prototype, "tabindex", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], NavigationComponent.prototype, "type", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], NavigationComponent.prototype, "subLevelHintIconClosed", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], NavigationComponent.prototype, "subLevelHintIconOpened", void 0);
    __decorate([
        _angular_core.Input('subLevelHintIconSide'), 
        __metadata('design:type', Object)
    ], NavigationComponent.prototype, "subLevelHintIconSide", void 0);
    __decorate([
        _angular_core.ContentChildren(NavigationItemComponent), 
        __metadata('design:type', (typeof (_a = typeof _angular_core.QueryList !== 'undefined' && _angular_core.QueryList) === 'function' && _a) || Object)
    ], NavigationComponent.prototype, "templateItems", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Array)
    ], NavigationComponent.prototype, "navigationItems", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', Object)
    ], NavigationComponent.prototype, "select", void 0);
    __decorate([
        _angular_core.HostBinding('class.vclVertical'), 
        __metadata('design:type', Object)
    ], NavigationComponent.prototype, "isVertical", null);
    NavigationComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-navigation',
            host: {
                '[class.vclNavigation]': 'true'
            },
            template: "  <ul>\n    <li *ngFor=\"let item of navigationItems\"\n        [class.vclSelected]=\"item.selected && !item.items\"\n        [class.vclOpen]=\"item.opened\"\n        [class.vclClose]=\"!item.opened\"\n        [class.vclNavigationHeading]=\"item.heading\"\n        [class.vclNavigationItem]=\"!item.heading\"\n        [attr.touch-action]=\"touchAction\"\n        [attr.aria-selected]=\"item.selected\"\n        [attr.role]=\"item.heading && 'sectionhead' || ariaRole\"\n        [attr.tabindex]=\"tabindex\"\n        [ngClass]=\"item.class\"\n        >\n\n      <span *ngIf=\"item.heading\">\n        {{item.label | loc}}\n      </span>\n\n      <a vcl-link class=\"vclNavigationItemLabel\"\n        *ngIf=\"!item.heading\"\n        [label]=\"item.label | loc\"\n        [href]=\"item.href\"\n        [prepIcon]=\"getPrepIcon(item)\"\n        [appIcon]=\"getAppIcon(item)\"\n        (tap)=\"item.items && toggleMenu(item)\"\n        (tap)=\"selectItem(item)\">\n      </a>\n\n      <vcl-navigation *ngIf=\"item.items\"\n          [navigationItems]=\"item.items\"\n          [type]=\"type\"\n          [subLevelHintIconOpened]=\"subLevelHintIconOpened\"\n          [subLevelHintIconClosed]=\"subLevelHintIconClosed\"\n          [subLevelHintIconSide]=\"subLevelHintIconSide\"\n          [selectedItem]=\"selectedItem\"\n          (select)=\"onSelect($event)\">\n      </vcl-navigation>\n    </li>\n  </ul>\n",
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof _angular_router.Router !== 'undefined' && _angular_router.Router) === 'function' && _b) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a, _b;
}());

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
            this._dataSubject = new rxjs_ReplaySubject.ReplaySubject(1);
        }
        return this._dataSubject;
    };
    SyncableObservable.prototype.sync = function () {
        var _this = this;
        var dataSubject = this.getDataSubject();
        if (this.sub) {
            this.sub.unsubscribe();
        }
        var sync$ = new rxjs_Observable.Observable(function (observer) {
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
}(rxjs_Observable.Observable));
// tslint:disable-next-line:only-arrow-functions
rxjs_Observable.Observable.prototype.syncable = function () {
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
var ADV_HTTP_CONFIG = new _angular_core.OpaqueToken('adv.http.config');
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
    ErrorHandlerService.prototype.attach = function (source, errorHandlingStrategy) {
        var _this = this;
        // errorStrategy = errorStrategy || this.config.defaultErrorHandlingStrategy || ErrorHandlingStrategy.default;
        errorHandlingStrategy = errorHandlingStrategy || exports.ErrorHandlingStrategy.default;
        if (errorHandlingStrategy && (errorHandlingStrategy === exports.ErrorHandlingStrategy.notify || typeof errorHandlingStrategy === 'string')) {
            // Catch an error...
            source = source.catch(function (err) {
                // ... and just pass it to the error handler
                // The error is rethrown so it can be catched
                if (errorHandlingStrategy === exports.ErrorHandlingStrategy.notify) {
                    _this.notify(err);
                }
                else {
                    if (!_this[errorHandlingStrategy]) {
                        throw 'Error handling strategy not found: ' + errorHandlingStrategy;
                    }
                    _this[errorHandlingStrategy]();
                }
                return rxjs_Observable.Observable.throw(err);
            });
        }
        else if (errorHandlingStrategy && errorHandlingStrategy === exports.ErrorHandlingStrategy.retry) {
            source = source.retryWhen(function (errors) {
                return errors.switchMap(function (err) {
                    return new rxjs_Observable.Observable(function (observer) {
                        _this.retry(err, function () {
                            observer.next();
                        }, function () {
                            observer.error(err);
                        });
                    });
                });
            });
        }
        return source;
    };
    ErrorHandlerService = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());
var AdvHttp = (function (_super) {
    __extends(AdvHttp, _super);
    function AdvHttp(config, errorHandler, _backend, _defaultOptions) {
        _super.call(this, _backend, _defaultOptions);
        this.config = config;
        this.errorHandler = errorHandler;
    }
    AdvHttp.prototype.request = function (url, options, errorStrategy) {
        var _this = this;
        return _super.prototype.request.call(this, url, options).let(function (o) { return _this.errorHandler.attach(o, errorStrategy || _this.config.defaultErrorHandlingStrategy); });
    };
    
    AdvHttp.prototype.get = function (url, options, errorStrategy) {
        var _this = this;
        return _super.prototype.get.call(this, url, options).let(function (o) { return _this.errorHandler.attach(o, errorStrategy || _this.config.defaultErrorHandlingStrategy); });
    };
    
    AdvHttp.prototype.post = function (url, body, options, errorStrategy) {
        var _this = this;
        return _super.prototype.post.call(this, url, body, options).let(function (o) { return _this.errorHandler.attach(o, errorStrategy || _this.config.defaultErrorHandlingStrategy); });
    };
    
    AdvHttp.prototype.put = function (url, body, options, errorStrategy) {
        var _this = this;
        return _super.prototype.put.call(this, url, body, options).let(function (o) { return _this.errorHandler.attach(o, errorStrategy || _this.config.defaultErrorHandlingStrategy); });
    };
    
    AdvHttp.prototype.delete = function (url, options, errorStrategy) {
        var _this = this;
        return _super.prototype.delete.call(this, url, options).let(function (o) { return _this.errorHandler.attach(o, errorStrategy || _this.config.defaultErrorHandlingStrategy); });
    };
    
    AdvHttp.prototype.patch = function (url, body, options, errorStrategy) {
        var _this = this;
        return _super.prototype.patch.call(this, url, body, options).let(function (o) { return _this.errorHandler.attach(o, errorStrategy || _this.config.defaultErrorHandlingStrategy); });
    };
    
    AdvHttp.prototype.head = function (url, options, errorStrategy) {
        var _this = this;
        return _super.prototype.head.call(this, url, options).let(function (o) { return _this.errorHandler.attach(o, errorStrategy || _this.config.defaultErrorHandlingStrategy); });
    };
    
    AdvHttp.prototype.options = function (url, options, errorStrategy) {
        var _this = this;
        return _super.prototype.options.call(this, url, options).let(function (o) { return _this.errorHandler.attach(o, errorStrategy || _this.config.defaultErrorHandlingStrategy); });
    };
    
    AdvHttp = __decorate([
        _angular_core.Injectable(),
        __param(0, _angular_core.Inject(ADV_HTTP_CONFIG)), 
        __metadata('design:paramtypes', [Object, ErrorHandlerService, (typeof (_a = typeof _angular_http.ConnectionBackend !== 'undefined' && _angular_http.ConnectionBackend) === 'function' && _a) || Object, (typeof (_b = typeof _angular_http.RequestOptions !== 'undefined' && _angular_http.RequestOptions) === 'function' && _b) || Object])
    ], AdvHttp);
    return AdvHttp;
    var _a, _b;
}(_angular_http.Http));
var AdvHttpModule = (function () {
    function AdvHttpModule() {
    }
    AdvHttpModule.forRoot = function (config) {
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
                    useFactory: function (config, errorHandler, backend, defaultOptions) {
                        return new AdvHttp(config, errorHandler, backend, defaultOptions);
                    },
                    deps: [ADV_HTTP_CONFIG, ErrorHandlerService, _angular_http.XHRBackend, _angular_http.RequestOptions]
                },
            ]
        };
    };
    AdvHttpModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_http.HttpModule],
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
                    useFactory: function (config, errorHandler, backend, defaultOptions) {
                        return new AdvHttp(config, errorHandler, backend, defaultOptions);
                    },
                    deps: [ADV_HTTP_CONFIG, ErrorHandlerService, _angular_http.XHRBackend, _angular_http.RequestOptions]
                },
                {
                    provide: ADV_HTTP_CONFIG,
                    useValue: {}
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AdvHttpModule);
    return AdvHttpModule;
}());

var METADATA_KEY = '@ng-vcl/ObservableComponent';
var ObservableComponent = (function () {
    function ObservableComponent() {
        this.changesSubject = new rxjs_ReplaySubject.ReplaySubject();
        this.changes$ = this.changesSubject.asObservable();
    }
    ObservableComponent.prototype.ngOnChanges = function (changes) {
        this.changesSubject.next(changes);
    };
    ObservableComponent.prototype.observeChange = function (propertyName) {
        return this.changes$
            .filter(function (changes) { return changes.hasOwnProperty(propertyName); })
            .map(function (changes) { return changes[propertyName].currentValue; });
    };
    return ObservableComponent;
}());
function Observe(targetProperty) {
    return function (target, propertyName) {
        debugger;
        if (!Reflect.hasOwnMetadata(METADATA_KEY, target)) {
            Reflect.defineMetadata(METADATA_KEY, [], target);
        }
        Reflect.defineMetadata(METADATA_KEY, [propertyName], target);
    };
}

function setAnimations(cls, animations) {
    setAnnotation(cls, 'animations', animations);
}
function setAnnotation(cls, key, value) {
    var annotation = getAnnotation(cls);
    // Change metadata
    annotation[key] = value;
    // Set metadata
    Reflect.defineMetadata('annotations', [new _angular_core.Component(annotation)], cls);
}
function getAnnotation(cls) {
    // Annotation is an array with 1 entry
    // TODO: Check if always one entry
    var clsAnnotations = Reflect.getMetadata('annotations', cls);
    if (!clsAnnotations && clsAnnotations.length < 1) {
        throw new Error('Invalid base class');
    }
    return clsAnnotations[0];
}
// export function SubComponent(annotation: Component) {
//   return (cls: Function) => {
//     const baseCls = Object.getPrototypeOf(cls.prototype).constructor;
//     const baseClsAnnotation = getAnnotation(baseCls);
//     Object.keys(baseClsAnnotation).forEach(key => {
//       if (baseClsAnnotation[key] !== undefined && annotation[key] === undefined) {
//         annotation[key] = baseClsAnnotation[key];
//       }
//     });
//     Reflect.defineMetadata('annotations', [ new Component(annotation) ], cls);
//   };
// };
var EFFECTS_METADATA_KEY = 'ng-vcl/effects';
function Effect() {
    return function (target, propertyName) {
        if (!Reflect.hasOwnMetadata(EFFECTS_METADATA_KEY, target)) {
            Reflect.defineMetadata(EFFECTS_METADATA_KEY, [], target);
        }
        var effectProperties = Reflect.getOwnMetadata(EFFECTS_METADATA_KEY, target);
        Reflect.defineMetadata(EFFECTS_METADATA_KEY, effectProperties.concat([propertyName]), target);
    };
}
function getEffectsMetadata(instance) {
    var target = Object.getPrototypeOf(instance);
    if (!Reflect.hasOwnMetadata(EFFECTS_METADATA_KEY, target)) {
        return [];
    }
    return Reflect.getOwnMetadata(EFFECTS_METADATA_KEY, target);
}

var STORE_REDUCERS = new _angular_core.OpaqueToken('store.reducers');
var STORE_EFFECTS = new _angular_core.OpaqueToken('store.effects');
var STORE_STATE = new _angular_core.OpaqueToken('store.state');
function select(path) {
    var paths = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paths[_i - 1] = arguments[_i];
    }
    var select$;
    if (typeof path === 'string') {
        select$ = this.pluck.apply(this, [path].concat(paths));
    }
    else if (typeof path === 'function') {
        select$ = this.map(path);
    }
    else {
        throw new TypeError("Unexpected type " + typeof path + " in select operator");
    }
    select$ = select$.distinctUntilChanged();
    return new StoreObservable(select$);
}
var StoreObservable = (function (_super) {
    __extends(StoreObservable, _super);
    function StoreObservable(source) {
        _super.call(this);
        this.source = source;
    }
    StoreObservable.prototype.select = function (path) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        return select.call.apply(select, [this, path].concat(paths));
    };
    StoreObservable.prototype.lift = function (operator) {
        var observable = new StoreObservable(this);
        observable.operator = operator;
        return observable;
    };
    return StoreObservable;
}(rxjs_Observable.Observable));

var InitAction = (function () {
    function InitAction() {
    }
    return InitAction;
}());
var StoreActions = (function (_super) {
    __extends(StoreActions, _super);
    function StoreActions() {
        _super.apply(this, arguments);
        // Action dispatcher
        this._dispatcher = new rxjs_Subject.Subject();
        // Action stream ist just the last action
        this.actions$ = this._dispatcher.asObservable();
        this.source = this.actions$;
    }
    StoreActions.prototype.ofType = function () {
        var actionClasses = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actionClasses[_i - 0] = arguments[_i];
        }
        return this.actions$.filter(function (action) { return actionClasses.some(function (cls) { return action instanceof cls; }); });
    };
    StoreActions.prototype.dispatch = function (action) {
        this._dispatcher.next(action);
    };
    StoreActions.prototype.next = function (action) {
        this.dispatch(action);
    };
    StoreActions.prototype.error = function (err) { };
    StoreActions.prototype.complete = function () { };
    StoreActions = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StoreActions);
    return StoreActions;
}(rxjs_Observable.Observable));
var Store = (function (_super) {
    __extends(Store, _super);
    function Store(actions$, initialState, reducers) {
        _super.call(this);
        this.actions$ = actions$;
        this.initialState = initialState;
        // Reducers dispatcher
        this._reducers = new rxjs_BehaviorSubject.BehaviorSubject({});
        // Reducers stream
        this.reducers$ = this._reducers.asObservable().scan(function (reducers, currentReducers) {
            return Object.assign({}, reducers, currentReducers);
        }, {});
        // The state changes when an action is dispatched by running reducers
        // The new state is then cached for further subscribers 
        this.state$ = this.actions$.withLatestFrom(this.reducers$).scan(function (currentState, _a) {
            var action = _a[0], reducers = _a[1];
            var state = Object.assign({}, currentState);
            Object.keys(reducers).forEach(function (key) {
                var reducer = reducers[key];
                state[key] = reducer(currentState[key], action);
            });
            return state;
        }, this.initialState).publishReplay(1);
        // The source of the store observable is also the state stream
        this.source = this.state$;
        this.addReducers(reducers);
        // Listen to actions by connecting the state observable
        this.stateSub = this.state$.connect();
        // Init action
        this.dispatch(new InitAction());
    }
    Store.prototype.dispatch = function (action) {
        if (action) {
            this.actions$.dispatch(action);
        }
    };
    Store.prototype.addReducers = function (reducers) {
        this._reducers.next(reducers);
    };
    Store.prototype.select = function (path) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        return select.call.apply(select, [this, path].concat(paths));
    };
    Store.prototype.next = function (action) {
        this.dispatch(action);
    };
    Store.prototype.error = function (err) { };
    Store.prototype.complete = function () { };
    Store.prototype.ngOnDestroy = function () {
        if (this.stateSub && !this.stateSub.closed)
            this.stateSub.unsubscribe();
    };
    Store = __decorate([
        _angular_core.Injectable(),
        __param(1, _angular_core.Inject(STORE_STATE)),
        __param(2, _angular_core.Inject(STORE_REDUCERS)), 
        __metadata('design:paramtypes', [StoreActions, Object, Object])
    ], Store);
    return Store;
}(rxjs_Observable.Observable));
var Effects = (function () {
    function Effects(store, effects) {
        this.store = store;
        this.effectSubs = [];
        this.addEffects(effects);
    }
    Effects.prototype.addEffects = function (effectInstances) {
        var _this = this;
        var eiArr = Array.isArray(effectInstances) ? effectInstances : [effectInstances];
        eiArr.forEach(function (instance) {
            if (instance) {
                var properties = getEffectsMetadata(instance);
                var effects$ = rxjs_observable_merge.merge.apply(void 0, (properties.map(function (property) { return instance[property]; })));
                var sub = effects$.subscribe(_this.store);
                _this.effectSubs.push(sub);
            }
        });
    };
    Effects.prototype.ngOnDestroy = function () {
        this.effectSubs.slice().filter(function (sub) { return sub && !sub.closed; }).forEach(function (sub) { return sub.unsubscribe(); });
    };
    Effects = __decorate([
        _angular_core.Injectable(),
        __param(1, _angular_core.Optional()),
        __param(1, _angular_core.Inject(STORE_EFFECTS)), 
        __metadata('design:paramtypes', [Store, Array])
    ], Effects);
    return Effects;
}());
var compose = function () {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i - 0] = arguments[_i];
    }
    return function (arg) {
        if (functions.length === 0) {
            return arg;
        }
        var last = functions[functions.length - 1];
        var rest = functions.slice(0, -1);
        return rest.reduceRight(function (composed, fn) { return fn(composed); }, last(arg));
    };
};
var StoreModule = (function () {
    function StoreModule() {
    }
    StoreModule.forRoot = function (config) {
        return {
            ngModule: StoreModule,
            providers: [
                StoreActions,
                Store,
                Effects,
                {
                    provide: STORE_STATE,
                    useValue: config.state || {}
                },
                {
                    provide: STORE_REDUCERS,
                    useValue: config.reducers || {}
                }
            ].concat((config.effects || []).map(function (type) {
                return {
                    provide: STORE_EFFECTS,
                    useClass: type,
                    multi: true
                };
            }))
        };
    };
    StoreModule = __decorate([
        _angular_core.NgModule({
            providers: [
                StoreActions,
                Store,
                Effects,
                {
                    provide: STORE_STATE,
                    useValue: {}
                },
                {
                    provide: STORE_REDUCERS,
                    useValue: {}
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], StoreModule);
    return StoreModule;
}());

var LinkComponent = (function (_super) {
    __extends(LinkComponent, _super);
    function LinkComponent(l10n) {
        var _this = this;
        _super.call(this);
        this.l10n = l10n;
        this.locTitle$ = this.observeChange('title').switchMap(function (title) { return _this.l10n.localize(title); });
    }
    Object.defineProperty(LinkComponent.prototype, "attrHref", {
        get: function () {
            if (this.disabled)
                return null;
            return this.scheme
                ? this.scheme + ":" + this.href
                : this.href;
        },
        enumerable: true,
        configurable: true
    });
    LinkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locTitleSub = this.locTitle$.subscribe(function (title) { return _this.locTitle = title; });
    };
    LinkComponent.prototype.ngOnDestroy = function () {
        this.locTitleSub.unsubscribe();
    };
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "href", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "label", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "title", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "scheme", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "prepIcon", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "appIcon", void 0);
    __decorate([
        _angular_core.HostBinding('class.vclDisabled'),
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], LinkComponent.prototype, "disabled", void 0);
    __decorate([
        _angular_core.HostBinding('attr.href'), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "attrHref", null);
    __decorate([
        _angular_core.HostBinding('attr.title'),
        _angular_core.HostBinding('attr.aria-label'), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "locTitle", void 0);
    LinkComponent = __decorate([
        _angular_core.Component({
            selector: '[vcl-link]',
            template: "<ng-content></ng-content>\n<vcl-icogram \n  [label]=\"(label | loc) || href\"\n  [prepIcon]=\"prepIcon\"\n  [appIcon]=\"appIcon\">\n</vcl-icogram>\n",
            host: {
                '[attr.touch-action]': 'touchAction' // TODO - no function?
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof L10nService !== 'undefined' && L10nService) === 'function' && _a) || Object])
    ], LinkComponent);
    return LinkComponent;
    var _a;
}(ObservableComponent));

var VCLLinkModule = (function () {
    function VCLLinkModule() {
    }
    VCLLinkModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, L10nModule, VCLIcogramModule],
            exports: [LinkComponent],
            declarations: [LinkComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLLinkModule);
    return VCLLinkModule;
}());

var VCLNavigationModule = (function () {
    function VCLNavigationModule() {
    }
    VCLNavigationModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, L10nModule, VCLLinkModule],
            exports: [NavigationComponent, NavigationItemComponent],
            declarations: [NavigationComponent, NavigationItemComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLNavigationModule);
    return VCLNavigationModule;
}());

var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.ariaLevel = 1;
    }
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], ToolbarComponent.prototype, "ariaLevel", void 0);
    ToolbarComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-toolbar',
            template: '<ng-content></ng-content>',
            host: {
                '[class.vclToolbar]': 'true',
                '[class.vclLayoutHorizontal]': 'true',
                '[class.vclLayoutJustified]': 'true',
                '[class.vclSecondary]': 'ariaLevel == 2',
                '[attr.aria-level]': 'ariaLevel',
                '[attr.role]': '"menubar"',
            }
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());

var VCLToolbarModule = (function () {
    function VCLToolbarModule() {
    }
    VCLToolbarModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, L10nModule],
            exports: [ToolbarComponent],
            declarations: [ToolbarComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLToolbarModule);
    return VCLToolbarModule;
}());

var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$3 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return RadioButtonComponent; }),
    multi: true
};
var RadioButtonComponent = (function () {
    function RadioButtonComponent(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.checkedIcon = 'fa:dot-circle-o';
        this.uncheckedIcon = 'fa:circle-o';
        this.disabled = false;
        this.labelPosition = 'right';
        this.tabindex = 0;
        /**
        Refelects the checked state, `true` is checked and `false` is unchecked
        @public
        */
        this.checked = false;
        /**
        Action fired when the `checked` state changes due to user interaction.
        */
        this._checkedChange = new _angular_core.EventEmitter();
        this._checkedChange.subscribe(function (newVal) {
            !!_this.onChangeCallback && _this.onChangeCallback(newVal);
        });
    }
    Object.defineProperty(RadioButtonComponent.prototype, "checkedChange", {
        get: function () {
            return this._checkedChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    
    RadioButtonComponent.prototype.ngOnInit = function () { };
    RadioButtonComponent.prototype.ngOnChanges = function (changes) {
        if (changes['checked']) {
            var checked = changes['checked'].currentValue;
            // this._checkedChange.emit(checked);
            this.focusMaintenance(checked);
        }
    };
    Object.defineProperty(RadioButtonComponent.prototype, "clsVclDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "attrAriaDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "attrChecked", {
        get: function () {
            return !!this.checked;
        },
        enumerable: true,
        configurable: true
    });
    RadioButtonComponent.prototype.onKeyup = function (e) {
        if (e.keyCode === 32) {
            return this.triggerChangeAction(e);
        }
    };
    RadioButtonComponent.prototype.onClick = function (e) {
        return this.triggerChangeAction(e);
    };
    RadioButtonComponent.prototype.triggerChangeAction = function (e) {
        e.preventDefault();
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this._checkedChange.emit(this.checked);
    };
    RadioButtonComponent.prototype.focusMaintenance = function (checked) {
        if (this.checked === true && this.elementRef.nativeElement) {
            this.elementRef.nativeElement.focus();
        }
    };
    Object.defineProperty(RadioButtonComponent.prototype, "icon", {
        get: function () {
            return this.checked ? this.checkedIcon : this.uncheckedIcon;
        },
        enumerable: true,
        configurable: true
    });
    RadioButtonComponent.prototype.writeValue = function (value) {
        if (value !== this.checked) {
            this.checked = value;
        }
    };
    RadioButtonComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    RadioButtonComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "checkedIcon", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "uncheckedIcon", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "disabled", void 0);
    __decorate([
        _angular_core.Input('labelPosition'), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "labelPosition", void 0);
    __decorate([
        _angular_core.HostBinding('attr.tabindex'),
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "tabindex", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "checked", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', (typeof (_a = typeof rxjs_Observable.Observable !== 'undefined' && rxjs_Observable.Observable) === 'function' && _a) || Object)
    ], RadioButtonComponent.prototype, "checkedChange", null);
    __decorate([
        _angular_core.HostBinding('class.vclDisabled'), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "clsVclDisabled", null);
    __decorate([
        _angular_core.HostBinding('attr.aria-disabled'), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "attrAriaDisabled", null);
    __decorate([
        _angular_core.HostBinding('attr.checked'), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "attrChecked", null);
    __decorate([
        _angular_core.HostListener('keyup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], RadioButtonComponent.prototype, "onKeyup", null);
    __decorate([
        _angular_core.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], RadioButtonComponent.prototype, "onClick", null);
    RadioButtonComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-radio-button',
            template: "<vcl-icon [icon]=\"icon\" *ngIf=\"labelPosition=='right'\"></vcl-icon>\n<ng-content></ng-content>\n<vcl-icon [icon]=\"icon\" *ngIf=\"labelPosition=='left'\"></vcl-icon>\n",
            host: {
                '[attr.role]': '"radio"',
                '[class.vclCheckbox]': 'true',
                '[class.vclScale130p]': 'true',
            },
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$3]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof _angular_core.ElementRef !== 'undefined' && _angular_core.ElementRef) === 'function' && _b) || Object])
    ], RadioButtonComponent);
    return RadioButtonComponent;
    var _a, _b;
}());

var VCLRadioButtonModule = (function () {
    function VCLRadioButtonModule() {
    }
    VCLRadioButtonModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, VCLIconModule],
            exports: [RadioButtonComponent],
            declarations: [RadioButtonComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLRadioButtonModule);
    return VCLRadioButtonModule;
}());

var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$4 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return CheckboxComponent; }),
    multi: true
};
var CheckboxComponent = (function () {
    function CheckboxComponent(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.checkedIcon = 'fa:check-square-o';
        this.uncheckedIcon = 'fa:square-o';
        this.disabled = false;
        this.labelPosition = 'right';
        this.tabindex = 0;
        /**
        Reflects the checked state, `true` is checked and `false` is unchecked
        @public
        */
        this.checked = false;
        /**
        Action fired when the `checked` state changes due to user interaction.
        */
        this._checkedChange = new _angular_core.EventEmitter();
        this._checkedChange.subscribe(function (newVal) {
            !!_this.onChangeCallback && _this.onChangeCallback(newVal);
        });
    }
    Object.defineProperty(CheckboxComponent.prototype, "checkedChange", {
        get: function () {
            return this._checkedChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    
    CheckboxComponent.prototype.ngOnInit = function () { };
    CheckboxComponent.prototype.ngOnChanges = function (changes) {
        if (changes['checked']) {
            var checked = changes['checked'].currentValue;
            // this._checkedChange.emit(checked);
            this.focusMaintenance(checked);
        }
    };
    Object.defineProperty(CheckboxComponent.prototype, "clsVclDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "attrAriaDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "attrChecked", {
        get: function () {
            return !!this.checked;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.onKeyup = function (e) {
        if (e.keyCode === 32) {
            return this.triggerChangeAction(e);
        }
    };
    CheckboxComponent.prototype.onClick = function (e) {
        return this.triggerChangeAction(e);
    };
    CheckboxComponent.prototype.triggerChangeAction = function (e) {
        e.preventDefault();
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this._checkedChange.emit(this.checked);
    };
    CheckboxComponent.prototype.focusMaintenance = function (checked) {
        if (this.checked === true && this.elementRef.nativeElement) {
            this.elementRef.nativeElement.focus();
        }
    };
    Object.defineProperty(CheckboxComponent.prototype, "icon", {
        get: function () {
            return this.checked ? this.checkedIcon : this.uncheckedIcon;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.writeValue = function (value) {
        if (value !== this.checked) {
            this.checked = value;
        }
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "checkedIcon", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "uncheckedIcon", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "disabled", void 0);
    __decorate([
        _angular_core.Input('labelPosition'), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "labelPosition", void 0);
    __decorate([
        _angular_core.HostBinding('attr.tabindex'),
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "tabindex", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "checked", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', (typeof (_a = typeof rxjs_Observable.Observable !== 'undefined' && rxjs_Observable.Observable) === 'function' && _a) || Object)
    ], CheckboxComponent.prototype, "checkedChange", null);
    __decorate([
        _angular_core.HostBinding('class.vclDisabled'), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "clsVclDisabled", null);
    __decorate([
        _angular_core.HostBinding('attr.aria-disabled'), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "attrAriaDisabled", null);
    __decorate([
        _angular_core.HostBinding('attr.checked'), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "attrChecked", null);
    __decorate([
        _angular_core.HostListener('keyup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CheckboxComponent.prototype, "onKeyup", null);
    __decorate([
        _angular_core.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CheckboxComponent.prototype, "onClick", null);
    CheckboxComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-checkbox',
            template: "  <vcl-icon [icon]=\"icon\" *ngIf=\"labelPosition=='right'\"></vcl-icon>\n  <ng-content></ng-content>\n  <vcl-icon [icon]=\"icon\" *ngIf=\"labelPosition=='left'\"></vcl-icon>\n",
            host: {
                '[attr.role]': '"checkbox"',
                '[class.vclCheckbox]': 'true',
                '[class.vclScale130p]': 'true',
            },
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$4]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof _angular_core.ElementRef !== 'undefined' && _angular_core.ElementRef) === 'function' && _b) || Object])
    ], CheckboxComponent);
    return CheckboxComponent;
    var _a, _b;
}());

var VCLCheckboxModule = (function () {
    function VCLCheckboxModule() {
    }
    VCLCheckboxModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, VCLIconModule],
            exports: [CheckboxComponent],
            declarations: [CheckboxComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLCheckboxModule);
    return VCLCheckboxModule;
}());

var FormControlLabelComponent = (function () {
    function FormControlLabelComponent() {
        this.disabled = false;
        this.requiredIndicatorCharacter = '•';
        // Whether the label prepends the child content
        this.prepend = false;
        // Whether the label wraps the labelled control
        this.wrapping = false;
        // Whether an indicator that an input in to the labelled control is required
        this.required = false;
    }
    __decorate([
        _angular_core.Input(),
        _angular_core.HostBinding('class.vclDisabled'), 
        __metadata('design:type', Boolean)
    ], FormControlLabelComponent.prototype, "disabled", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], FormControlLabelComponent.prototype, "requiredIndicatorCharacter", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], FormControlLabelComponent.prototype, "label", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], FormControlLabelComponent.prototype, "subLabel", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], FormControlLabelComponent.prototype, "prepend", void 0);
    __decorate([
        _angular_core.Input(),
        _angular_core.HostBinding('class.vclFormControlLabelWrapping'), 
        __metadata('design:type', Boolean)
    ], FormControlLabelComponent.prototype, "wrapping", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], FormControlLabelComponent.prototype, "required", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], FormControlLabelComponent.prototype, "requiredIndLabel", void 0);
    FormControlLabelComponent = __decorate([
        _angular_core.Component({
            selector: '[vcl-form-control-label]',
            template: "<ng-content *ngIf=\"prepend\"></ng-content>\n{{label | loc}}\n<em *ngIf=\"required\" class=\"vclRequiredIndicator\" aria-hidden=\"true\" [attr.aria-label]=\"requiredIndLabel | loc\">\n  {{requiredIndicatorCharacter}}\n</em>\n<label *ngIf=\"subLabel\" class=\"vclFormControlSubLabel\">\n  {{subLabel | loc}}\n</label>\n<ng-content *ngIf=\"!prepend\"></ng-content>\n",
            host: {
                '[class.vclFormControlLabel]': 'true',
            }
        }), 
        __metadata('design:paramtypes', [])
    ], FormControlLabelComponent);
    return FormControlLabelComponent;
}());

var VCLFormControlLabelModule = (function () {
    function VCLFormControlLabelModule() {
    }
    VCLFormControlLabelModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, VCLIconModule, L10nModule],
            exports: [FormControlLabelComponent],
            declarations: [FormControlLabelComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLFormControlLabelModule);
    return VCLFormControlLabelModule;
}());

var FormInputControlGroup = (function () {
    function FormInputControlGroup() {
        this.inline = false;
    }
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], FormInputControlGroup.prototype, "inline", void 0);
    FormInputControlGroup = __decorate([
        _angular_core.Component({
            selector: 'vcl-input-control-group',
            template: "<div [class.vclInputControlGroup]=\"!inline\" [class.vclInputInlineControlGroup]=\"inline\"><ng-content></ng-content></div>"
        }), 
        __metadata('design:paramtypes', [])
    ], FormInputControlGroup);
    return FormInputControlGroup;
}());
var FormComponent = (function () {
    function FormComponent() {
        this.layout = 'vertical';
        this.valueChange = new _angular_core.EventEmitter(); // emits ngForm
    }
    FormComponent.prototype.onSubmitTemplateBased = function () {
    };
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent.prototype.ngSubmit = function (form) {
        this.valueChange.emit(form);
    };
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], FormComponent.prototype, "layout", void 0);
    __decorate([
        _angular_core.Output('ngSubmit'), 
        __metadata('design:type', Object)
    ], FormComponent.prototype, "valueChange", void 0);
    FormComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-form',
            template: "<form  #form=\"ngForm\" class=\"vclForm\"\n [class.vclFormInline]=\"true\"\n [class.vclFormHorizontal]=\"layout=='horizontal'\">\n\n\n\n\n\n\n\n\n</form>\n",
            host: {
                '[class.vclForm]': 'true',
            }
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());

var VCLFormModule = (function () {
    function VCLFormModule() {
    }
    VCLFormModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_forms.ReactiveFormsModule, _angular_forms.FormsModule],
            exports: [FormComponent, FormInputControlGroup, _angular_forms.FormsModule, _angular_forms.ReactiveFormsModule],
            declarations: [FormComponent, FormInputControlGroup]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLFormModule);
    return VCLFormModule;
}());

var JSONEditor = require('jsoneditor/dist/jsoneditor.js');
// TODO include this css-file without breaking everything else
// require('style!jsoneditor/dist/jsoneditor.css');
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$5 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return JsonEditorComponent; }),
    multi: true
};
var JsonEditorComponent = (function () {
    function JsonEditorComponent() {
        this.mode = 'tree';
        this.value = {};
        /**
         * @link https://github.com/josdejong/jsoneditor/blob/master/docs/api.md
         */
        this.options = {};
        this.height = '250px';
    }
    JsonEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.options.onChange = function () {
            _this.value = _this.editor.get();
            !!_this.onChangeCallback && _this.onChangeCallback(_this.value);
        };
        this.options.onModeChange = function (newMode) {
            _this.mode = newMode;
        };
        this.editor = new JSONEditor(this.el.nativeElement, this.options);
        this.editor.set(this.value);
    };
    /**
     * get the current state of the edited json
     */
    JsonEditorComponent.prototype.getValue = function () {
        return this.editor.get();
    };
    JsonEditorComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.editor.set(this.value);
    };
    JsonEditorComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    JsonEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        _angular_core.ViewChild('el'), 
        __metadata('design:type', Object)
    ], JsonEditorComponent.prototype, "el", void 0);
    __decorate([
        _angular_core.Input('mode'), 
        __metadata('design:type', Object)
    ], JsonEditorComponent.prototype, "mode", void 0);
    __decorate([
        _angular_core.Input('value'), 
        __metadata('design:type', Object)
    ], JsonEditorComponent.prototype, "value", void 0);
    __decorate([
        _angular_core.Input('options'), 
        __metadata('design:type', Object)
    ], JsonEditorComponent.prototype, "options", void 0);
    __decorate([
        _angular_core.Input('height'), 
        __metadata('design:type', String)
    ], JsonEditorComponent.prototype, "height", void 0);
    JsonEditorComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-json-editor',
            template: "<div #el [style.height]=\"height\"></div>\n",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$5]
        }), 
        __metadata('design:paramtypes', [])
    ], JsonEditorComponent);
    return JsonEditorComponent;
}());

var VCLJsonEditorModule = (function () {
    function VCLJsonEditorModule() {
    }
    VCLJsonEditorModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, L10nModule, VCLMetalistModule],
            exports: [JsonEditorComponent],
            declarations: [JsonEditorComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLJsonEditorModule);
    return VCLJsonEditorModule;
}());

var MonthPickerComponent = (function () {
    function MonthPickerComponent() {
        this.yearMeta = {};
        this.prevYearBtnIcon = "fa:chevron-left";
        this.nextYearBtnIcon = "fa:chevron-right";
        this.closeBtnIcon = "fa:times";
        this.monthsPerRow = 3;
        this.expandable = false;
        this.expanded = true;
        this.expandedChange = new _angular_core.EventEmitter();
        this.maxYear = Number.MAX_SAFE_INTEGER;
        this.currentYear = new Date().getUTCFullYear();
        this.currentYearChange = new _angular_core.EventEmitter();
        this.useShortNames = false;
        this.useAvailableMonths = false;
        this.colors = null;
        this.minSelectableItems = 1;
        this.prevYearAvailable = false;
        this.nextYearAvailable = false;
        this.prevYearBtnTap = new _angular_core.EventEmitter();
        this.nextYearBtnTap = new _angular_core.EventEmitter();
        this.select = new _angular_core.EventEmitter();
        this.deselect = new _angular_core.EventEmitter();
        this.tabindex = 0;
    }
    MonthPickerComponent.prototype.ngOnInit = function () {
        // TODO: Localize here instead of in the template so outside components
        // when calling month-picker.getMonth(month) get calendar's localized and used label.
        this.months = (this.useShortNames ? MonthPickerComponent.monthNamesShort :
            MonthPickerComponent.monthNames).map(function (month) { return ({
            label: month
        }); });
        if (!this.maxSelectableItems) {
            this.maxSelectableItems = this.colors && this.colors.length || 1;
        }
        this.availableColors = this.colors ? this.colors.map(function (color) { return true; }) : [];
        this.setYearMeta(this.currentYear);
    };
    MonthPickerComponent.prototype.setYearMeta = function (year) {
        if (!this.yearMeta[year]) {
            this.yearMeta[year] = this.createYearMeta(year);
        }
        this.currentMeta = this.yearMeta[year];
    };
    MonthPickerComponent.prototype.createYearMeta = function (year) {
        return this.months.map(function (monthMeta) { return new Object(); });
    };
    MonthPickerComponent.prototype.selectMonth = function (month, year) {
        if (year === void 0) { year = this.currentYear; }
        if (!this.isMonthAvailable(month, year)) {
            return;
        }
        var monthMeta = this.getYearMeta(year)[month];
        if (monthMeta.selected) {
            return this.deselectMonth(month, year);
        }
        if (this.maxSelectableItems === 1) {
            this.iterateMonthMetas(function (month, year, mMeta) {
                mMeta.selected = mMeta === monthMeta;
            });
        }
        else if (this.getSelectedDates().length < this.maxSelectableItems) {
            monthMeta.selected = true;
        }
        if (monthMeta.selected) {
            this.setMonthBackgroundColor(month, year);
            this.notifySelect(year + "." + month);
            if (this.maxSelectableItems === 1 && this.expandable) {
                this.expanded = false;
                this.expandedChange.emit(this.expanded);
            }
        }
    };
    MonthPickerComponent.prototype.isMonthAvailable = function (month, year) {
        return this.isDateInBounds(month, year) && (!this.useAvailableMonths ||
            this.yearMeta[year] && this.yearMeta[year][month].available);
    };
    MonthPickerComponent.prototype.isDateInBounds = function (month, year) {
        return this.isMonthInBounds(month) && this.isYearInBounds(year);
    };
    MonthPickerComponent.prototype.isMonthInBounds = function (month) {
        return month > -1 && month < this.months.length;
    };
    MonthPickerComponent.prototype.isYearInBounds = function (year) {
        return year > -1 && year < this.maxYear;
    };
    MonthPickerComponent.prototype.getYearMeta = function (year) {
        if (!this.yearMeta[year]) {
            this.yearMeta[year] = this.createYearMeta(year);
        }
        return this.yearMeta[year];
    };
    MonthPickerComponent.prototype.iterateMonthMetas = function (cb) {
        var _this = this;
        Object.keys(this.yearMeta).forEach(function (year) {
            _this.yearMeta[year].forEach(function (monthMeta, month) {
                cb(month, +year, monthMeta);
            });
        });
    };
    MonthPickerComponent.prototype.getSelectedDates = function () {
        var _this = this;
        var selectedDates = [];
        Object.keys(this.yearMeta).forEach(function (year) {
            _this.yearMeta[year].forEach(function (monthMeta, month) {
                if (monthMeta.selected) {
                    selectedDates.push(year + "." + month);
                }
            });
        });
        return selectedDates;
    };
    MonthPickerComponent.prototype.setMonthBackgroundColor = function (month, year) {
        var color = this.getMonthBackgroundColor();
        if (color) {
            var monthMeta = this.getYearMeta(year)[month];
            monthMeta.color = color;
        }
    };
    MonthPickerComponent.prototype.getMonthBackgroundColor = function () {
        var index = this.availableColors.findIndex(function (available) { return available; });
        if (index !== -1) {
            this.availableColors[index] = false;
            return this.colors[index];
        }
    };
    MonthPickerComponent.prototype.deselectMonth = function (month, year) {
        if (year === void 0) { year = this.currentYear; }
        if (this.isMonthSelected(month, year)) {
            var monthMeta = this.getYearMeta(year)[month];
            monthMeta.selected = false;
            this.clearMonthBackgroundColor(month, year);
            this.notifyDeselect(year + "." + month);
        }
    };
    MonthPickerComponent.prototype.isMonthSelected = function (month, year) {
        return this.isDateInBounds(month, year) &&
            this.yearMeta[year] && this.yearMeta[year][month].selected;
    };
    MonthPickerComponent.prototype.clearMonthBackgroundColor = function (month, year) {
        if (this.availableColors) {
            var monthMeta = this.getYearMeta(year)[month];
            if (monthMeta.color) {
                var index = this.colors.indexOf(monthMeta.color);
                this.availableColors[index] = true;
                monthMeta.color = undefined;
            }
        }
    };
    MonthPickerComponent.prototype.deselectAllMonths = function () {
        var _this = this;
        this.iterateMonthMetas(function (month, year, monthMeta) {
            monthMeta.selected = false;
            _this.clearMonthBackgroundColor(month, year);
            _this.notifyDeselect(year + "." + month);
        });
    };
    MonthPickerComponent.prototype.addAvailableMonth = function (month, year) {
        if (this.isDateInBounds(month, year)) {
            this.getYearMeta(year)[month].available = true;
        }
    };
    MonthPickerComponent.prototype.removeAvailableMonth = function (month, year) {
        if (this.isDateInBounds(month, year) && this.yearMeta[year]) {
            this.yearMeta[year][month].available = false;
        }
    };
    MonthPickerComponent.prototype.removeAllAvailableMonths = function () {
        this.iterateMonthMetas(function (month, year, monthMeta) {
            monthMeta.available = false;
        });
    };
    MonthPickerComponent.prototype.onPrevYearTap = function () {
        if (this.prevYearAvailable) {
            this.currentYear--;
            this.setYearMeta(this.currentYear);
            this.currentYearChange.emit(this.currentYear);
            this.prevYearBtnTap.emit();
        }
    };
    MonthPickerComponent.prototype.onNextYearTap = function () {
        if (this.nextYearAvailable) {
            this.currentYear++;
            this.setYearMeta(this.currentYear);
            this.currentYearChange.emit(this.currentYear);
            this.nextYearBtnTap.emit();
        }
    };
    MonthPickerComponent.prototype.onCloseBtnTap = function () {
        if (this.expandable) {
            if (this.expanded) {
                this.expanded = false;
                this.expandedChange.emit(this.expanded);
            }
        }
    };
    MonthPickerComponent.prototype.notifySelect = function (date) {
        this.select.emit(date);
    };
    MonthPickerComponent.prototype.notifyDeselect = function (date) {
        this.deselect.emit(date);
    };
    MonthPickerComponent.prototype.isCurrentMonth = function (month, year) {
        if (year === void 0) { year = this.currentYear; }
        var now = new Date();
        return now.getFullYear() == year && now.getUTCMonth() === month;
    };
    MonthPickerComponent.prototype.getMonth = function (month) {
        return this.isMonthInBounds(month) ? this.months[month] : null;
    };
    MonthPickerComponent.monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    MonthPickerComponent.monthNamesShort = MonthPickerComponent.monthNames
        .map(function (name) { return name.substr(0, 3); });
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], MonthPickerComponent.prototype, "prevYearBtnIcon", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], MonthPickerComponent.prototype, "nextYearBtnIcon", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], MonthPickerComponent.prototype, "closeBtnIcon", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], MonthPickerComponent.prototype, "monthsPerRow", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], MonthPickerComponent.prototype, "expandable", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], MonthPickerComponent.prototype, "expanded", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', (typeof (_a = typeof _angular_core.EventEmitter !== 'undefined' && _angular_core.EventEmitter) === 'function' && _a) || Object)
    ], MonthPickerComponent.prototype, "expandedChange", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], MonthPickerComponent.prototype, "maxYear", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], MonthPickerComponent.prototype, "currentYear", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', (typeof (_b = typeof _angular_core.EventEmitter !== 'undefined' && _angular_core.EventEmitter) === 'function' && _b) || Object)
    ], MonthPickerComponent.prototype, "currentYearChange", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], MonthPickerComponent.prototype, "useShortNames", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], MonthPickerComponent.prototype, "useAvailableMonths", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Array)
    ], MonthPickerComponent.prototype, "colors", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], MonthPickerComponent.prototype, "maxSelectableItems", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], MonthPickerComponent.prototype, "minSelectableItems", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], MonthPickerComponent.prototype, "prevYearAvailable", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], MonthPickerComponent.prototype, "nextYearAvailable", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', Object)
    ], MonthPickerComponent.prototype, "prevYearBtnTap", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', Object)
    ], MonthPickerComponent.prototype, "nextYearBtnTap", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', Object)
    ], MonthPickerComponent.prototype, "select", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', Object)
    ], MonthPickerComponent.prototype, "deselect", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Number)
    ], MonthPickerComponent.prototype, "tabindex", void 0);
    MonthPickerComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-month-picker',
            template: "<div class=\"vclDatePicker\"\n    [class.vclLayoutHidden]=\"!expanded\">\n  <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\"\n    [attr.role]=\"grid\"\n    [attr.tabindex]=\"tabindex\"\n    [attr.aria-multiselectable]=\"maxSelectableItems > 1\"\n    [attr.aria-expanded]=\"expanded\">\n\n    <div class=\"vclDGRow\">\n      <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\n        <button vcl-button class=\"vclButton vclTransparent vclSquare\"\n          [class.vclDisabled]=\"!prevYearAvailable\"\n          [appIcon]=\"prevYearBtnIcon\"\n          (tap)=\"onPrevYearTap()\">\n        </button>\n\n        <span class=\"vclCalHeaderLabel\">{{ currentYear }}</span>\n\n        <button vcl-button class=\"vclButton vclTransparent vclSquare\"\n          [class.vclDisabled]=\"!nextYearAvailable\"\n          [appIcon]=\"nextYearBtnIcon\"\n          (tap)=\"onNextYearTap()\">\n        </button>\n\n        <button vcl-button *ngIf=\"expandable\" class=\"vclButton vclTransparent vclSquare\"\n          [appIcon]=\"closeBtnIcon\"\n          (tap)=\"onCloseBtnTap()\">\n        </button>\n      </div>\n    </div>\n\n    <div class=\"vclSeparator\"></div>\n\n    <template ngFor let-iM [ngForOf]=\"months\" let-i=\"index\">\n      <div *ngIf=\"i % monthsPerRow === 0\" class=\"vclDGRow\" role=\"row\">\n        <div *ngFor=\"let jM of months.slice(i, (i + monthsPerRow > months.length ? months.length : i + monthsPerRow)); let j = index;\"\n          (tap)=\"selectMonth(i+j)\"\n          class=\"vclDGCell vclCalItem\"\n          [class.vclAvailable]=\"!useAvailableMonths || currentMeta[i+j].available\"\n          [class.vclUnavailable]=\"useAvailableMonths && !currentMeta[i+j].available\"\n          [class.vclToday]=\"isCurrentMonth(i+j)\"\n          [class.vclOtherMonth]=\"!isCurrentMonth(i+j)\"\n          [class.vclDisabled]=\"useAvailableMonths && !currentMeta[i+j].available\"\n          [class.vclSelected]=\"currentMeta[i+j].selected\"\n          [style.background-color]=\"currentMeta[i+j].color\"\n          [style.order]=\"i+j\"\n          [attr.aria-selected]=\"currentMeta[i+j].selected\"\n          role=\"gridcell\"\n          tabindex=\"0\">\n            <div *ngIf=\"jM.label\" class=\"vclLayoutHorizontal vclLayoutCenterJustified vclMonthPickerListItemLabel\">\n              {{jM.label | loc}}\n            </div>\n\n            <div *ngIf=\"jM.sublabel\" class=\"vclLayoutHorizontal vclLayoutCenterJustified vclMonthPickerListItemSublabel\">\n              {{jM.sublabel | loc}}\n            </div>\n        </div>\n      </div>\n    </template>\n  </div>\n</div>\n",
            changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], MonthPickerComponent);
    return MonthPickerComponent;
    var _a, _b;
}());

var VCLMonthPickerModule = (function () {
    function VCLMonthPickerModule() {
    }
    VCLMonthPickerModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, VCLButtonModule, L10nModule],
            exports: [MonthPickerComponent],
            declarations: [MonthPickerComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLMonthPickerModule);
    return VCLMonthPickerModule;
}());

/**
 * this is a helper-class so that the Date-logic
 * is not mashed with the components logic
 */
var PickDate = (function () {
    function PickDate(date) {
        if (date === void 0) { date = new Date(); }
        this.date = date;
    }
    PickDate.prototype.getMonthString = function () {
        var monthNr = this.date.getMonth();
        return PickDate.monthNames[monthNr];
    };
    PickDate.prototype.getYearString = function () {
        return this.date.getFullYear().toString();
    };
    /**
     * gets the first day of the month for the given date's month.
     */
    PickDate.prototype.getFirstDateOfMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
    };
    PickDate.prototype.moveToYear = function (year) {
        var newDate = new Date(year, this.date.getMonth(), 1, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        return new PickDate(newDate);
    };
    PickDate.prototype.addYears = function (amount) {
        if (amount === void 0) { amount = 1; }
        var newDate = new Date(this.date.getFullYear() + amount, this.date.getMonth(), 1, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        return new PickDate(newDate);
    };
    PickDate.prototype.addDays = function (date, amount) {
        if (amount === void 0) { amount = 1; }
        return new Date(date.getTime() + 24 * 60 * 60 * 1000 * amount);
    };
    PickDate.prototype.moveDays = function (amount) {
        this.date = this.addDays(this.date, amount);
    };
    /**
     * returns true if this is greater than that
     */
    PickDate.prototype.gt = function (date) {
        return this.date > date;
    };
    /**
     * returns true if this is lower than that
     */
    PickDate.prototype.lt = function (date) {
        return this.date < date;
    };
    /**
     * Gets a new date incremented by the given number of months. Number of months can be negative.
     * If the date of the given month does not match the target month, the date will be set to the
     * last day of the month.
     */
    PickDate.prototype.incrementMonths = function (numberOfMonths) {
        var dateInTargetMonth = new Date(this.date.getFullYear(), this.date.getMonth() + numberOfMonths, 1);
        var numberOfDaysInMonth = this.getNumberOfDaysInMonth(dateInTargetMonth);
        if (numberOfDaysInMonth < this.date.getDate()) {
            dateInTargetMonth.setDate(numberOfDaysInMonth);
        }
        else {
            dateInTargetMonth.setDate(this.date.getDate());
        }
        return new PickDate(dateInTargetMonth);
    };
    /**
      * Gets the number of days in the month for the given date's month
      */
    PickDate.prototype.getNumberOfDaysInMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    PickDate.prototype.getLastDateOfMonth = function (date) {
        var dayNr = this.getNumberOfDaysInMonth(date);
        return new Date(date.getFullYear(), date.getMonth(), dayNr, date.getHours(), date.getMinutes(), date.getSeconds());
    };
    /**
      * Gets whether two dates have the same month and year
      */
    PickDate.prototype.isSameMonthAndYear = function (date) {
        if (date === void 0) { date = new PickDate(); }
        return this.date.getFullYear() === date.date.getFullYear() && this.date.getMonth() === date.date.getMonth();
    };
    /**
     * Gets whether two dates are the same day (not not necesarily the same time)
     */
    PickDate.prototype.isSameDay = function (date) {
        return this.date.getDate() == date.date.getDate() && this.isSameMonthAndYear(date);
    };
    PickDate.prototype.isToday = function () {
        return this.isSameDay(new PickDate());
    };
    PickDate.prototype.isInYear = function (year) {
        return this.date.getFullYear() === year;
    };
    /**
     * returns a set of days which are in the given month or
     * are in the same weekNumber as a day in the given month
     */
    PickDate.prototype.getMonthBlock = function () {
        var ret = [];
        var firstDayOfMonth = this.getFirstDateOfMonth(this.date);
        var lastDayOfMonth = this.getLastDateOfMonth(this.date);
        var daysOfMonth = this.getNumberOfDaysInMonth(this.date);
        // all days of this month
        for (var i = 0; i < daysOfMonth; i++) {
            ret.push(this.addDays(firstDayOfMonth, i));
        }
        // days of prev month but in same week
        var weekDay = firstDayOfMonth.getDay();
        var minus = 0;
        while (weekDay > 1) {
            minus--;
            ret.unshift(this.addDays(firstDayOfMonth, minus));
            weekDay--;
        }
        // days of next month but in same week
        var addDays = 7 - lastDayOfMonth.getDay();
        var plus = 0;
        while (addDays > 0 && lastDayOfMonth.getDay() !== 0) {
            plus++;
            ret.push(this.addDays(lastDayOfMonth, plus));
            addDays--;
        }
        ret = ret.map(function (date) { return new PickDate(date); });
        var blocks = [];
        // split in weeks
        var temparray, chunk = 7;
        for (var i = 0, j = ret.length; i < j; i += chunk) {
            temparray = ret.slice(i, i + chunk);
            if (temparray.length == 7)
                blocks.push(temparray);
        }
        return blocks;
    };
    PickDate.prototype.getYearsBlock = function () {
        var years = [];
        var currentYear = this.date.getFullYear() - 12;
        while (years.length < 25) {
            years.push(currentYear);
            currentYear++;
        }
        // split rows
        var ret = [];
        var temparray, chunk = 5;
        for (var i = 0, j = years.length; i < j; i += chunk) {
            temparray = years.slice(i, i + chunk);
            if (temparray.length == 5)
                ret.push(temparray);
        }
        return ret;
    };
    PickDate.prototype.getWeekDays = function () {
        return PickDate.weekDays;
    };
    PickDate.prototype.getWeekNumber = function () {
        // Copy date so don't modify original
        var d = new Date(+this.date);
        d.setHours(0, 0, 0);
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setDate(d.getDate() + 4 - (d.getDay() || 7));
        // Get first day of year
        var yearStart = new Date(d.getFullYear(), 0, 1);
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
        // Return array of year and week number
        return weekNo;
    };
    /**
     * returns true if this is between the given dates
     */
    PickDate.prototype.inRange = function (from, to) {
        try {
            if (this.isSameDay(from) || this.isSameDay(to))
                return true;
        }
        catch (e) { }
        if (!from || !to)
            return false;
        return this.date >= from.date && this.date <= to.date;
    };
    PickDate.prototype.daysInRange = function (to) {
        var oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((this.date.getTime() - to.date.getTime()) / (oneDay))) + 1;
    };
    PickDate.prototype.dir = function () { console.dir(this.date); return ''; };
    
    PickDate.monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    PickDate.weekDays = [
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa',
        'Su'
    ];
    return PickDate;
}());
function PickDateCreate(date) {
    if (date === void 0) { date = new Date(); }
    return new PickDate(date);
}

var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$6 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = (function () {
    function DatePickerComponent() {
        // behaviour
        this.closeOnSelect = false;
        // styling
        this.highlightToday = true;
        this.highlightSelected = true;
        this.displayWeekNumbers = true;
        this.displayWeekdays = true;
        this.prevYearBtnIcon = "fa:chevron-left";
        this.nextYearBtnIcon = "fa:chevron-right";
        this.displayJumpToday = true;
        this.displayJumpSelected = true;
        // values
        this.selectedDate = new Date();
        this.selectRange = false;
        this.today = PickDateCreate();
        this.showYearPick = false;
    }
    DatePickerComponent.prototype.ngOnInit = function () {
        if (this.selectedRangeEnd)
            this.selectRange = true;
        this.pickedDate = PickDateCreate(this.selectedDate);
        this.viewDate = PickDateCreate();
        if (this.selectedRangeEnd) {
            this.selectRange = true;
            this.select(PickDateCreate(this.selectedRangeEnd));
        }
        if (!this.minDate)
            this.minDate = new Date(0, 0, 1);
        if (!this.maxDate)
            this.maxDate = new Date(10000, 0, 1);
    };
    /**
     * activate the given date
     */
    DatePickerComponent.prototype.select = function (date) {
        if (!this.selectRange) {
            this.pickedDate = date;
            !!this.onChangeCallback && this.onChangeCallback(this.pickedDate.date);
            return;
        }
        if (this.pickedDate && this.pickedRangeEnd) {
            // reset all
            this.pickedDate = null;
            this.pickedRangeEnd = null;
        }
        else if (this.pickedDate && !this.pickedRangeEnd) {
            this.pickedRangeEnd = date;
        }
        else if (!this.pickedDate) {
            this.pickedDate = date;
        }
        // swap values if pickedDate > pickedRangeEnd
        if (this.pickedRangeEnd &&
            this.pickedDate &&
            this.pickedRangeEnd.date < this.pickedDate.date) {
            this.pickedRangeEnd.date = [this.pickedDate.date, this.pickedDate.date = this.pickedRangeEnd.date][0]; // swap values
        }
        // if more days selected than maxRangeLength, strip days
        if (this.selectRange &&
            this.pickedRangeEnd &&
            this.pickedDate.daysInRange(this.pickedRangeEnd) > this.maxRangeLength) {
            var diffDays = this.pickedDate.daysInRange(this.pickedRangeEnd) - this.maxRangeLength;
            this.pickedRangeEnd.moveDays(diffDays * (-1));
        }
        !!this.onChangeCallback && this.onChangeCallback(this.pickedDate.date);
    };
    /**
     * ui-markers
     */
    DatePickerComponent.prototype.isMarked = function (date) {
        if (!this.selectRange && this.pickedDate.isSameDay(date))
            return true;
        return date.inRange(this.pickedDate, this.pickedRangeEnd);
    };
    DatePickerComponent.prototype.isDisabled = function (day) {
        if (!this.viewDate.isSameMonthAndYear(day) ||
            day.gt(this.maxDate) ||
            day.lt(this.minDate)) {
            return true;
        }
        return false;
    };
    /**
     * functions to move viewDate
     */
    DatePickerComponent.prototype.nextMonth = function () {
        if (this.showYearPick)
            this.viewDate = this.viewDate.addYears(1);
        else
            this.viewDate = this.viewDate.incrementMonths(1);
    };
    DatePickerComponent.prototype.prevMonth = function () {
        if (this.showYearPick)
            this.viewDate = this.viewDate.addYears(-1);
        else
            this.viewDate = this.viewDate.incrementMonths(-1);
    };
    DatePickerComponent.prototype.gotoToday = function () {
        this.viewDate = PickDateCreate();
    };
    DatePickerComponent.prototype.gotoSelected = function () {
        this.viewDate = this.pickedDate;
    };
    DatePickerComponent.prototype.yearPickSelect = function (year) {
        this.viewDate = this.viewDate.moveToYear(year);
        this.showYearPick = false;
    };
    DatePickerComponent.prototype.writeValue = function (value) {
        this.pickedDate = PickDateCreate(value);
        if (!value)
            this.pickedDate = PickDateCreate();
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        _angular_core.Input('closeOnSelect'), 
        __metadata('design:type', Boolean)
    ], DatePickerComponent.prototype, "closeOnSelect", void 0);
    __decorate([
        _angular_core.Input('highlightToday'), 
        __metadata('design:type', Boolean)
    ], DatePickerComponent.prototype, "highlightToday", void 0);
    __decorate([
        _angular_core.Input('highlightSelected'), 
        __metadata('design:type', Boolean)
    ], DatePickerComponent.prototype, "highlightSelected", void 0);
    __decorate([
        _angular_core.Input('displayWeekNumbers'), 
        __metadata('design:type', Boolean)
    ], DatePickerComponent.prototype, "displayWeekNumbers", void 0);
    __decorate([
        _angular_core.Input('displayWeekdays'), 
        __metadata('design:type', Boolean)
    ], DatePickerComponent.prototype, "displayWeekdays", void 0);
    __decorate([
        _angular_core.Input('prevYearBtnIcon'), 
        __metadata('design:type', String)
    ], DatePickerComponent.prototype, "prevYearBtnIcon", void 0);
    __decorate([
        _angular_core.Input('nextYearBtnIcon'), 
        __metadata('design:type', String)
    ], DatePickerComponent.prototype, "nextYearBtnIcon", void 0);
    __decorate([
        _angular_core.Input('displayJumpToday'), 
        __metadata('design:type', Boolean)
    ], DatePickerComponent.prototype, "displayJumpToday", void 0);
    __decorate([
        _angular_core.Input('displayJumpSelected'), 
        __metadata('design:type', Boolean)
    ], DatePickerComponent.prototype, "displayJumpSelected", void 0);
    __decorate([
        _angular_core.Input('selectedDate'), 
        __metadata('design:type', Object)
    ], DatePickerComponent.prototype, "selectedDate", void 0);
    __decorate([
        _angular_core.Input('selectRange'), 
        __metadata('design:type', Boolean)
    ], DatePickerComponent.prototype, "selectRange", void 0);
    __decorate([
        _angular_core.Input('selectedRangeEnd'), 
        __metadata('design:type', Object)
    ], DatePickerComponent.prototype, "selectedRangeEnd", void 0);
    __decorate([
        _angular_core.Input('maxRangeLength'), 
        __metadata('design:type', Number)
    ], DatePickerComponent.prototype, "maxRangeLength", void 0);
    __decorate([
        _angular_core.Input('minDate'), 
        __metadata('design:type', Object)
    ], DatePickerComponent.prototype, "minDate", void 0);
    __decorate([
        _angular_core.Input('maxDate'), 
        __metadata('design:type', Object)
    ], DatePickerComponent.prototype, "maxDate", void 0);
    DatePickerComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-date-picker',
            template: "<div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclNoMargin vclCalInput\">\n  <div class=\"vclDGRow\">\n    <div class=\"vclDGCell\">\n      <div class=\"vclLayoutFlex vclToolbar vclLayoutHorizontal vclLayoutJustified vclPager vclLayoutCenter\">\n        <button class=\"vclTransparent vclSquare  vclButton\" (tap)=\"prevMonth()\">\n              <div class=\"vclIcogram\">\n                <span class=\"vclIcon fa fa-angle-left\"></span>\n              </div>\n            </button>\n        <span class=\"vclCalHeaderLabel\" (tap)=\"showYearPick=true\">\n              {{viewDate.getMonthString() | loc}}&nbsp;&nbsp;{{viewDate.getYearString()}}\n            </span>\n        <button class=\"vclTransparent vclSquare vclButton\" (tap)=\"nextMonth()\">\n               <div class=\"vclIcogram\">\n                  <span class=\"vclIcon fa fa-angle-right\"></span>\n                </div>\n            </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"vclSeparator\"></div>\n\n  <div *ngIf=\"!showYearPick\">\n    <div class=\"vclDGRow\">\n      <div *ngIf=\"displayWeekNumbers\" class=\"vclDGCell timeFragment vclCalItem vclOtherMonth\">\n        {{'week' | loc}}\n      </div>\n      <div *ngFor=\"let day of viewDate.getWeekDays()\" class=\"vclDGCell vclWeekdayLabel\" [class.hidden]=\"!displayWeekdays\">\n        {{day | loc}}\n      </div>\n    </div>\n\n    <div class=\"vclDGRow\" *ngFor=\"let week of viewDate.getMonthBlock()\">\n      <div *ngIf=\"displayWeekNumbers && week.length==7\" class=\"vclDGCell\">\n        {{week[5].getWeekNumber()}}\n      </div>\n      <div *ngFor=\"let day of week\" class=\"vclDGCell timeFragment vclCalItem\" [class.vclDisabled]=\"isDisabled(day)\" [class.vclSelected]=\"isMarked(day)\" (tap)=\"!isDisabled(day) && select(day)\" [class.vclToday]=\"highlightSelected && day.isToday()\" [class.vclOtherMonth]=\"!day.isSameMonthAndYear()\">\n        {{day.date.getDate()}}\n      </div>\n    </div>\n\n    <div class=\"vclDGRow\">\n      <div class=\"vclDGCell\">\n        <div class=\"vclToolbar vclTransparent vclLayoutFlex vclLayoutHorizontal vclLayoutJustified\">\n          <button title=\"go to today\" class=\"vclTransparent vclLayoutFlex vclButton\" *ngIf=\"displayJumpToday\" (tap)=\"gotoToday()\">\n               <div class=\" vclIcogram\">\n                 <span class=\"vclText \">go to today</span>\n               </div>\n             </button>\n          <button title=\"go to selected\" class=\"vclTransparent vclLayoutFlex vclButton\" *ngIf=\"displayJumpSelected\" (tap)=\"gotoSelected()\">\n                <div class=\" vclIcogram\">\n                  <span class=\"vclText \">go to selected</span>\n                </div>\n              </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"showYearPick\">\n    <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let row of viewDate.getYearsBlock()\">\n      <div *ngFor=\"let year of row\" class=\"vclDGCell vclCalItem\" role=\"gridcell\"\n      [class.vclSelected]=\"viewDate.date.getFullYear()==year\"\n       (tap)=\"yearPickSelect(year)\" \n       [class.vclToday]=\"highlightSelected && today.isInYear(year)\">\n        {{year}}\n      </div>\n    </div>\n  </div>\n\n</div>\n",
            styles: [".hidden{display:none;}"],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$6],
            host: {
                '[class.vclDatePicker]': 'true'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], DatePickerComponent);
    return DatePickerComponent;
}());

var VCLDatePickerModule = (function () {
    function VCLDatePickerModule() {
    }
    VCLDatePickerModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, VCLButtonModule, L10nModule],
            exports: [DatePickerComponent],
            declarations: [DatePickerComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLDatePickerModule);
    return VCLDatePickerModule;
}());

var LabelComponent = (function () {
    function LabelComponent() {
        this.type = '';
        this.requiredIndicatorCharacter = '•';
        this.required = false;
        this.labelClass = '';
    }
    LabelComponent.prototype.ngOnInit = function () {
        /**
         * TODO(issue) this overwrites the users classes
         * @link https://github.com/angular/angular/issues/7289
         */
        if (this.type != '')
            this.labelClass = 'vclLabel vcl' + this.ucfirst(this.type);
    };
    LabelComponent.prototype.ucfirst = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    __decorate([
        _angular_core.Input('label'), 
        __metadata('design:type', String)
    ], LabelComponent.prototype, "label", void 0);
    __decorate([
        _angular_core.Input('subLabel'), 
        __metadata('design:type', String)
    ], LabelComponent.prototype, "subLabel", void 0);
    __decorate([
        _angular_core.Input('type'), 
        __metadata('design:type', Object)
    ], LabelComponent.prototype, "type", void 0);
    __decorate([
        _angular_core.Input('requiredIndicatorCharacter'), 
        __metadata('design:type', String)
    ], LabelComponent.prototype, "requiredIndicatorCharacter", void 0);
    __decorate([
        _angular_core.Input('required'), 
        __metadata('design:type', Boolean)
    ], LabelComponent.prototype, "required", void 0);
    __decorate([
        _angular_core.Input('for'), 
        __metadata('design:type', String)
    ], LabelComponent.prototype, "for", void 0);
    LabelComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-label',
            template: "{{ label | loc }}\n\n<span *ngIf=\"required\">{{requiredIndicatorCharacter}}</span>\n<ng-content></ng-content>\n\n<label class=\"vclFormControlSubLabel\">\n    {{ subLabel | loc }}\n</label>\n",
            host: {
                '[class.vclFormControlLabel]': 'true',
                '[class]': 'labelClass',
            }
        }), 
        __metadata('design:paramtypes', [])
    ], LabelComponent);
    return LabelComponent;
}());

var VCLLabelModule = (function () {
    function VCLLabelModule() {
    }
    VCLLabelModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, L10nModule, VCLMetalistModule],
            exports: [LabelComponent],
            declarations: [LabelComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLLabelModule);
    return VCLLabelModule;
}());

var TokenComponent = (function () {
    function TokenComponent() {
        this.selected = false;
        this.removeable = false;
        this.onRemove = new _angular_core.EventEmitter();
    }
    TokenComponent.prototype.remove = function () {
        this.onRemove.emit();
    };
    __decorate([
        _angular_core.Input('label'), 
        __metadata('design:type', String)
    ], TokenComponent.prototype, "label", void 0);
    __decorate([
        _angular_core.Input('selected'), 
        __metadata('design:type', Boolean)
    ], TokenComponent.prototype, "selected", void 0);
    __decorate([
        _angular_core.Input('removeable'), 
        __metadata('design:type', Boolean)
    ], TokenComponent.prototype, "removeable", void 0);
    __decorate([
        _angular_core.Output('onRemove'), 
        __metadata('design:type', Object)
    ], TokenComponent.prototype, "onRemove", void 0);
    TokenComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-token',
            template: "\n      <span class=\"vclTokenLabel\">{{ label }}</span>\n      <button *ngIf=\"removeable\" type=\"button\" title=\"Remove\"\n      class=\"vclTransparent vclButton\">\n        <div class=\"vclIcogram\" (tap)=\"remove()\">\n          <span class=\"vclIcon fa fa-remove\"></span>\n        </div>\n      </button>",
            host: {
                '[class.vclToken]': 'true',
                '[class.vclSelected]': 'selected'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], TokenComponent);
    return TokenComponent;
}());

var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$7 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return TokenListComponent; }),
    multi: true
};
var TokenListComponent = (function () {
    function TokenListComponent() {
        this.value = [];
        this.onChange = new _angular_core.EventEmitter();
    }
    TokenListComponent.prototype.ngAfterContentInit = function () { };
    TokenListComponent.prototype.ngOnInit = function () { };
    TokenListComponent.prototype.change = function () {
        this.value = this.tokens
            .filter(function (t) { return t.selected; });
        this.onChange.emit(this.value);
        !!this.onChangeCallback && this.onChangeCallback(this.value);
    };
    TokenListComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    TokenListComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TokenListComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        _angular_core.Input('tokens'), 
        __metadata('design:type', Array)
    ], TokenListComponent.prototype, "tokens", void 0);
    __decorate([
        _angular_core.Output('onChange'), 
        __metadata('design:type', Object)
    ], TokenListComponent.prototype, "onChange", void 0);
    __decorate([
        _angular_core.ContentChildren(TokenComponent), 
        __metadata('design:type', (typeof (_a = typeof _angular_core.QueryList !== 'undefined' && _angular_core.QueryList) === 'function' && _a) || Object)
    ], TokenListComponent.prototype, "templateItems", void 0);
    TokenListComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-token-list',
            template: "<vcl-token *ngFor=\"let token of tokens\"\n [(selected)]=\"token.selected\"\n [label]=\"token.label\"\n (tap)=\"token.selected=!token.selected;change();\"></vcl-token>\n",
            host: {
                '[class.vclTokenList]': 'true',
                '[class.vclTokenContainer]': 'true'
            },
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$7]
        }), 
        __metadata('design:paramtypes', [])
    ], TokenListComponent);
    return TokenListComponent;
    var _a;
}());

var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR2 = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return TokenInputComponent; }),
    multi: true
};
var TokenInputComponent = (function () {
    function TokenInputComponent() {
        this.tokens = [];
        this.addtext = '';
    }
    TokenInputComponent.prototype.keydown = function (ev) {
        if (ev.key != 'Enter')
            return;
        if (this.addtext == '')
            return;
        this.tokens.push({ label: this.addtext });
        this.addtext = '';
        !!this.onChangeCallback && this.onChangeCallback(this.tokens);
    };
    TokenInputComponent.prototype.remove = function (token) {
        this.tokens = this.tokens.filter(function (t) { return t.label != token.label; });
        !!this.onChangeCallback && this.onChangeCallback(this.tokens);
    };
    TokenInputComponent.prototype.writeValue = function (tokens) {
        this.tokens = tokens;
    };
    TokenInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TokenInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        _angular_core.Input('tokens'), 
        __metadata('design:type', Array)
    ], TokenInputComponent.prototype, "tokens", void 0);
    TokenInputComponent = __decorate([
        _angular_core.Component({
            selector: 'vcl-token-input',
            template: "<div class=\"vclTokenContainer\">\n  <vcl-token *ngFor=\"let token of tokens\"\n  [(selected)]=\"token.selected\"\n  [removeable]=\"true\"\n  (onRemove)=\"remove(token)\"\n  [label]=\"token.label\"></vcl-token>\n</div>\n\n<input placeholder=\"Type to add tokens\" autocomplete=\"off\" type=\"text\"\n  class=\"vclInput\" (keydown)=\"keydown($event)\"\n  [(ngModel)]=\"addtext\" flex />\n",
            host: {
                '[class.vclInput]': 'true',
                '[class.vclTokenInput]': 'true'
            },
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR2]
        }), 
        __metadata('design:paramtypes', [])
    ], TokenInputComponent);
    return TokenInputComponent;
}());

var VCLTokenModule = (function () {
    function VCLTokenModule() {
    }
    VCLTokenModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule, L10nModule, VCLMetalistModule, _angular_forms.FormsModule],
            exports: [TokenComponent, TokenListComponent, TokenInputComponent],
            declarations: [TokenComponent, TokenListComponent, TokenInputComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLTokenModule);
    return VCLTokenModule;
}());

var VCLModule = (function () {
    function VCLModule() {
    }
    VCLModule = __decorate([
        _angular_core.NgModule({
            imports: [
                VCLWormholeModule,
                VCLIconModule,
                VCLIcogramModule,
                VCLButtonModule,
                VCLButtonGroupModule,
                VCLLayerModule,
                VCLTetherModule,
                VCLLinkModule,
                VCLInputModule,
                VCLFlipSwitchModule,
                VCLTabNavModule,
                VCLNavigationModule,
                VCLToolbarModule,
                VCLPopoverModule,
                VCLRadioButtonModule,
                VCLCheckboxModule,
                VCLFormControlLabelModule,
                VCLFormModule,
                VCLMetalistModule,
                VCLDropdownModule,
                VCLSelectModule,
                VCLOffClickModule,
                VCLMonthPickerModule,
                VCLDatePickerModule,
                VCLJsonEditorModule,
                VCLLabelModule,
                VCLTokenModule
            ],
            exports: [
                VCLWormholeModule,
                VCLIconModule,
                VCLIcogramModule,
                VCLButtonModule,
                VCLButtonGroupModule,
                VCLLayerModule,
                VCLTetherModule,
                VCLLinkModule,
                VCLInputModule,
                VCLFlipSwitchModule,
                VCLTabNavModule,
                VCLNavigationModule,
                VCLToolbarModule,
                VCLPopoverModule,
                VCLRadioButtonModule,
                VCLCheckboxModule,
                VCLFormControlLabelModule,
                VCLFormModule,
                VCLMetalistModule,
                VCLDropdownModule,
                VCLSelectModule,
                VCLOffClickModule,
                VCLMonthPickerModule,
                VCLDatePickerModule,
                VCLJsonEditorModule,
                VCLLabelModule,
                VCLTokenModule
            ],
            providers: [
                OverlayManagerService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLModule);
    return VCLModule;
}());

exports.VCLModule = VCLModule;
exports.setAnimations = setAnimations;
exports.setAnnotation = setAnnotation;
exports.Effect = Effect;
exports.getEffectsMetadata = getEffectsMetadata;
exports.IconComponent = IconComponent;
exports.IconService = IconService;
exports.VCLIconModule = VCLIconModule;
exports.VCLIcogramModule = VCLIcogramModule;
exports.VCLButtonModule = VCLButtonModule;
exports.VCLButtonGroupModule = VCLButtonGroupModule;
exports.LayerBaseComponent = LayerBaseComponent;
exports.LayerDirective = LayerDirective;
exports.LayerService = LayerService;
exports.VCLLayerModule = VCLLayerModule;
exports.VCLTabNavModule = VCLTabNavModule;
exports.VCLNavigationModule = VCLNavigationModule;
exports.VCLFormModule = VCLFormModule;
exports.VCLToolbarModule = VCLToolbarModule;
exports.VCLTetherModule = VCLTetherModule;
exports.VCLLinkModule = VCLLinkModule;
exports.PopoverComponent = PopoverComponent;
exports.VCLPopoverModule = VCLPopoverModule;
exports.VCLRadioButtonModule = VCLRadioButtonModule;
exports.CheckboxComponent = CheckboxComponent;
exports.VCLCheckboxModule = VCLCheckboxModule;
exports.VCLMonthPickerModule = VCLMonthPickerModule;
exports.VCLDatePickerModule = VCLDatePickerModule;
exports.VCLJsonEditorModule = VCLJsonEditorModule;
exports.VCLLabelModule = VCLLabelModule;
exports.VCLTokenModule = VCLTokenModule;
exports.VCLOffClickModule = VCLOffClickModule;
exports.Wormhole = Wormhole;
exports.WormholeGenerator = WormholeGenerator;
exports.VCLWormholeModule = VCLWormholeModule;
exports.L10nModule = L10nModule;
exports.L10nNoopLoaderService = L10nNoopLoaderService;
exports.L10nStaticLoaderService = L10nStaticLoaderService;
exports.L10nFormatParserService = L10nFormatParserService;
exports.L10nService = L10nService;
exports.ADV_HTTP_CONFIG = ADV_HTTP_CONFIG;
exports.SyncableObservable = SyncableObservable;
exports.ErrorHandlerService = ErrorHandlerService;
exports.AdvHttp = AdvHttp;
exports.AdvHttpModule = AdvHttpModule;
exports.Observe = Observe;
exports.ObservableComponent = ObservableComponent;
exports.STORE_REDUCERS = STORE_REDUCERS;
exports.STORE_EFFECTS = STORE_EFFECTS;
exports.STORE_STATE = STORE_STATE;
exports.compose = compose;
exports.StoreObservable = StoreObservable;
exports.InitAction = InitAction;
exports.StoreActions = StoreActions;
exports.Store = Store;
exports.Effects = Effects;
exports.StoreModule = StoreModule;
