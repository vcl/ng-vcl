import { NgModule, Input, ChangeDetectionStrategy, Component, Injectable, OpaqueToken, Inject, Optional, Pipe, HostBinding, ElementRef, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as Tether from 'tether';

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

let IconService = class IconService {
    fa(icon) {
        return `fa fa-${icon}`;
    }
    lookup(icon) {
        let className = '';
        if (typeof icon === 'string' && icon) {
            let iconName = icon;
            let providerName;
            let iconParts = iconName.split(':');
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
    }
};
IconService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], IconService);

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
let IconComponent = class IconComponent {
    constructor(_iconService) {
        this._iconService = _iconService;
    }
    get fontIconClass() {
        if (this.icon) {
            return this._iconService.lookup(this.icon);
        }
    }
    get mergedIconClass() {
        return `${this.fontIconClass || ''} ${this.iconClass || ''}`;
    }
    // Do not hide when a label is provided
    get isHidden() {
        return !this.label;
    }
};
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
        template: `<span class="vclIcon {{iconClass}} {{fontIconClass}}" [attr.aria-label]="label | loc" [attr.aria-hidden]="hidden">
  <ng-content></ng-content>
  <img *ngIf="src" src="{{src}}">
  <svg *ngIf="svguse" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" attr.xlink:href="{{svguse}}"></use>
  </svg>
</span>
`,
        changeDetection: ChangeDetectionStrategy.OnPush
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof IconService !== 'undefined' && IconService) === 'function' && _a) || Object])
], IconComponent);
var _a;

let L10N_LOADER_CONFIG = new OpaqueToken('l10n.loader.config');
class L10nLoaderService {
    getSupportedLocales() {
        return Observable.of([]);
    }
}
let L10nStaticLoaderService = class L10nStaticLoaderService extends L10nLoaderService {
    constructor(config) {
        super();
        this.config = config;
    }
    flatten(locale, data) {
        let pkg = {};
        Object.keys(data).forEach(key => {
            if (data[key] && data[key][locale]) {
                pkg[key] = data[key][locale];
            }
        });
        return pkg;
    }
    getSupportedLocales() {
        let supportedLocales = [];
        Object.keys(this.config).forEach(key => {
            if (this.config[key]) {
                Object.keys(this.config[key]).forEach(locale => {
                    supportedLocales.push(locale);
                });
            }
        });
        // unique
        return Observable.of(Array.from(new Set(supportedLocales)));
    }
    getTranslationPackage(locale) {
        let pkg = this.flatten(locale, this.config);
        return Observable.of(pkg);
    }
};
L10nStaticLoaderService = __decorate([
    Injectable(),
    __param(0, Inject(L10N_LOADER_CONFIG)), 
    __metadata('design:paramtypes', [Object])
], L10nStaticLoaderService);
let L10nNoopLoaderService = class L10nNoopLoaderService extends L10nLoaderService {
    getTranslationPackage(locale) {
        return Observable.of({});
    }
};
L10nNoopLoaderService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], L10nNoopLoaderService);

class L10nParserService {
}
let L10nFormatParserService = class L10nFormatParserService extends L10nParserService {
    parse(value, ...args) {
        return value.replace(/{(\d+)}/g, (match, idx) => {
            return typeof args[idx] === 'string' ? args[idx] : match;
        });
    }
};
L10nFormatParserService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], L10nFormatParserService);

