"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var l10n_module_1 = require('../../l10n/l10n.module');
var index_1 = require('../../reactive/index');
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
    LinkComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[vcl-link]',
                    templateUrl: 'link.component.html',
                    host: {
                        '[attr.touch-action]': 'touchAction' // TODO - no function?
                    },
                },] },
    ];
    /** @nocollapse */
    LinkComponent.ctorParameters = [
        { type: l10n_module_1.L10nService, },
    ];
    LinkComponent.propDecorators = {
        'href': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'scheme': [{ type: core_1.Input },],
        'prepIcon': [{ type: core_1.Input },],
        'appIcon': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.HostBinding, args: ['class.vclDisabled',] }, { type: core_1.Input },],
        'attrHref': [{ type: core_1.HostBinding, args: ['attr.href',] },],
        'locTitle': [{ type: core_1.HostBinding, args: ['attr.title',] }, { type: core_1.HostBinding, args: ['attr.aria-label',] },],
    };
    return LinkComponent;
}(index_1.ObservableComponent));
exports.LinkComponent = LinkComponent;
