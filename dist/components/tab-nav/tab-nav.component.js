"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var wormhole_module_1 = require('./../../directives/wormhole/wormhole.module');
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
}(wormhole_module_1.WormholeGenerator));
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
}(wormhole_module_1.WormholeGenerator));
exports.TabContentDirective = TabContentDirective;
var TabComponent = (function () {
    function TabComponent() {
        this.disabled = false;
        this.tabClass = '';
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
        'tabClass': [{ type: core_1.Input },],
    };
    return TabComponent;
}());
exports.TabComponent = TabComponent;
var TabNavComponent = (function () {
    function TabNavComponent() {
        this.layout = '';
        this.tabbableClass = '';
        this.tabsClass = '';
        this.tabContentClass = '';
        // Sets vclTabStyleUni on vclTabs and removes vclNoBorder on vclTabContent when true
        this.borders = false;
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
    TabNavComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-tab-nav',
                    templateUrl: 'tab-nav.component.html'
                },] },
    ];
    /** @nocollapse */
    TabNavComponent.ctorParameters = [];
    TabNavComponent.propDecorators = {
        'tabs': [{ type: core_1.ContentChildren, args: [TabComponent,] },],
        'layout': [{ type: core_1.Input },],
        'tabbableClass': [{ type: core_1.Input },],
        'tabsClass': [{ type: core_1.Input },],
        'tabContentClass': [{ type: core_1.Input },],
        'borders': [{ type: core_1.Input },],
        'selectedTabIndex': [{ type: core_1.Input },],
        'selectedTabIndexChange': [{ type: core_1.Output },],
    };
    return TabNavComponent;
}());
exports.TabNavComponent = TabNavComponent;
