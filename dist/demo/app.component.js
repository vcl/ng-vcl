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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var demos_1 = require("./demos");
var Fuse = require("fuse.js");
var AppComponent = (function () {
    function AppComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.searchResults = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (path) {
            window.scrollTo(0, 0);
        });
    };
    AppComponent.prototype.search = function (text) {
        this.searchResults = new Fuse(demos_1.GROUPED_DEMOS, { keys: ['items.label'] })
            .search(text)
            .reduce(function (p, demoGroup) {
            return p.concat(new Fuse(demoGroup.items, { keys: ['label'] }).search(text));
        }, []);
    };
    Object.defineProperty(AppComponent.prototype, "demos", {
        get: function () {
            return demos_1.DEMOS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "groupedDemos", {
        get: function () {
            return this.searchResults.length
                ? this.searchResults
                : demos_1.GROUPED_DEMOS;
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'app.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute])
], AppComponent);
exports.AppComponent = AppComponent;
