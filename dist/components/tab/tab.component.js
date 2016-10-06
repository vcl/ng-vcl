"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var wormhole_1 = require('./../../directives/wormhole');
var core_1 = require('@angular/core');
var TabLabelDirective = (function (_super) {
    __extends(TabLabelDirective, _super);
    function TabLabelDirective(templateRef) {
        _super.call(this, templateRef);
        this.templateRef = templateRef;
    }
    TabLabelDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[vcl-tab-label]'
                },] },
    ];
    /** @nocollapse */
    TabLabelDirective.ctorParameters = [
        { type: core_1.TemplateRef, },
    ];
    return TabLabelDirective;
}(wormhole_1.Wormhole));
exports.TabLabelDirective = TabLabelDirective;
var TabContentDirective = (function (_super) {
    __extends(TabContentDirective, _super);
    function TabContentDirective(templateRef) {
        _super.call(this, templateRef);
        this.templateRef = templateRef;
    }
    TabContentDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[vcl-tab-content]'
                },] },
    ];
    /** @nocollapse */
    TabContentDirective.ctorParameters = [
        { type: core_1.TemplateRef, },
    ];
    return TabContentDirective;
}(wormhole_1.Wormhole));
exports.TabContentDirective = TabContentDirective;
var TabComponent = (function () {
    function TabComponent() {
        this.disabled = false;
    }
    TabComponent.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'vcl-tab'
                },] },
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = [];
    TabComponent.propDecorators = {
        'label': [{ type: core_1.ContentChild, args: [TabLabelDirective,] },],
        'content': [{ type: core_1.ContentChild, args: [TabContentDirective,] },],
        'disabled': [{ type: core_1.Input },],
    };
    return TabComponent;
}());
exports.TabComponent = TabComponent;
var TabNavComponent = (function () {
    function TabNavComponent(_zone) {
        this._zone = _zone;
        this.selectedTabIndex = 0;
        this.selectedTabIndexChange$ = new core_1.EventEmitter();
    }
    Object.defineProperty(TabNavComponent.prototype, "selectedTabIndexChange", {
        get: function () {
            return this.selectedTabIndexChange$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
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
    TabNavComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-tab-nav',
                    templateUrl: 'tab-nav.component.html'
                },] },
    ];
    /** @nocollapse */
    TabNavComponent.ctorParameters = [
        { type: core_1.NgZone, },
    ];
    TabNavComponent.propDecorators = {
        'tabs': [{ type: core_1.ContentChildren, args: [TabComponent,] },],
        'selectedTabIndex': [{ type: core_1.Input },],
        'selectedTabIndexChange': [{ type: core_1.Output },],
    };
    return TabNavComponent;
}());
exports.TabNavComponent = TabNavComponent;
