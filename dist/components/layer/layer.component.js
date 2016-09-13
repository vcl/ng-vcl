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
        define(["require", "exports", '@angular/core', '../../services/overlayManager.service'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var overlayManager_service_1 = require('../../services/overlayManager.service');
    var LayerComponent = (function () {
        function LayerComponent(overlayManger, myElement) {
            this.overlayManger = overlayManger;
            this.myElement = myElement;
            this.open = false;
            this.openChange = new core_1.EventEmitter();
            this.modal = true;
            this.zIndex = -1;
            this.coverZIndex = -1;
        }
        LayerComponent.prototype.close = function () {
            this.open = false;
            this.openChange.emit(this.open);
        };
        LayerComponent.prototype.onClick = function (event) {
            //layer covers 100% screen width & height. first element in layer represents 'outside'
            if (!this.modal && event.target.parentNode === this.myElement.nativeElement) {
                this.close();
            }
        };
        LayerComponent.prototype.ngOnChanges = function (changes) {
            try {
                if (changes.open.currentValue === true) {
                    this.zIndex = this.overlayManger.register(this);
                    this.coverZIndex = this.zIndex - 1;
                }
                else if (changes.open.currentValue === false) {
                    this.zIndex = this.overlayManger.unregister(this);
                    this.coverZIndex = -1;
                }
            }
            catch (ex) { }
        };
        __decorate([
            core_1.Input(), 
            __metadata('design:type', Boolean)
        ], LayerComponent.prototype, "open", void 0);
        __decorate([
            core_1.Output(), 
            __metadata('design:type', core_1.EventEmitter)
        ], LayerComponent.prototype, "openChange", void 0);
        __decorate([
            core_1.Input(), 
            __metadata('design:type', Boolean)
        ], LayerComponent.prototype, "modal", void 0);
        LayerComponent = __decorate([
            core_1.Component({
                selector: 'vcl-layer',
                templateUrl: 'layer.component.html',
                host: {
                    '(document:click)': 'onClick($event)',
                },
            }), 
            __metadata('design:paramtypes', [overlayManager_service_1.OverlayManagerService, core_1.ElementRef])
        ], LayerComponent);
        return LayerComponent;
    }());
    exports.LayerComponent = LayerComponent;
});