let L10N_CONFIG = new OpaqueToken('l10n.config');
;
let L10nService = class L10nService {
    constructor(config, loader, parser) {
        this.config = config;
        this.loader = loader;
        this.parser = parser;
        this.packages = {};
        this.locale = (config.locale || this.getNavigatorLang() || 'en-us').toLowerCase();
        this.locale$ = new BehaviorSubject(this.locale);
        // Initialize the streams
        let supportedLocales$ = this.getSupportedLocales();
        // Set up stream of valid locale 
        let locale$ = Observable.combineLatest(supportedLocales$, this.locale$, (supportedLocales, locale) => {
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
        let fbLocale$ = Observable.combineLatest(supportedLocales$, locale$, (supportedLocales, locale) => {
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
        this.package$ = locale$.switchMap(locale => this.getTranslationPackage(locale));
        let fbPackage$ = fbLocale$.switchMap((fbLocale) => {
            return fbLocale ? this.getTranslationPackage(fbLocale) : Observable.of({});
        });
        this.fbPackage$ = Observable.combineLatest(this.package$, fbPackage$, (pkg, fbPkg) => {
            return fbPkg ? Object.assign({}, fbPkg, pkg) : pkg;
        });
    }
    /**
    * @internal
    */
    getTranslationPackage(locale) {
        // Cache package streams and share
        if (!this.packages[locale]) {
            this.packages[locale] = this.loader.getTranslationPackage(locale).publishLast().refCount();
        }
        return this.packages[locale];
    }
    /**
    * Gets supported locales
    */
    getSupportedLocales() {
        // Cache supportedLocales and share
        if (!this.supportedLocales$) {
            this.supportedLocales$ = this.loader
                .getSupportedLocales()
                .map(sl => sl.map(locale => locale.toLowerCase()))
                .publishLast()
                .refCount();
        }
        return this.supportedLocales$;
    }
    /**
    * Set the current locale.
    * Emits new translation values to subscribers
    * @param locale
    */
    setLocale(locale) {
        this.locale = locale.toLowerCase();
        this.locale$.next(this.locale);
    }
    /**
    * Looks up the value for the provided key in the current tranlsation package.
    * Falls back to the fbLocale translation package if the key is not found.
    * @param key
    * @param params
    * @returns {Observable<string>} The translated key
    */
    localize(key, ...args) {
        return this.package$.switchMap(pkg => {
            return pkg[key] ? Observable.of(pkg) : this.fbPackage$;
        }).map(pkg => {
            return pkg[key] ? this.parser.parse(pkg[key], ...args) : key;
        });
    }
    // alias for localize
    loc(key, ...args) {
        return this.localize(key, ...args);
    }
    getNavigatorLang() {
        if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
            const nav = window.navigator;
            if (nav['languages'] && nav['languages'].length > 0) {
                return nav['languages'][0];
            }
            else {
                return nav['language'] || nav['browserLanguage'];
            }
        }
    }
};
L10nService = __decorate([
    Injectable(),
    __param(0, Inject(L10N_CONFIG)), 
    __metadata('design:paramtypes', [Object, (typeof (_a$1 = typeof L10nLoaderService !== 'undefined' && L10nLoaderService) === 'function' && _a$1) || Object, (typeof (_b = typeof L10nParserService !== 'undefined' && L10nParserService) === 'function' && _b) || Object])
], L10nService);
var _a$1;
var _b;

let L10nPipe = class L10nPipe {
    constructor(l10n) {
        this.l10n = l10n;
        this.args = [];
    }
    // Check if key and args match
    compare(key, ...args) {
        return key === this.key &&
            args.length === this.args.length &&
            args.every((v, idx) => v === this.args[idx]);
    }
    transform(key, ...args) {
        // Dispose subscription if key or params are different
        if (!this.compare(key, ...args) && this.subscription) {
            this._dispose();
        }
        // store key and args for comparison
        this.key = key;
        this.args = args;
        if (!this.subscription) {
            this.subscription = this.l10n.localize(key, ...args).subscribe(value => {
                this.value = value;
            });
        }
        return this.value;
    }
    _dispose() {
        this.subscription.unsubscribe();
        this.value = null;
        this.subscription = null;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this._dispose();
        }
    }
};
L10nPipe = __decorate([
    Pipe({
        name: 'loc',
        pure: false
    }),
    __param(0, Optional()), 
    __metadata('design:paramtypes', [(typeof (_a$2 = typeof L10nService !== 'undefined' && L10nService) === 'function' && _a$2) || Object])
], L10nPipe);
var _a$2;

let L10nModule_1 = class L10nModule {
    static forRoot(config) {
        return {
            ngModule: L10nModule_1,
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
    }
};
let L10nModule = L10nModule_1;
L10nModule = L10nModule_1 = __decorate([
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

let VCLIconModule = class VCLIconModule {
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
let IcogramComponent = class IcogramComponent {
    // TODO prepIconSrc not implemented but used in example
    // @Input() prepIconSrc: string;
    constructor(elRef) {
        this.el = elRef.nativeElement;
    }
    ngOnInit() { }
    get ariaRole() {
        return (this.el && this.el.tagName.toLowerCase() !== 'a' && this.href) ? 'link' : null;
    }
};
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
        template: `<ng-content></ng-content>
<vcl-icon *ngIf="prepIcon" [icon]="prepIcon"></vcl-icon>
<span *ngIf="!!label" [class.vclLayoutFlex]="!!flexLabel" class="vclText">
  {{label | loc}}
</span>
<vcl-icon *ngIf="appIcon" [icon]="appIcon"></vcl-icon>
`,
        changeDetection: ChangeDetectionStrategy.OnPush
    }), 
    __metadata('design:paramtypes', [(typeof (_a$3 = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a$3) || Object])
], IcogramComponent);
var _a$3;

let VCLIcogramModule = class VCLIcogramModule {
};
VCLIcogramModule = __decorate([
    NgModule({
        imports: [CommonModule, VCLIconModule, L10nModule],
        exports: [IcogramComponent],
        declarations: [IcogramComponent],
        providers: [],
    }), 
    __metadata('design:paramtypes', [])
], VCLIcogramModule);

/**
The main control for triggering actions

## Usage

```html
<button vcl-button label="My Button" (click)=""doSomething()></button>
```

@demo example

@property     {String}    label    textual label
*/
let ButtonComponent = class ButtonComponent {
    constructor() {
        this.hovered = false; // `true` if a pointer device is hovering the button (CSS' :hover)
        this.pressed = false; // `true` if a pointer device is conducting a `down` gesture on the button
        this.focused = false; // `true` if the element is focused  (CSS' :focus)
        this.selected = false;
        // TODO: Doc missing. Input attr?
        this.busy = false; // State to indicate that the button is disabled as a operation is in progress
        this.flexLabel = false;
    }
    domouseenter() {
        console.log('mouseenter');
    }
    domouseleave() {
        console.log('mouseleave');
    }
    ngOnInit() { }
    get calculatedLabel() {
        return (this.busy && this.busyLabel) ? this.busyLabel : this.label;
    }
    get calculatedPrepIcon() {
        return (this.busy && this.prepIconBusy) ? this.prepIconBusy : this.prepIcon;
    }
    get calculatedAppIcon() {
        return (this.busy && this.appIconBusy) ? this.appIconBusy : this.appIcon;
    }
};
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
        template: `<span>
  <ng-content></ng-content>
  <vcl-icogram
    [label]="calculatedLabel | loc"
    [flexLabel]="flexLabel | loc"
    [prepIcon]="calculatedPrepIcon"
    [appIcon]="calculatedAppIcon">
  </vcl-icogram>
</span>

`,
        // encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
    }), 
    __metadata('design:paramtypes', [])
], ButtonComponent);

