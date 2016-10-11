"use strict";
var core_1 = require('@angular/core');
var OffClickDirective = (function () {
    function OffClickDirective(elem) {
        this.elem = elem;
        this.offClick = new core_1.EventEmitter();
    }
    OffClickDirective.prototype.createListener = function () {
        var _this = this;
        return function (event) {
            if (event.target && _this.elem.nativeElement !== event.target && !_this.elem.nativeElement.contains(event.target)) {
                _this.offClick.emit();
            }
        };
    };
    OffClickDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (typeof document !== 'undefined') {
            this.listener = this.createListener();
            // Wait for next run loop to attach the listener as it might trigger by accident
            setTimeout(function () {
                document.addEventListener('click', _this.listener);
            }, 0);
        }
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        if (typeof document !== 'undefined' && this.listener) {
            document.removeEventListener('click', this.listener);
        }
    };
    OffClickDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[off-click]',
                },] },
    ];
    /** @nocollapse */
    OffClickDirective.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    OffClickDirective.propDecorators = {
        'offClick': [{ type: core_1.Output, args: ['off-click',] },],
    };
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;
var VCLOffClickModule = (function () {
    function VCLOffClickModule() {
    }
    VCLOffClickModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [OffClickDirective],
                    exports: [OffClickDirective]
                },] },
    ];
    /** @nocollapse */
    VCLOffClickModule.ctorParameters = [];
    return VCLOffClickModule;
}());
exports.VCLOffClickModule = VCLOffClickModule;
