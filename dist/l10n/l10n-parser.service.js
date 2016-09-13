var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var L10nParserService = (function () {
        function L10nParserService() {
        }
        return L10nParserService;
    }());
    exports.L10nParserService = L10nParserService;
    var L10nFormatParserService = (function (_super) {
        __extends(L10nFormatParserService, _super);
        function L10nFormatParserService() {
            _super.apply(this, arguments);
        }
        L10nFormatParserService.prototype.parse = function (value) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return value.replace(/{(\d+)}/g, function (match, idx) {
                return typeof args[idx] === 'string' ? args[idx] : match;
            });
        };
        L10nFormatParserService = __decorate([
            core_1.Injectable(), 
            __metadata('design:paramtypes', [])
        ], L10nFormatParserService);
        return L10nFormatParserService;
    }(L10nParserService));
    exports.L10nFormatParserService = L10nFormatParserService;
});