let VCLButtonModule = class VCLButtonModule {
};
VCLButtonModule = __decorate([
    NgModule({
        imports: [CommonModule, VCLIcogramModule, L10nModule],
        exports: [ButtonComponent],
        declarations: [ButtonComponent],
        providers: [],
    }), 
    __metadata('design:paramtypes', [])
], VCLButtonModule);

let OverlayManagerService = class OverlayManagerService {
    constructor() {
        this.components = [];
    }
    register(component) {
        let zIndex = 100;
        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i].zIndex >= zIndex) {
                zIndex = this.components[i].zIndex;
            }
        }
        this.components.push(component);
        return zIndex + 10;
    }
    unregister(component) {
        let index = this.components.indexOf(component);
        this.components.splice(index, 1);
        return -1;
    }
};
OverlayManagerService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], OverlayManagerService);

let LayerComponent = class LayerComponent {
    constructor(overlayManger, myElement) {
        this.overlayManger = overlayManger;
        this.myElement = myElement;
        this.open = false;
        this.openChange = new EventEmitter();
        this.modal = true;
        this.zIndex = -1;
        this.coverZIndex = -1;
    }
    close() {
        this.open = false;
        this.openChange.emit(this.open);
    }
    onClick(event) {
        //layer covers 100% screen width & height. first element in layer represents 'outside'
        if (!this.modal && event.target.parentNode === this.myElement.nativeElement) {
            this.close();
        }
    }
    ngOnChanges(changes) {
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
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], LayerComponent.prototype, "open", void 0);
__decorate([
    Output(), 
    __metadata('design:type', (typeof (_a$4 = typeof EventEmitter !== 'undefined' && EventEmitter) === 'function' && _a$4) || Object)
], LayerComponent.prototype, "openChange", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], LayerComponent.prototype, "modal", void 0);
LayerComponent = __decorate([
    Component({
        selector: 'vcl-layer',
        template: `<div *ngIf="open" class="vclLayer" role="dialog" [style.z-index]="zIndex">
  <ng-content></ng-content>
</div>
<div *ngIf="open && modal" class="vclLayerCover" [style.zIndex]="coverZIndex"></div>`,
        host: {
            '(document:click)': 'onClick($event)',
        },
    }), 
    __metadata('design:paramtypes', [(typeof (_b$1 = typeof OverlayManagerService !== 'undefined' && OverlayManagerService) === 'function' && _b$1) || Object, (typeof (_c = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _c) || Object])
], LayerComponent);
var _a$4;
var _b$1;
var _c;

let VCLLayerModule = class VCLLayerModule {
};
VCLLayerModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [LayerComponent],
        declarations: [LayerComponent]
    }), 
    __metadata('design:paramtypes', [])
], VCLLayerModule);

