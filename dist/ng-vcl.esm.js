import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Injectable, Input, NgModule, OpaqueToken, Optional, Output, Pipe, QueryList, Renderer, TemplateRef, ViewContainerRef, trigger } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/publishLast';
import 'hammerjs';
import { Router } from '@angular/router';
import * as Tether from 'tether';

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
    function InputComponent(renderer) {
        this.renderer = renderer;
        this.valueType = null;
        this.typedValue = null;
        this.typedValueChange = new EventEmitter();
    }
    InputComponent.prototype.ngOnInit = function () { };
    InputComponent.prototype.onChange = function (value) {
        this.typedValueChange.emit(this.toType(value));
    };
    InputComponent.prototype.toType = function (value) {
        if (this.valueType === 'number') {
            return value = Number(value);
        }
        return value;
    };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], InputComponent.prototype, "valueType", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], InputComponent.prototype, "typedValue", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], InputComponent.prototype, "typedValueChange", void 0);
    __decorate([
        HostListener('input', ['$event.target.value']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], InputComponent.prototype, "onChange", null);
    InputComponent = __decorate([
        Directive({
            selector: '[vcl-input]',
            host: {
                '[class.vclInput]': 'true',
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof Renderer !== 'undefined' && Renderer) === 'function' && _a) || Object])
    ], InputComponent);
    return InputComponent;
    var _a;
}());

