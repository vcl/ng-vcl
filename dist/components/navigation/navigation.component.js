"use strict";
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
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
    NavigationItemComponent.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'vcl-navitem'
                },] },
    ];
    /** @nocollapse */
    NavigationItemComponent.ctorParameters = [];
    NavigationItemComponent.propDecorators = {
        'label': [{ type: core_1.Input, args: ['label',] },],
        'route': [{ type: core_1.Input, args: ['route',] },],
        'items': [{ type: core_1.ContentChildren, args: [NavigationItemComponent,] },],
        'active': [{ type: core_1.Input },],
        'selected': [{ type: core_1.Input },],
        'opened': [{ type: core_1.Input },],
        'heading': [{ type: core_1.Input },],
        'href': [{ type: core_1.Input, args: ['href',] },],
        'prepIcon': [{ type: core_1.Input, args: ['prepIcon',] },],
        'appIcon': [{ type: core_1.Input, args: ['appIcon',] },],
        'class': [{ type: core_1.Input, args: ['class',] },],
    };
    return NavigationItemComponent;
}());
exports.NavigationItemComponent = NavigationItemComponent;
var NavigationComponent = (function () {
    //  isVert: boolean = true;
    function NavigationComponent(router) {
        this.router = router;
        this.ariaRole = 'presentation';
        this.tabindex = 0;
        this.touchAction = 'pan-y'; // TODO what does this?
        this.type = 'horizontal';
        this.subLevelHintIconClosed = 'fa:chevron-right';
        this.subLevelHintIconOpened = 'fa:chevron-down';
        this.subLevelHintIconSide = 'right';
        this.navigationItems = [];
        this.select = new core_1.EventEmitter();
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
    NavigationComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-navigation',
                    host: {
                        '[class.vclNavigation]': 'true'
                    },
                    templateUrl: 'navigation.component.html',
                },] },
    ];
    /** @nocollapse */
    NavigationComponent.ctorParameters = [
        { type: router_1.Router, },
    ];
    NavigationComponent.propDecorators = {
        'ident': [{ type: core_1.Input, args: ['ident',] },],
        'selectedItem': [{ type: core_1.Input },],
        'ariaRole': [{ type: core_1.Input },],
        'tabindex': [{ type: core_1.Input },],
        'touchAction': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'subLevelHintIconClosed': [{ type: core_1.Input },],
        'subLevelHintIconOpened': [{ type: core_1.Input },],
        'subLevelHintIconSide': [{ type: core_1.Input, args: ['subLevelHintIconSide',] },],
        'templateItems': [{ type: core_1.ContentChildren, args: [NavigationItemComponent,] },],
        'navigationItems': [{ type: core_1.Input },],
        'select': [{ type: core_1.Output },],
        'isVertical': [{ type: core_1.HostBinding, args: ['class.vclVertical',] },],
    };
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
