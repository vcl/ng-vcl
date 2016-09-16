"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var wormhole_1 = require('./../../directives/wormhole');
var core_1 = require('@angular/core');
/**
vcl-tab-nav

## Usage

```html

<vcl-tab-nav>
  <vcl-tab>
    <template vcl-tab-label>
      Tab1
    </template>
    <template vcl-tab-content>
      Content1
    </template>
  </vcl-tab>
  <vcl-tab>
    <template vcl-tab-label>
      Tab2
    </template>
    <template vcl-tab-content>
      Content2
    </template>
  </vcl-tab>
  <vcl-tab [disabled]="true">
    <template vcl-tab-label>
      Tab3 disabled
    </template>
    <template vcl-tab-content>
      Content2
    </template>
  </vcl-tab>
</vcl-tab-nav>
```
*/
var TabLabelDirective = (function (_super) {
    __extends(TabLabelDirective, _super);
    function TabLabelDirective(templateRef) {
        _super.call(this, templateRef);
        this.templateRef = templateRef;
    }
    TabLabelDirective.prototype.ngOnInit = function () { };
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
    TabContentDirective.prototype.ngOnInit = function () { };
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
    TabComponent.prototype.ngAfterViewInit = function () {
        console.log(this.label);
    };
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
    function TabNavComponent() {
    }
    TabNavComponent.prototype.ngAfterViewInit = function () {
        this.selectTab(0);
    };
    TabNavComponent.prototype.selectTab = function (tab) {
        var tabs = this.tabs.toArray();
        if (typeof tab === 'number' && tabs[tab]) {
            tab = tabs[tab];
        }
        if (tab instanceof TabComponent && !tab.disabled) {
            this.currentTab = tab;
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
    };
    return TabNavComponent;
}());
exports.TabNavComponent = TabNavComponent;
