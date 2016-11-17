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
var TokenComponent = (function () {
    function TokenComponent() {
        this.toggleSelect = true;
        this.tokenList = [
            {
                label: 'alice',
                selected: false
            },
            {
                label: 'bob',
                selected: false
            },
            {
                label: 'carol',
                selected: false
            },
            {
                label: 'dave',
                selected: false
            }
        ];
    }
    TokenComponent.prototype.doToggleSelect = function () {
        this.toggleSelect = !this.toggleSelect;
    };
    TokenComponent.prototype.removeAlert = function () {
        window.alert('removed');
    };
    TokenComponent.prototype.changed = function (e) {
        console.log('changed');
        console.dir(e);
    };
    return TokenComponent;
}());
TokenComponent = __decorate([
    core_1.Component({
        templateUrl: 'token.component.html'
    }),
    __metadata("design:paramtypes", [])
], TokenComponent);
exports.TokenComponent = TokenComponent;
