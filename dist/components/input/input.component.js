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
    var InputComponent = (function () {
        function InputComponent(renderer) {
            this.renderer = renderer;
            this.valueType = null;
            this.typedValue = null;
            this.typedValueChange = new core_1.EventEmitter();
        }
        InputComponent.prototype.ngOnInit = function () { };
        InputComponent.prototype.onChange = function (value) {
            this.typedValueChange.emit(this.toType(value));
        };
        InputComponent.prototype.toType = function (value) {
            if (this.valueType === 'number') {
                return value = Number(value);
            }
            return value;
        };
        __decorate([
            core_1.Input(), 
            __metadata('design:type', String)
        ], InputComponent.prototype, "valueType", void 0);
        __decorate([
            core_1.Input(), 
            __metadata('design:type', Object)
        ], InputComponent.prototype, "typedValue", void 0);
        __decorate([
            core_1.Output(), 
            __metadata('design:type', Object)
        ], InputComponent.prototype, "typedValueChange", void 0);
        __decorate([
            core_1.HostListener('input', ['$event.target.value']), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Object]), 
            __metadata('design:returntype', void 0)
        ], InputComponent.prototype, "onChange", null);
        InputComponent = __decorate([
            core_1.Directive({
                selector: '[vcl-input]',
                host: {
                    '[class.vclInput]': 'true',
                },
            }), 
            __metadata('design:paramtypes', [core_1.Renderer])
        ], InputComponent);
        return InputComponent;
    }());
    exports.InputComponent = InputComponent;
});
