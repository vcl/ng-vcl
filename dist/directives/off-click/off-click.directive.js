"use strict";
var core_1 = require('@angular/core');
var OffClickDirective = (function () {
    function OffClickDirective(elem) {
        this.elem = elem;
        this.offClick = new core_1.EventEmitter();
    }
    OffClickDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (typeof document !== 'undefined') {
            // Create the listener
            this.listener = function (ev) {
                var me = _this.elem.nativeElement;
                // Check if the target is the off-clicks element or an sub element 
                if (ev.target && me !== ev.target && !me.contains(ev.target)) {
                    _this.offClick.emit();
                }
            };
            // Wait for next run loop to attach the listener as it might be triggered by a current click event
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