let TetherComponent = class TetherComponent {
    constructor(myElement) {
        this.myElement = myElement;
        this.id = 'theterId' + Math.floor(Math.random() * 10000);
    }
    ngAfterViewInit() {
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
        template: `<div [id]="id" [class]="class" [style.z-index]="zIndex">
  <ng-content></ng-content>
</div>
`
    }), 
    __metadata('design:paramtypes', [(typeof (_a$5 = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a$5) || Object])
], TetherComponent);
var _a$5;

let VCLTetherModule = class VCLTetherModule {
};
VCLTetherModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [TetherComponent],
        declarations: [TetherComponent]
    }), 
    __metadata('design:paramtypes', [])
], VCLTetherModule);

let PopoverComponent = class PopoverComponent {
    constructor(overlayManger, myElement) {
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
    close() {
        this.open = false;
        this.openChange.emit(this.open);
    }
    onClick(event) {
        if (!this.opening && this.expandManaged && event.path.indexOf(this.myElement.nativeElement) === -1) {
            this.close();
        }
        this.opening = false;
    }
    ngOnChanges(changes) {
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
    }
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
    __metadata('design:type', (typeof (_a$6 = typeof EventEmitter !== 'undefined' && EventEmitter) === 'function' && _a$6) || Object)
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
        template: `<vcl-tether
  *ngIf="open"
  [zIndex]="zIndex"
  [class]="class"
  [target]="target"
  [targetAttachment]="targetAttachment"
  [attachment]="attachment">
  <div [ngStyle]="style">
    <ng-content></ng-content>
  </div>
</vcl-tether>
<div *ngIf="open && layer" class="vclLayerCover" [style.zIndex]="coverZIndex" (click)="close()"></div>`,
        host: {
            '(document:click)': 'onClick($event)',
        },
    }), 
    __metadata('design:paramtypes', [(typeof (_b$2 = typeof OverlayManagerService !== 'undefined' && OverlayManagerService) === 'function' && _b$2) || Object, (typeof (_c$1 = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _c$1) || Object])
], PopoverComponent);
var _a$6;
var _b$2;
var _c$1;

let VCLPopoverModule = class VCLPopoverModule {
};
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

let VCLModule = class VCLModule {
};
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

export { VCLModule, VCLIconModule, VCLIcogramModule, VCLButtonModule, VCLLayerModule, VCLTetherModule, TetherComponent, VCLPopoverModule, PopoverComponent, L10nModule, L10nNoopLoaderService, L10nStaticLoaderService, L10nFormatParserService, L10nService };