"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
    L10nFormatParserService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    L10nFormatParserService.ctorParameters = [];
    return L10nFormatParserService;
}(L10nParserService));
exports.L10nFormatParserService = L10nFormatParserService;
