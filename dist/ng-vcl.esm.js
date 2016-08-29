import { NgModule, ChangeDetectionStrategy, Component, Input, Injectable, OpaqueToken, Inject, Optional, Pipe, ElementRef, HostBinding, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import Tether from 'tether';

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

var IconService = (function () {
    function IconService() {
    }
    IconService.prototype.fa = function (icon) {
        return "fa fa-" + icon;
    };
    IconService.prototype.lookup = function (icon) {
        var className = '';
        if (typeof icon === 'string' && icon) {
            var iconName = icon;
            var providerName = void 0;
            var iconParts = iconName.split(':');
            if (iconParts.length > 1) {
                providerName = iconParts[0];
                iconName = iconParts[1];
            }
            else {
                providerName = 'fa';
            }
            if (!this[providerName]) {
                throw new Error('Invalid icon provider: ' + providerName);
            }
            return this[providerName](iconName);
        }
        return null;
    };
    IconService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], IconService);
    return IconService;
}());

/**
Icon which can be based on glyphs from icon fonts, inline svg and bitmaps.
The `label` is never displayed, it is only for accessibility with screen
readers.
The `hidden` attribute is only reflected in the `aria-hidden` property which
allows to hide the icon to screen readers, if it is only of presentational character.
See http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html for details.

Usage:

```html
<vcl-icon icon="fa:chevron-right" label="chevron right" hidden="false"></vcl-icon>
```
or
```html
<vcl-icon src="..."></vcl-icon>
```
or
```html
<vcl-icon svguse="..."></vcl-icon>
````

@param    src             optional      URL of a graphics resource
@param    svguse          optional      Generates an SVG `use` tag referencing the value
@param    icon            optional      Icon generator lookup via icon provider registered in the meta facility
@param    iconClass       optional      Additional class
@param    label           optional      `aria-label`
*/
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
    Object.defineProperty(IconComponent.prototype, "isHidden", {
        // Do not hide when a label is provided
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
            template: "<span class=\"vclIcon {{iconClass}} {{fontIconClass}}\" [attr.aria-label]=\"label | loc\" [attr.aria-hidden]=\"hidden\">\n  <ng-content></ng-content>\n  <img *ngIf=\"src\" src=\"{{src}}\">\n  <svg *ngIf=\"svguse\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n    <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" attr.xlink:href=\"{{svguse}}\"></use>\n  </svg>\n</span>\n",
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
;
var L10nService = (function () {
    function L10nService(config, loader, parser) {
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
                L10nLoaderService,
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
@demo example
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

/**
The main control for triggering actions

## Usage

```html
<button vcl-button label="My Button" (click)=""doSomething()></button>
```

@demo example

@property     {String}    label    textual label
*/
var ButtonComponent = (function () {
    function ButtonComponent() {
        this.hovered = false; // `true` if a pointer device is hovering the button (CSS' :hover)
        this.pressed = false; // `true` if a pointer device is conducting a `down` gesture on the button
        this.focused = false; // `true` if the element is focused  (CSS' :focus)
        this.selected = false;
        // TODO: Doc missing. Input attr?
        this.busy = false; // State to indicate that the button is disabled as a operation is in progress
        this.flexLabel = false;
    }
    ButtonComponent.prototype.domouseenter = function () {
        console.log('mouseenter');
    };
    ButtonComponent.prototype.domouseleave = function () {
        console.log('mouseleave');
    };
    ButtonComponent.prototype.ngOnInit = function () { };
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
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "appIcon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "appIconBusy", void 0);
    ButtonComponent = __decorate([
        Component({
            selector: '[vcl-button]',
            host: {
                '(mouseenter)': 'hovered=true',
                '(mouseleave)': 'hovered=false',
                '(mousedown)': 'pressed=true',
                '(mouseup)': 'pressed=false',
                '(onfocus)': 'focused=true;',
                '(onblur)': 'focused=false',
                '[class.vclButton]': 'true',
                '[class.vclHovered]': 'hovered',
                '[class.vclDisabled]': 'disabled',
                '[class.vclSelected]': 'selected',
            },
            template: "<span>\n  <ng-content></ng-content>\n  <vcl-icogram\n    [label]=\"calculatedLabel | loc\"\n    [flexLabel]=\"flexLabel | loc\"\n    [prepIcon]=\"calculatedPrepIcon\"\n    [appIcon]=\"calculatedAppIcon\">\n  </vcl-icogram>\n</span>\n\n",
            // encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonComponent);
    return ButtonComponent;
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

var LayerComponent = (function () {
    function LayerComponent(overlayManger, myElement) {
        this.overlayManger = overlayManger;
        this.myElement = myElement;
        this.open = false;
        this.openChange = new EventEmitter();
        this.modal = true;
        this.zIndex = -1;
        this.coverZIndex = -1;
    }
    LayerComponent.prototype.close = function () {
        this.open = false;
        this.openChange.emit(this.open);
    };
    LayerComponent.prototype.onClick = function (event) {
        //layer covers 100% screen width & height. first element in layer represents 'outside'
        if (!this.modal && event.target.parentNode === this.myElement.nativeElement) {
            this.close();
        }
    };
    LayerComponent.prototype.ngOnChanges = function (changes) {
        try {
            if (changes.open.currentValue === true) {
                this.zIndex = this.overlayManger.register(this);
                this.coverZIndex = this.zIndex - 1;
            }
            else if (changes.open.currentValue === false) {
                this.zIndex = this.overlayManger.unregister(this);
                this.coverZIndex = -1;
            }
        }
        catch (ex) { }
    };
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], LayerComponent.prototype, "open", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', (typeof (_a = typeof EventEmitter !== 'undefined' && EventEmitter) === 'function' && _a) || Object)
    ], LayerComponent.prototype, "openChange", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], LayerComponent.prototype, "modal", void 0);
    LayerComponent = __decorate([
        Component({
            selector: 'vcl-layer',
            template: "<div *ngIf=\"open\" class=\"vclLayer\" role=\"dialog\" [style.z-index]=\"zIndex\">\n  <ng-content></ng-content>\n</div>\n<div *ngIf=\"open && modal\" class=\"vclLayerCover\" [style.zIndex]=\"coverZIndex\"></div>",
            host: {
                '(document:click)': 'onClick($event)',
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof OverlayManagerService !== 'undefined' && OverlayManagerService) === 'function' && _b) || Object, (typeof (_c = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _c) || Object])
    ], LayerComponent);
    return LayerComponent;
    var _a, _b, _c;
}());

var VCLLayerModule = (function () {
    function VCLLayerModule() {
    }
    VCLLayerModule = __decorate([
        NgModule({
            imports: [CommonModule],
            exports: [LayerComponent],
            declarations: [LayerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], VCLLayerModule);
    return VCLLayerModule;
}());

var TetherComponent = (function () {
    function TetherComponent(myElement) {
        this.myElement = myElement;
        this.id = 'theterId' + Math.floor(Math.random() * 10000);
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

var VCLModule = (function () {
    function VCLModule() {
    }
    VCLModule = __decorate([
        NgModule({
            imports: [
                VCLIconModule,
                VCLIcogramModule,
                VCLButtonModule,
                VCLLayerModule,
                VCLTetherModule,
                VCLPopoverModule,
            ],
            exports: [
                VCLIconModule,
                VCLIcogramModule,
                VCLButtonModule,
                VCLLayerModule,
                VCLTetherModule,
                VCLPopoverModule,
            ],
            providers: [
                OverlayManagerService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], VCLModule);
    return VCLModule;
}());

export { VCLModule, VCLIconModule, VCLIcogramModule, VCLButtonModule, VCLLayerModule, VCLTetherModule, TetherComponent, VCLPopoverModule, PopoverComponent, L10nModule, L10nNoopLoaderService, L10nStaticLoaderService, L10nFormatParserService, L10nService, OverlayManagerService };