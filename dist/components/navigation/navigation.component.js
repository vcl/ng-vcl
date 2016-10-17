"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
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
        this.select = new core_1.EventEmitter();
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
    NavigationComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-navigation',
                    templateUrl: 'navigation.component.html',
                },] },
    ];
    /** @nocollapse */
    NavigationComponent.ctorParameters = [
        { type: router_1.Router, },
    ];
    NavigationComponent.propDecorators = {
        'selectedItem': [{ type: core_1.Input },],
        'ariaRole': [{ type: core_1.Input },],
        'tabindex': [{ type: core_1.Input },],
        'touchAction': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'subLevelHintIconClosed': [{ type: core_1.Input },],
        'subLevelHintIconOpened': [{ type: core_1.Input },],
        'subLevelHintIconSide': [{ type: core_1.Input },],
        'navigationItems': [{ type: core_1.Input },],
        'select': [{ type: core_1.Output },],
    };
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
