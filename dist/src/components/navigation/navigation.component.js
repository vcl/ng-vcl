"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var NavigationItemComponent = (function () {
    function NavigationItemComponent() {
        this.active = true;
        this.selected = false;
        this.opened = false;
        this.heading = false;
        this.class = '';
    }
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
                ret['route'] = [ret['route']];
        }
        var items = [];
        var ar = this.items.toArray();
        ar.shift();
        ar.map(function (navItemCom) { return items.push(navItemCom.toObject()); });
        if (items.length > 0)
            ret['items'] = items;
        return ret;
    };
    return NavigationItemComponent;
}());
__decorate([
    core_1.Input('label'),
    __metadata("design:type", String)
], NavigationItemComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('route'),
    __metadata("design:type", Object)
], NavigationItemComponent.prototype, "route", void 0);
__decorate([
    core_1.ContentChildren(NavigationItemComponent),
    __metadata("design:type", core_1.QueryList)
], NavigationItemComponent.prototype, "items", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], NavigationItemComponent.prototype, "active", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], NavigationItemComponent.prototype, "selected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], NavigationItemComponent.prototype, "opened", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NavigationItemComponent.prototype, "heading", void 0);
__decorate([
    core_1.Input('href'),
    __metadata("design:type", String)
], NavigationItemComponent.prototype, "href", void 0);
__decorate([
    core_1.Input('prepIcon'),
    __metadata("design:type", String)
], NavigationItemComponent.prototype, "prepIcon", void 0);
__decorate([
    core_1.Input('appIcon'),
    __metadata("design:type", String)
], NavigationItemComponent.prototype, "appIcon", void 0);
__decorate([
    core_1.Input('class'),
    __metadata("design:type", String)
], NavigationItemComponent.prototype, "class", void 0);
NavigationItemComponent = __decorate([
    core_1.Directive({
        selector: 'vcl-navitem'
    }),
    __metadata("design:paramtypes", [])
], NavigationItemComponent);
exports.NavigationItemComponent = NavigationItemComponent;
var NavigationComponent = (function () {
    function NavigationComponent(router) {
        this.router = router;
        this.ariaRole = 'presentation';
        this.tabindex = 0;
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
    return NavigationComponent;
}());
__decorate([
    core_1.Input('ident'),
    __metadata("design:type", String)
], NavigationComponent.prototype, "ident", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NavigationComponent.prototype, "selectedItem", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NavigationComponent.prototype, "ariaRole", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], NavigationComponent.prototype, "tabindex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NavigationComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NavigationComponent.prototype, "subLevelHintIconClosed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NavigationComponent.prototype, "subLevelHintIconOpened", void 0);
__decorate([
    core_1.Input('subLevelHintIconSide'),
    __metadata("design:type", String)
], NavigationComponent.prototype, "subLevelHintIconSide", void 0);
__decorate([
    core_1.ContentChildren(NavigationItemComponent),
    __metadata("design:type", core_1.QueryList)
], NavigationComponent.prototype, "templateItems", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "navigationItems", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NavigationComponent.prototype, "select", void 0);
__decorate([
    core_1.HostBinding('class.vclVertical'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NavigationComponent.prototype, "isVertical", null);
NavigationComponent = __decorate([
    core_1.Component({
        selector: 'vcl-navigation',
        host: {
            '[class.vclNavigation]': 'true'
        },
        templateUrl: 'navigation.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router])
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