var VCLInputModule = (function () {
    function VCLInputModule() {
    }
    VCLInputModule = __decorate([
        NgModule({
            imports: [],
            exports: [InputComponent],
            declarations: [InputComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLInputModule);
    return VCLInputModule;
}());

var IconService = (function () {
    function IconService() {
    }
    // A default name resolver following the CSS class name conventions of
    // the well-known Font Awesome icon font. Bascially it translates
    // `fa:user` into `fa fa-user`
    IconService.prototype.defaultNameResolver = function (icon) {
        var iconParts = icon.split(':');
        var setName = iconParts[0];
        var iconName = iconParts[1];
        return setName + " " + setName + "-" + iconName;
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
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], IconService);
    return IconService;
}());

var IconComponent = (function () {
    function IconComponent(_iconService) {
        this._iconService = _iconService;
    }
    Object.defineProperty(IconComponent.prototype, "fontIconClass", {
        get: function () {
            if (this.icon) {
                return this._iconService.lookup(this.icon);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "mergedIconClass", {
        get: function () {
            return (this.fontIconClass || '') + " " + (this.iconClass || '');
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
        Input(), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "src", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "svguse", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "iconClass", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "icon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], IconComponent.prototype, "label", void 0);
    IconComponent = __decorate([
        Component({
            selector: 'vcl-icon',
            template: "<span class=\"vclIcon {{iconClass}} {{fontIconClass}}\" [attr.aria-label]=\"label | loc\" [attr.aria-hidden]=\"isAriaHidden\">\n  <ng-content></ng-content>\n  <img *ngIf=\"src\" src=\"{{src}}\">\n  <svg *ngIf=\"svguse\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n    <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" attr.xlink:href=\"{{svguse}}\"></use>\n  </svg>\n</span>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof IconService !== 'undefined' && IconService) === 'function' && _a) || Object])
    ], IconComponent);
    return IconComponent;
    var _a;
}());

var L10N_LOADER_CONFIG = new OpaqueToken('l10n.loader.config');
var L10nLoaderService = (function () {
    function L10nLoaderService() {
    }
    L10nLoaderService.prototype.getSupportedLocales = function () {
        return Observable.of([]);
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
        return Observable.of(Array.from(new Set(supportedLocales)));
    };
    L10nStaticLoaderService.prototype.getTranslationPackage = function (locale) {
        var pkg = this.flatten(locale, this.config);
        return Observable.of(pkg);
    };
    L10nStaticLoaderService = __decorate([
        Injectable(),
        __param(0, Inject(L10N_LOADER_CONFIG)), 
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
        return Observable.of({});
    };
    L10nNoopLoaderService = __decorate([
        Injectable(), 
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
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], L10nFormatParserService);
    return L10nFormatParserService;
}(L10nParserService));

var L10N_CONFIG = new OpaqueToken('l10n.config');

var L10nService = (function () {
    function L10nService(config, // TODO: L10nConfig - problem with ngc
        loader, parser) {
        var _this = this;
        this.config = config;
        this.loader = loader;
        this.parser = parser;
        this.packages = {};
        this.locale = (config.locale || this.getNavigatorLang() || 'en-us').toLowerCase();
        this.locale$ = new BehaviorSubject(this.locale);
        // Initialize the streams
        var supportedLocales$ = this.getSupportedLocales();
        // Set up stream of valid locale
        var locale$ = Observable.combineLatest(supportedLocales$, this.locale$, function (supportedLocales, locale) {
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
        var fbLocale$ = Observable.combineLatest(supportedLocales$, locale$, function (supportedLocales, locale) {
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
            return fbLocale ? _this.getTranslationPackage(fbLocale) : Observable.of({});
        });
        this.fbPackage$ = Observable.combineLatest(this.package$, fbPackage$, function (pkg, fbPkg) {
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
            return pkg[key] ? Observable.of(pkg) : _this.fbPackage$;
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
        Injectable(),
        __param(0, Inject(L10N_CONFIG)), 
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
        Pipe({
            name: 'loc',
            pure: false
        }),
        __param(0, Optional()), 
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
        NgModule({
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
        NgModule({
            imports: [CommonModule, L10nModule],
            exports: [IconComponent],
            declarations: [IconComponent],
            providers: [IconService],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLIconModule);
    return VCLIconModule;
}());

/**
*/
var MetalistComponent = (function () {
    function MetalistComponent() {
        this.select = new EventEmitter();
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
        Output(), 
        __metadata('design:type', Object)
    ], MetalistComponent.prototype, "select", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], MetalistComponent.prototype, "items", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], MetalistComponent.prototype, "meta", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], MetalistComponent.prototype, "minSelectableItems", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], MetalistComponent.prototype, "maxSelectableItems", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Boolean)
    ], MetalistComponent.prototype, "maxItemsSelected", void 0);
    __decorate([
        ContentChild(TemplateRef), 
        __metadata('design:type', Object)
    ], MetalistComponent.prototype, "template", void 0);
    MetalistComponent = __decorate([
        Component({
            selector: 'vcl-metalist',
            template: "<template *ngFor=\"let item of items\" [ngTemplateOutlet]=\"template\" [ngOutletContext]=\"{item: item, meta: getMeta(item) }\"></template>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], MetalistComponent);
    return MetalistComponent;
}());

var VCLMetalistModule = (function () {
    function VCLMetalistModule() {
    }
    VCLMetalistModule = __decorate([
        NgModule({
            imports: [CommonModule, L10nModule],
            exports: [MetalistComponent],
            declarations: [MetalistComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLMetalistModule);
    return VCLMetalistModule;
}());

/**
*/
var DropdownComponent = (function () {
    function DropdownComponent() {
        this.select = new EventEmitter();
        this.tabindex = 0;
        this.expanded = false;
        this.expandedChange = new EventEmitter();
        this.maxSelectableItems = 1;
        this.minSelectableItems = 1;
        this.ariaRole = 'listbox';
        this.metaInformation = [];
    }
    DropdownComponent.prototype.selectItem = function (item, meta, metalist) {
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
    DropdownComponent.prototype.onSelect = function (selectedItems) {
        this.select.emit(selectedItems);
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], DropdownComponent.prototype, "select", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], DropdownComponent.prototype, "items", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], DropdownComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], DropdownComponent.prototype, "expanded", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', (typeof (_a = typeof EventEmitter !== 'undefined' && EventEmitter) === 'function' && _a) || Object)
    ], DropdownComponent.prototype, "expandedChange", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], DropdownComponent.prototype, "maxSelectableItems", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], DropdownComponent.prototype, "minSelectableItems", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], DropdownComponent.prototype, "ariaRole", void 0);
    DropdownComponent = __decorate([
        Component({
            selector: 'vcl-dropdown',
            template: "<ul class=\"vclDropdown\"\n  [class.vclOpen]=\"expanded\"\n  [attr.role]=\"ariaRole\"\n  [attr.tabindex]=\"tabindex\"\n  [attr.aria-multiselectable]=\"maxSelectableItems > 1\"\n  [attr.aria-expanded]=\"expanded\">\n  <vcl-metalist (select)=\"onSelect($event)\" #metalist [items]=\"items\" [meta]=\"metaInformation\" [maxSelectableItems]=\"maxSelectableItems\" [minSelectableItems]=\"minSelectableItems\">\n    <template let-item=\"item\" let-meta=\"meta\">\n      <li class=\"vclDropdownItem\"\n        [class.vclSelected]=\"meta.selected\"\n        [attr.aria-selected]=\"meta.selected\"\n        role=\"menuitem\"\n        tabindex=\"0\"\n        (tap)=\"selectItem(item, meta, metalist)\">\n        <div class=\"vclDropdownItemLabel\">\n          {{item.label}}\n        </div>\n        <div *ngIf=\"item.sublabel\" class=\"vclDropdownItemSubLabel\">\n          {{item.sublabel}}\n        </div>\n      </li>\n    </template>\n  </vcl-metalist>\n</ul>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
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
        NgModule({
            imports: [CommonModule, L10nModule, VCLMetalistModule],
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
        this._press = new EventEmitter();
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
        HostBinding('class.vclHovered'), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "hovered", void 0);
    __decorate([
        // `true` if a pointer device is hovering the button (CSS' :hover)
        Input(),
        HostBinding('class.vclSelected'), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "selected", void 0);
    __decorate([
        HostBinding('attr.aria-label'),
        Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "title", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "busy", void 0);
    __decorate([
        // State to indicate that the button is disabled as a operation is in progress
        Input(), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "flexLabel", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "busyLabel", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "label", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "prepIcon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "prepIconBusy", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "autoBlur", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "appIcon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "appIconBusy", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', (typeof (_a = typeof Observable !== 'undefined' && Observable) === 'function' && _a) || Object)
    ], ButtonComponent.prototype, "press", null);
    __decorate([
        HostListener('mouseenter', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ButtonComponent.prototype, "onMouseEnter", null);
    __decorate([
        HostListener('mouseleave', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ButtonComponent.prototype, "onMouseLeave", null);
    __decorate([
        HostListener('mouseup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ButtonComponent.prototype, "onMouseUp", null);
    __decorate([
        HostListener('mousedown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ButtonComponent.prototype, "onMouseDown", null);
    __decorate([
        HostListener('onfocus', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ButtonComponent.prototype, "onFocus", null);
    __decorate([
        HostListener('onblur', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ButtonComponent.prototype, "onBlur", null);
    __decorate([
        HostListener('tap', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ButtonComponent.prototype, "onTap", null);
    ButtonComponent = __decorate([
        Component({
            selector: '[vcl-button]',
            host: {
                '[class.vclButton]': 'true',
            },
            template: "<span>\n  <ng-content></ng-content>\n  <vcl-icogram\n    [label]=\"calculatedLabel | loc\"\n    [flexLabel]=\"flexLabel | loc\"\n    [prepIcon]=\"calculatedPrepIcon\"\n    [appIcon]=\"calculatedAppIcon\">\n  </vcl-icogram>\n</span>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b) || Object])
    ], ButtonComponent);
    return ButtonComponent;
    var _a, _b;
}());

/**
Combination of icon and text of which both are optional and can be permuted.
Icons can be prepended or appended to a textual label and can be sourced from icon
fonts or directly from file based imagery.
The component takes care of accessibility aspects such rendering appropriate aria
attributes.
It also renders accessability labels for icons if no label for the icogram is
provided.
Note: the optionally generated anchor elemt's default action (follow the link)
is _not_ supressed when using the `href` property.
Us the vcl-link component if you want to have a fully fledged anchor tag.

## Usage

```html
<vcl-icogram label="some label" prepIcon="fa fa-chevron-right" flexLabel=true></vcl-icogram>
<vcl-icogram label="some label" prepIconSrc="..." href="http://example.org"></vcl-icogram>
<vcl-icogram label="some label" use="..."></vcl-icogram>
<vcl-icogram>
  <vcl-icon icon="fa:close"></vcl-icon>
</vcl-icogram>
```

@param    label           optional      textual label
@param    href            optional      if an href is given an accessible link is generated
@param    flexLabel       optional      the label gets a `vclLayoutFlex` class if true
@param    prepIcon        optional      Icon as defined by the icon component
@param    appIcon         optional      Same as `prepIcon` but appended
*/
var IcogramComponent = (function () {
    // TODO prepIconSrc not implemented but used in example
    // @Input() prepIconSrc: string;
    function IcogramComponent(elRef) {
        this.el = elRef.nativeElement;
    }
    IcogramComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(IcogramComponent.prototype, "ariaRole", {
        get: function () {
            return (this.el && this.el.tagName.toLowerCase() !== 'a' && this.href) ? 'link' : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], IcogramComponent.prototype, "label", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], IcogramComponent.prototype, "href", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], IcogramComponent.prototype, "flexLabel", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], IcogramComponent.prototype, "prepIcon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], IcogramComponent.prototype, "appIcon", void 0);
    __decorate([
        HostBinding('attr.role'), 
        __metadata('design:type', Object)
    ], IcogramComponent.prototype, "ariaRole", null);
    IcogramComponent = __decorate([
        Component({
            selector: 'vcl-icogram, [vcl-icogram]',
            host: {
                '[class.vclIcogram]': 'true',
                '[attr.role]:': 'img'
            },
            template: "<ng-content></ng-content>\n<vcl-icon *ngIf=\"prepIcon\" [icon]=\"prepIcon\"></vcl-icon>\n<span *ngIf=\"!!label\" [class.vclLayoutFlex]=\"!!flexLabel\" class=\"vclText\">\n  {{label | loc}}\n</span>\n<vcl-icon *ngIf=\"appIcon\" [icon]=\"appIcon\"></vcl-icon>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object])
    ], IcogramComponent);
    return IcogramComponent;
    var _a;
}());

var VCLIcogramModule = (function () {
    function VCLIcogramModule() {
    }
    VCLIcogramModule = __decorate([
        NgModule({
            imports: [CommonModule, VCLIconModule, L10nModule],
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
        NgModule({
            imports: [CommonModule, VCLIcogramModule, L10nModule],
            exports: [ButtonComponent],
            declarations: [ButtonComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLButtonModule);
    return VCLButtonModule;
}());

/**
*/
var SelectComponent = (function () {
    function SelectComponent() {
        this.ariaRole = 'list';
        this.clickInside = false;
        this.select = new EventEmitter();
        this.expanded = false;
        this.minSelectableItems = 1;
        this.maxSelectableItems = 1;
        this.expandedIcon = 'fa:chevron-up';
        this.collapsedIcon = 'fa:chevron-down';
        this.inputValue = 'label';
        this.emptyLabel = 'Select value';
        this.displayValue = this.emptyLabel;
    }
    SelectComponent.prototype.expand = function () {
        this.expanded = !this.expanded;
    };
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
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], SelectComponent.prototype, "select", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], SelectComponent.prototype, "expanded", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], SelectComponent.prototype, "items", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], SelectComponent.prototype, "minSelectableItems", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], SelectComponent.prototype, "maxSelectableItems", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SelectComponent.prototype, "expandedIcon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SelectComponent.prototype, "collapsedIcon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SelectComponent.prototype, "inputValue", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SelectComponent.prototype, "emptyLabel", void 0);
    SelectComponent = __decorate([
        Component({
            selector: 'vcl-select',
            template: "<div [attr.aria-autocomplete]=\"ariaRole\" class=\"vclSelect vclInputGroupEmb\" (off-click)=\"onOutsideClick()\">\n  <input (tap)=\"expand()\" class=\"vclInput\" [attr.value]=\"displayValue\" readonly>\n  <button vcl-button (click)=\"expand()\" class=\"vclTransparent vclSquare vclAppended\" [appIcon]=\"expanded ? expandedIcon : collapsedIcon\"></button>\n  <vcl-dropdown (select)=\"onSelect($event)\"\n    [(expanded)]=\"expanded\"\n    [items]=\"items\"\n    [minSelectableItems]=\"minSelectableItems\"\n    [maxSelectableItems]=\"maxSelectableItems\"\n    [tabindex]=\"0\" [expanded]=\"true\"></vcl-dropdown>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], SelectComponent);
    return SelectComponent;
}());

var OffClickDirective = (function () {
    function OffClickDirective(elem) {
        this.elem = elem;
        this.offClick = new EventEmitter();
    }
    OffClickDirective.prototype.createListener = function () {
        var _this = this;
        return function (event) {
            if (event.target && _this.elem.nativeElement !== event.target && !_this.elem.nativeElement.contains(event.target)) {
                _this.offClick.emit();
            }
        };
    };
    OffClickDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (typeof document !== 'undefined') {
            this.listener = this.createListener();
            // Wait for next run loop to attach the listener as it might trigger by accident
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
        Output('off-click'), 
        __metadata('design:type', Object)
    ], OffClickDirective.prototype, "offClick", void 0);
    OffClickDirective = __decorate([
        Directive({
            selector: '[off-click]',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object])
    ], OffClickDirective);
    return OffClickDirective;
    var _a;
}());
var VCLOffClickModule = (function () {
    function VCLOffClickModule() {
    }
    VCLOffClickModule = __decorate([
        NgModule({
            declarations: [OffClickDirective],
            exports: [OffClickDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLOffClickModule);
    return VCLOffClickModule;
}());

var VCLSelectModule = (function () {
    function VCLSelectModule() {
    }
    VCLSelectModule = __decorate([
        NgModule({
            imports: [CommonModule, L10nModule, VCLDropdownModule, VCLButtonModule, VCLOffClickModule],
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
        this._selectedIndexChange = new EventEmitter();
        /* Event emitted when the group's value changes. */
        this._change = new EventEmitter();
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
        Input(), 
        __metadata('design:type', Number)
    ], ButtonGroupComponent.prototype, "selectionMode", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], ButtonGroupComponent.prototype, "mode", null);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], ButtonGroupComponent.prototype, "selectedIndex", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], ButtonGroupComponent.prototype, "selectedIndexChange", null);
    __decorate([
        Output(), 
        __metadata('design:type', (typeof (_a = typeof Observable !== 'undefined' && Observable) === 'function' && _a) || Object)
    ], ButtonGroupComponent.prototype, "change", null);
    __decorate([
        ContentChildren(ButtonComponent), 
        __metadata('design:type', (typeof (_b = typeof QueryList !== 'undefined' && QueryList) === 'function' && _b) || Object)
    ], ButtonGroupComponent.prototype, "buttons", void 0);
    ButtonGroupComponent = __decorate([
        Component({
            selector: 'vcl-button-group',
            host: {
                '[class.vclButtonGroup]': 'true',
            },
            template: "<ng-content></ng-content>",
            changeDetection: ChangeDetectionStrategy.OnPush,
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
        NgModule({
            imports: [CommonModule, VCLButtonModule, L10nModule],
            exports: [ButtonGroupComponent],
            declarations: [ButtonGroupComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLButtonGroupModule);
    return VCLButtonGroupModule;
}());

var Wormhole = (function () {
    function Wormhole(templateRef) {
        this.templateRef = templateRef;
    }
    Object.defineProperty(Wormhole.prototype, "isConnected", {
        get: function () {
            return !!this.source;
        },
        enumerable: true,
        configurable: true
    });
    Wormhole.prototype.disconnect = function () {
        this.source = null;
    };
    Wormhole.prototype.connect = function (wormhole) {
        this.source = wormhole;
    };
    Wormhole.prototype.getTemplateRef = function () {
        return this.templateRef;
    };
    Wormhole = __decorate([
        Directive({
            selector: '[wormhole]',
            exportAs: 'wormhole',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof TemplateRef !== 'undefined' && TemplateRef) === 'function' && _a) || Object])
    ], Wormhole);
    return Wormhole;
    var _a;
}());
var ConnectWormhole = (function () {
    function ConnectWormhole(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(ConnectWormhole.prototype, "isConnected", {
        get: function () {
            return !!this.connectedWormhole;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectWormhole.prototype, "wormhole", {
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
    ConnectWormhole.prototype.connect = function (wormhole) {
        this.connectedWormhole = wormhole;
        wormhole.connect(this);
        var templateRef = wormhole.getTemplateRef();
        this.viewContainerRef.createEmbeddedView(templateRef);
    };
    ConnectWormhole.prototype.disconnect = function () {
        if (this.connectedWormhole) {
            this.connectedWormhole.disconnect();
        }
        this.connectedWormhole = null;
        this.viewContainerRef.clear();
    };
    ConnectWormhole.prototype.dispose = function () {
        if (this.isConnected) {
            this.disconnect();
        }
    };
    ConnectWormhole.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    __decorate([
        Input('connectWormhole'), 
        __metadata('design:type', Wormhole)
    ], ConnectWormhole.prototype, "wormhole", null);
    ConnectWormhole = __decorate([
        Directive({
            selector: '[connectWormhole]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ViewContainerRef !== 'undefined' && ViewContainerRef) === 'function' && _a) || Object])
    ], ConnectWormhole);
    return ConnectWormhole;
    var _a;
}());
var VCLWormholeModule = (function () {
    function VCLWormholeModule() {
    }
    VCLWormholeModule = __decorate([
        NgModule({
            exports: [Wormhole, ConnectWormhole],
            declarations: [Wormhole, ConnectWormhole]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLWormholeModule);
    return VCLWormholeModule;
}());

var LayerService = (function () {
    function LayerService() {
        this.visibleLayersChanged$ = new EventEmitter();
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
    LayerService.prototype.open = function (layerName) {
        if (this.layers.has(layerName)) {
            this.layers.get(layerName).open();
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
        Output(), 
        __metadata('design:type', (typeof (_a = typeof Observable !== 'undefined' && Observable) === 'function' && _a) || Object)
    ], LayerService.prototype, "visibleLayersChanged", null);
    LayerService = __decorate([
        Injectable(), 
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
        Component({
            selector: 'vcl-layer-base',
            template: "<div *ngFor=\"let layer of visibleLayers\">\n  <div class=\"vclLayer\" role=\"dialog\" [@boxState]=\"layer.state\" [style.z-index]=\"layer.zIndex\">\n    <div class=\"vclLayerBox vclLayerGutterPadding\">\n      <div [connectWormhole]=\"layer\" (off-click)=\"layer.offClick()\"></div>\n    </div>\n  </div>\n  <div *ngIf=\"layer.modal\" class=\"vclLayerCover\" [@layerState]=\"layer.state\" [style.z-index]=\"layer.coverzIndex\"></div>\n</div>\n",
            animations: [
                trigger('boxState', []),
                trigger('layerState', [])
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
        this.visibilityChange$ = new EventEmitter();
        this.modal = true;
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
    LayerDirective.prototype.open = function () {
        this.setZIndex(this.layerService.currentZIndex + 10);
        this.visible = true;
        this.visibilityChange$.emit(this.visible);
    };
    LayerDirective.prototype.close = function () {
        this.setZIndex();
        this.visible = false;
        this.visibilityChange$.emit(this.visible);
    };
    __decorate([
        Output(), 
        __metadata('design:type', (typeof (_a = typeof Observable !== 'undefined' && Observable) === 'function' && _a) || Object)
    ], LayerDirective.prototype, "visibilityChange", null);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], LayerDirective.prototype, "modal", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LayerDirective.prototype, "name", void 0);
    LayerDirective = __decorate([
        Directive({
            selector: '[vcl-layer]',
            exportAs: 'layer',
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof TemplateRef !== 'undefined' && TemplateRef) === 'function' && _b) || Object, (typeof (_c = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _c) || Object, (typeof (_d = typeof LayerService !== 'undefined' && LayerService) === 'function' && _d) || Object])
    ], LayerDirective);
    return LayerDirective;
    var _a, _b, _c, _d;
}(Wormhole));

var VCLLayerModule = (function () {
    function VCLLayerModule() {
    }
    VCLLayerModule = __decorate([
        NgModule({
            imports: [CommonModule, VCLWormholeModule, VCLOffClickModule],
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
        Directive({
            selector: '[vcl-tab-label]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof TemplateRef !== 'undefined' && TemplateRef) === 'function' && _a) || Object])
    ], TabLabelDirective);
    return TabLabelDirective;
    var _a;
}(Wormhole));
var TabContentDirective = (function (_super) {
    __extends(TabContentDirective, _super);
    function TabContentDirective(templateRef) {
        _super.call(this, templateRef);
        this.templateRef = templateRef;
    }
    TabContentDirective = __decorate([
        Directive({
            selector: '[vcl-tab-content]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof TemplateRef !== 'undefined' && TemplateRef) === 'function' && _a) || Object])
    ], TabContentDirective);
    return TabContentDirective;
    var _a;
}(Wormhole));
var TabComponent = (function () {
    function TabComponent() {
        this.disabled = false;
        this.tabClass = '';
    }
    __decorate([
        ContentChild(TabLabelDirective), 
        __metadata('design:type', TabLabelDirective)
    ], TabComponent.prototype, "label", void 0);
    __decorate([
        ContentChild(TabContentDirective), 
        __metadata('design:type', TabContentDirective)
    ], TabComponent.prototype, "content", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], TabComponent.prototype, "disabled", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TabComponent.prototype, "tabClass", void 0);
    TabComponent = __decorate([
        Directive({
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
        this.selectedTabIndexChange$ = new EventEmitter();
    }
    Object.defineProperty(TabNavComponent.prototype, "selectedTabIndexChange", {
        get: function () {
            return this.selectedTabIndexChange$.asObservable();
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
        ContentChildren(TabComponent), 
        __metadata('design:type', (typeof (_a = typeof QueryList !== 'undefined' && QueryList) === 'function' && _a) || Object)
    ], TabNavComponent.prototype, "tabs", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TabNavComponent.prototype, "layout", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TabNavComponent.prototype, "tabbableClass", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TabNavComponent.prototype, "tabsClass", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TabNavComponent.prototype, "tabContentClass", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], TabNavComponent.prototype, "borders", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], TabNavComponent.prototype, "selectedTabIndex", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', (typeof (_b = typeof Observable !== 'undefined' && Observable) === 'function' && _b) || Object)
    ], TabNavComponent.prototype, "selectedTabIndexChange", null);
    TabNavComponent = __decorate([
        Component({
            selector: 'vcl-tab-nav',
            template: "<div class=\"vclTabbable {{tabbableClass}}\" \n     [class.vclTabsLeft]=\"layout==='left'\"\n     [class.vclTabsRight]=\"layout==='right'\">\n  <div class=\"vclTabs {{tabsClass}}\" [class.vclTabStyleUni]=\"!!borders\" role=\"tablist\">\n    <div *ngFor=\"let tab of tabs; let i = index\"\n         class=\"vclTab {{tab.tabClass}}\" role=\"tab\"\n         [class.vclDisabled]=\"tab.disabled\"\n         [class.vclSelected]=\"selectedTabIndex===i\"\n         [class.aria-selected]=\"selectedTabIndex===i\"\n         (tap)=\"selectTab(tab)\">\n      <div [connectWormhole]=\"tab.label\"></div>\n    </div>\n  </div>\n\n  <div class=\"vclTabContent {{tabContentClass}}\" [class.vclNoBorder]=\"!borders\">\n    <div role=\"tabpanel\" class=\"vclTabPanel\" *ngFor=\"let tab of tabs; let i = index\">\n      <div *ngIf=\"selectedTabIndex===i\" [connectWormhole]=\"tab.content\"></div>\n    </div>\n  </div>\n</div>\n\n"
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
        NgModule({
            imports: [CommonModule, L10nModule, VCLWormholeModule],
            exports: [TabComponent, TabContentDirective, TabLabelDirective, TabNavComponent],
            declarations: [TabComponent, TabContentDirective, TabLabelDirective, TabNavComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLTabNavModule);
    return VCLTabNavModule;
}());

var NavigationComponent = (function () {
    function NavigationComponent(router) {
        this.router = router;
        this.ariaRole = 'presentation';
        this.tabindex = 0;
        this.touchAction = 'pan-y';
        this.type = 'horizontal';
        this.subLevelHintIconClosed = 'fa:chevron-right';
        this.subLevelHintIconOpened = 'fa:chevron-down';
        this.subLevelHintIconSide = 'right';
        this.navigationItems = [];
        this.select = new EventEmitter();
    }
    NavigationComponent.prototype.ngOnInit = function () {
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
        if (item == this.selectedItem) {
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
        this.selectedItem.selected = false;
        this.selectedItem = item;
        this.select.emit(item);
    };
    NavigationComponent.prototype.toggleMenu = function (item) {
        item.opened = !item.opened;
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], NavigationComponent.prototype, "selectedItem", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], NavigationComponent.prototype, "ariaRole", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], NavigationComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], NavigationComponent.prototype, "touchAction", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], NavigationComponent.prototype, "type", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], NavigationComponent.prototype, "subLevelHintIconClosed", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], NavigationComponent.prototype, "subLevelHintIconOpened", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], NavigationComponent.prototype, "subLevelHintIconSide", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], NavigationComponent.prototype, "navigationItems", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], NavigationComponent.prototype, "select", void 0);
    NavigationComponent = __decorate([
        Component({
            selector: 'vcl-navigation',
            template: "<nav class=\"vclNavigation\" [class.vclVertical]=\"isVertical\">\n  <ul>\n    <li *ngFor=\"let item of navigationItems\"\n        [class.vclSelected]=\"item.selected && !item.items\"\n        [class.vclOpen]=\"item.opened\"\n        [class.vclClose]=\"!item.opened\"\n        [class.vclNavigationHeading]=\"item.heading\"\n        [class.vclNavigationItem]=\"!item.heading\"\n        [attr.touch-action]=\"touchAction\"\n        [attr.aria-selected]=\"item.selected\"\n        [attr.role]=\"item.heading && 'sectionhead' || ariaRole\"\n        [attr.tabindex]=\"tabindex\">\n\n      <span *ngIf=\"item.heading\">\n        {{item.label | loc}}\n      </span>\n\n      <a vcl-link class=\"vclNavigationItemLabel\"\n        *ngIf=\"!item.heading\"\n        [label]=\"item.label | loc\"\n        [href]=\"item.href\"\n        [prepIcon]=\"getPrepIcon(item)\"\n        [appIcon]=\"getAppIcon(item)\"\n        (click)=\"item.items && toggleMenu(item)\"\n        (click)=\"selectItem(item)\">\n      </a>\n\n      <vcl-navigation *ngIf=\"item.items\"\n          [navigationItems]=\"item.items\"\n          [type]=\"type\"\n          [subLevelHintIconOpened]=\"subLevelHintIconOpened\"\n          [subLevelHintIconClosed]=\"subLevelHintIconClosed\"\n          [subLevelHintIconSide]=\"subLevelHintIconSide\"\n          [selectedItem]=\"selectedItem\"\n          (select)=\"onSelect($event)\">\n      </vcl-navigation>\n    </li>\n  </ul>\n</nav>\n",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof Router !== 'undefined' && Router) === 'function' && _a) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a;
}());

/**
The anchor tag with VCL and Angular awareness.

## Usage

```html
<vcl-link
  [href]="'http://www.example.com'"
  [label]="'Example Link'"
  [prepIcon]="'fa:chevron-right'">
```

@property     {String}    href         `href` attribute
@property     {String}    target       `target` attribute
@property     {String}    tabindex     `tabindex` attribute
@property     {String}    scheme       URL scheme to be used, e. g. `tel`, `mailto` etc.
@property     {String}    disabled     disabled if `true`
@property     {String}    label        textual label with automatic Ember-i18n lookup
@property     {String}    title        textual title with automatic Ember-i18n lookup
@property     {String}    prepIcon     icon to be prepended to the label
@property     {String}    appIcon      icon to be appended to the label
@property     {String}    class        additional class to be added
*/
var LinkComponent = (function () {
    function LinkComponent() {
    }
    Object.defineProperty(LinkComponent.prototype, "_href", {
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
    Object.defineProperty(LinkComponent.prototype, "_label", {
        get: function () {
            return this.label
                ? this.label
                : this.href;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "href", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "target", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], LinkComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "scheme", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], LinkComponent.prototype, "disabled", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "label", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "title", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "prepIcon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "appIcon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], LinkComponent.prototype, "class", void 0);
    LinkComponent = __decorate([
        Component({
            selector: '[vcl-link]',
            template: "<ng-content></ng-content>\n<vcl-icogram \n  [label]=\"_label | loc\"\n  [prepIcon]=\"prepIcon\"\n  [appIcon]=\"appIcon\">\n</vcl-icogram>\n",
            host: {
                '[attr.href]': '_href',
                '[attr.target]': 'target',
                '[attr.tabindex]': 'tabindex',
                '[attr.touch-action]': 'touchAction',
                '[attr.aria-label]': 'title | loc',
                '[attr.title]': 'title | loc',
                '[attr.disabled]': 'disabled',
                '[class.vclDisabled]': 'disabled',
            },
        }), 
        __metadata('design:paramtypes', [])
    ], LinkComponent);
    return LinkComponent;
}());

var VCLLinkModule = (function () {
    function VCLLinkModule() {
    }
    VCLLinkModule = __decorate([
        NgModule({
            imports: [CommonModule, L10nModule, VCLIcogramModule],
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
        NgModule({
            imports: [CommonModule, L10nModule, VCLLinkModule],
            exports: [NavigationComponent],
            declarations: [NavigationComponent],
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
        Input(), 
        __metadata('design:type', Number)
    ], ToolbarComponent.prototype, "ariaLevel", void 0);
    ToolbarComponent = __decorate([
        Component({
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
        NgModule({
            imports: [CommonModule, L10nModule],
            exports: [ToolbarComponent],
            declarations: [ToolbarComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLToolbarModule);
    return VCLToolbarModule;
}());

var TetherComponent = (function () {
    function TetherComponent(myElement) {
        this.myElement = myElement;
        this.id = 'tetherId' + Math.floor(Math.random() * 10000);
    }
    TetherComponent.prototype.ngAfterViewInit = function () {
        try {
            new Tether({
                element: '#' + this.id,
                target: this.target,
                attachment: this.attachment,
                targetAttachment: this.targetAttachment
            });
        }
        catch (ex) {
            console.log(ex);
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TetherComponent.prototype, "target", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TetherComponent.prototype, "class", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], TetherComponent.prototype, "zIndex", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TetherComponent.prototype, "targetAttachment", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TetherComponent.prototype, "attachment", void 0);
    TetherComponent = __decorate([
        Component({
            selector: 'vcl-tether',
            template: "<div [id]=\"id\" [class]=\"class\" [style.z-index]=\"zIndex\">\n  <ng-content></ng-content>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object])
    ], TetherComponent);
    return TetherComponent;
    var _a;
}());

var VCLTetherModule = (function () {
    function VCLTetherModule() {
    }
    VCLTetherModule = __decorate([
        NgModule({
            imports: [CommonModule],
            exports: [TetherComponent],
            declarations: [TetherComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLTetherModule);
    return VCLTetherModule;
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
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], OverlayManagerService);
    return OverlayManagerService;
}());

var PopoverComponent = (function () {
    function PopoverComponent(overlayManger, myElement) {
        this.overlayManger = overlayManger;
        this.myElement = myElement;
        this.opening = false;
        this.class = 'vclPopOver';
        this.zIndex = 10;
        this.coverZIndex = -1;
        this.targetAttachment = 'bottom left';
        this.attachment = 'top left';
        this.open = false;
        this.layer = false;
        this.openChange = new EventEmitter();
        this.zIndexManaged = true;
        this.expandManaged = true;
    }
    PopoverComponent.prototype.close = function () {
        this.open = false;
        this.openChange.emit(this.open);
    };
    PopoverComponent.prototype.onClick = function (event) {
        if (!this.opening && this.expandManaged && event.path.indexOf(this.myElement.nativeElement) === -1) {
            this.close();
        }
        this.opening = false;
    };
    PopoverComponent.prototype.ngOnChanges = function (changes) {
        try {
            if (this.zIndexManaged) {
                if (changes.open.currentValue === true) {
                    this.zIndex = this.overlayManger.register(this);
                    this.coverZIndex = this.zIndex - 1;
                    this.opening = true;
                }
                else if (changes.open.currentValue === false) {
                    this.zIndex = this.overlayManger.unregister(this);
                    this.coverZIndex = -1;
                }
            }
        }
        catch (ex) { }
    };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "target", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "style", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "class", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], PopoverComponent.prototype, "zIndex", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "targetAttachment", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "attachment", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], PopoverComponent.prototype, "open", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], PopoverComponent.prototype, "layer", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', (typeof (_a = typeof EventEmitter !== 'undefined' && EventEmitter) === 'function' && _a) || Object)
    ], PopoverComponent.prototype, "openChange", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], PopoverComponent.prototype, "zIndexManaged", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], PopoverComponent.prototype, "expandManaged", void 0);
    PopoverComponent = __decorate([
        Component({
            selector: 'vcl-popover',
            template: "<vcl-tether\n  *ngIf=\"open\"\n  [zIndex]=\"zIndex\"\n  [class]=\"class\"\n  [target]=\"target\"\n  [targetAttachment]=\"targetAttachment\"\n  [attachment]=\"attachment\">\n  <div [ngStyle]=\"style\">\n    <ng-content></ng-content>\n  </div>\n</vcl-tether>\n<div *ngIf=\"open && layer\" class=\"vclLayerCover\" [style.zIndex]=\"coverZIndex\" (click)=\"close()\"></div>",
            host: {
                '(document:click)': 'onClick($event)',
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof OverlayManagerService !== 'undefined' && OverlayManagerService) === 'function' && _b) || Object, (typeof (_c = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _c) || Object])
    ], PopoverComponent);
    return PopoverComponent;
    var _a, _b, _c;
}());

var VCLPopoverModule = (function () {
    function VCLPopoverModule() {
    }
    VCLPopoverModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                VCLTetherModule,
            ],
            exports: [PopoverComponent],
            declarations: [PopoverComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLPopoverModule);
    return VCLPopoverModule;
}());

/**
Radio button.

## Usage

```html
<vcl-radio-button
  [(checked)]="checked">
</vcl-radio-button>
```
*/
var RadioButtonComponent = (function () {
    function RadioButtonComponent(elementRef) {
        this.elementRef = elementRef;
        this.checkedIcon = 'fa:dot-circle-o';
        this.uncheckedIcon = 'fa:circle-o';
        this.disabled = false;
        /**
        Refelects the checked state, `true` is checked and `false` is unchecked
        @public
        */
        this.checked = false;
        /**
        Action fired when the `checked` state changes due to user interaction.
        The first parameter is the value of the `checked` property.
        @public
        @action
        */
        this.checkedChange = new EventEmitter();
    }
    RadioButtonComponent.prototype.ngOnInit = function () { };
    RadioButtonComponent.prototype.ngOnChanges = function (changes) {
        if (changes['checked']) {
            var checked = changes['checked'].currentValue;
            this.checkedChange.emit(checked);
            this.focusMaintenance(checked);
        }
    };
    Object.defineProperty(RadioButtonComponent.prototype, "hbVclDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "hbAriaDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "hbChecked", {
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
        this.checkedChange.emit(this.checked);
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
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "checkedIcon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "uncheckedIcon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "checked", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "checkedChange", void 0);
    __decorate([
        HostBinding('class.vclDisabled'), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "hbVclDisabled", null);
    __decorate([
        HostBinding('attr.aria-disabled'), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "hbAriaDisabled", null);
    __decorate([
        HostBinding('attr.checked'), 
        __metadata('design:type', Object)
    ], RadioButtonComponent.prototype, "hbChecked", null);
    __decorate([
        HostListener('keyup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], RadioButtonComponent.prototype, "onKeyup", null);
    __decorate([
        HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], RadioButtonComponent.prototype, "onClick", null);
    RadioButtonComponent = __decorate([
        Component({
            selector: 'vcl-radio-button',
            template: "<vcl-icon [icon]=\"icon\"></vcl-icon><ng-content></ng-content>",
            host: {
                '[attr.role]': '"radio"',
                '[class.vclRadioButton]': 'true',
                '[class.vclScale130p]': 'true',
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object])
    ], RadioButtonComponent);
    return RadioButtonComponent;
    var _a;
}());

var VCLRadioButtonModule = (function () {
    function VCLRadioButtonModule() {
    }
    VCLRadioButtonModule = __decorate([
        NgModule({
            imports: [CommonModule, VCLIconModule],
            exports: [RadioButtonComponent],
            declarations: [RadioButtonComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLRadioButtonModule);
    return VCLRadioButtonModule;
}());

var CheckboxComponent = (function () {
    function CheckboxComponent(elementRef) {
        this.elementRef = elementRef;
        this.checkedIcon = 'fa:check-square-o';
        this.uncheckedIcon = 'fa:square-o';
        this.disabled = false;
        this.tabindex = 0;
        /**
        Refelects the checked state, `true` is checked and `false` is unchecked
        @public
        */
        this.checked = false;
        /**
        Action fired when the `checked` state changes due to user interaction.
        */
        this._checkedChange = new EventEmitter();
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
            this._checkedChange.emit(checked);
            this.focusMaintenance(checked);
        }
    };
    Object.defineProperty(CheckboxComponent.prototype, "hbVclDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "hbAriaDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "hbChecked", {
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
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "checkedIcon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "uncheckedIcon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "disabled", void 0);
    __decorate([
        HostBinding('attr.tabindex'),
        Input(), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "checked", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "_checkedChange", void 0);
    __decorate([
        HostBinding('class.vclDisabled'), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "hbVclDisabled", null);
    __decorate([
        HostBinding('attr.aria-disabled'), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "hbAriaDisabled", null);
    __decorate([
        HostBinding('attr.checked'), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "hbChecked", null);
    __decorate([
        HostListener('keyup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CheckboxComponent.prototype, "onKeyup", null);
    __decorate([
        HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CheckboxComponent.prototype, "onClick", null);
    CheckboxComponent = __decorate([
        Component({
            selector: 'vcl-checkbox',
            template: "<vcl-icon [icon]=\"icon\"></vcl-icon><ng-content></ng-content>",
            host: {
                '[attr.role]': '"checkbox"',
                '[class.vclCheckbox]': 'true',
                '[class.vclScale130p]': 'true',
            },
            changeDetection: ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object])
    ], CheckboxComponent);
    return CheckboxComponent;
    var _a;
}());

var VCLCheckboxModule = (function () {
    function VCLCheckboxModule() {
    }
    VCLCheckboxModule = __decorate([
        NgModule({
            imports: [CommonModule, VCLIconModule],
            exports: [CheckboxComponent],
            declarations: [CheckboxComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLCheckboxModule);
    return VCLCheckboxModule;
}());

/**
Radio button.

## Usage

```html
<vcl-radio-button
  [(checked)]="checked">
</vcl-radio-button>
```
*/
var FormControlLabelComponent = (function () {
    function FormControlLabelComponent() {
        this.disabled = false;
        this.requiredIndicatorCharacter = '•';
        // The label
        this.label = null;
        // Optional sub-label
        this.subLabel = null;
        // Whether the label prepends the child content
        this.prepend = false;
        // Whether the label wraps the labelled control
        this.wrapping = false;
        // Whether an indicator that an input in to the labelled control is required
        this.required = false;
        // Accessible label for the required indicator
        this.requiredIndLabel = null;
    }
    FormControlLabelComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(FormControlLabelComponent.prototype, "hbWrapping", {
        get: function () {
            return !!this.wrapping;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlLabelComponent.prototype, "hbVclDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "disabled", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "requiredIndicatorCharacter", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "label", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "subLabel", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "prepend", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "wrapping", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "required", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "requiredIndLabel", void 0);
    __decorate([
        HostBinding('class.vclFormControlLabelWrapping'), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "hbWrapping", null);
    __decorate([
        HostBinding('class.vclDisabled'), 
        __metadata('design:type', Object)
    ], FormControlLabelComponent.prototype, "hbVclDisabled", null);
    FormControlLabelComponent = __decorate([
        Component({
            selector: '[vcl-form-control-label]',
            template: "<ng-content *ngIf=\"prepend\"></ng-content>\n{{label}}\n<em *ngIf=\"required\" class=\"vclRequiredIndicator\" aria-hidden=\"true\" [attr.aria-label]=\"requiredIndLabel\">\n  {{requiredIndicatorCharacter}}\n</em>\n<label *ngIf=\"subLabel\" class=\"vclFormControlSubLabel\">\n  {{subLabel}}\n</label>\n<ng-content *ngIf=\"!prepend\"></ng-content>",
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
        NgModule({
            imports: [CommonModule, VCLIconModule],
            exports: [FormControlLabelComponent],
            declarations: [FormControlLabelComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLFormControlLabelModule);
    return VCLFormControlLabelModule;
}());

function setAnimations(cls, animations) {
    setAnnotation(cls, 'animations', animations);
}
function setAnnotation(cls, key, value) {
    var annotation = getAnnotation(cls);
    // Change metadata
    annotation[key] = value;
    // Set metadata
    Reflect.defineMetadata('annotations', [new Component(annotation)], cls);
}
function SubComponent(annotation) {
    return function (cls) {
        var baseCls = Object.getPrototypeOf(cls.prototype).constructor;
        var baseClsAnnotation = getAnnotation(baseCls);
        Object.keys(baseClsAnnotation).forEach(function (key) {
            if (baseClsAnnotation[key] !== undefined && annotation[key] === undefined) {
                annotation[key] = baseClsAnnotation[key];
            }
        });
        Reflect.defineMetadata('annotations', [new Component(annotation)], cls);
    };
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

var VCLModule = (function () {
    function VCLModule() {
    }
    VCLModule = __decorate([
        NgModule({
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
                VCLTabNavModule,
                VCLNavigationModule,
                VCLToolbarModule,
                VCLPopoverModule,
                VCLRadioButtonModule,
                VCLCheckboxModule,
                VCLFormControlLabelModule,
                VCLMetalistModule,
                VCLDropdownModule,
                VCLSelectModule,
                VCLOffClickModule
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
                VCLTabNavModule,
                VCLNavigationModule,
                VCLToolbarModule,
                VCLPopoverModule,
                VCLRadioButtonModule,
                VCLCheckboxModule,
                VCLFormControlLabelModule,
                VCLMetalistModule,
                VCLDropdownModule,
                VCLSelectModule,
                VCLOffClickModule
            ],
            providers: [
                OverlayManagerService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLModule);
    return VCLModule;
}());

export { VCLModule, setAnimations, setAnnotation, SubComponent, IconComponent, IconService, VCLIconModule, VCLIcogramModule, VCLButtonModule, VCLButtonGroupModule, LayerBaseComponent, LayerDirective, LayerService, VCLLayerModule, VCLTabNavModule, VCLNavigationModule, VCLToolbarModule, VCLTetherModule, VCLLinkModule, PopoverComponent, VCLPopoverModule, VCLRadioButtonModule, VCLCheckboxModule, Wormhole, ConnectWormhole, VCLWormholeModule, OffClickDirective, VCLOffClickModule, L10nModule, L10nNoopLoaderService, L10nStaticLoaderService, L10nFormatParserService, L10nService };
