"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DropdownComponent; }),
    multi: true
};
var DropdownComponent = (function () {
    function DropdownComponent() {
        var _this = this;
        this.select = new core_1.EventEmitter();
        this.tabindex = 0;
        this.expanded = false;
        this.expandedChange = new core_1.EventEmitter();
        this.maxSelectableItems = 1;
        this.minSelectableItems = 1;
        this.ariaRole = 'listbox';
        this.metaInformation = [];
        this.select.subscribe(function (selectedItems) {
            _this.selected = selectedItems;
            !!_this.onChangeCallback && _this.onChangeCallback(selectedItems);
        });
    }
    DropdownComponent.prototype._selectItem = function (item, meta, metalist) {
        if (this.maxSelectableItems === 1) {
            this.expanded = false;
            this.expandedChange.emit(this.expanded);
            metalist.selectItem(item);
        }
        else {
            if (meta.selected) {
                metalist.deSelectItem(item);
            }
            else {
                metalist.selectItem(item);
            }
        }
    };
    DropdownComponent.prototype.selectItem = function (item) {
        this.metalist.selectItem(item);
    };
    DropdownComponent.prototype.onSelect = function (selectedItems) {
        this.select.emit(selectedItems);
    };
    DropdownComponent.prototype.ngAfterContentInit = function () { };
    DropdownComponent.prototype.writeValue = function (value) {
        if (value !== this.selected) {
            this.selected = value;
        }
    };
    DropdownComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DropdownComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    DropdownComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-dropdown',
                    templateUrl: 'dropdown.component.html',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = [];
    DropdownComponent.propDecorators = {
        'metalist': [{ type: core_1.ViewChild, args: ['metalist',] },],
        'select': [{ type: core_1.Output },],
        'items': [{ type: core_1.Input },],
        'tabindex': [{ type: core_1.Input },],
        'expanded': [{ type: core_1.Input },],
        'expandedChange': [{ type: core_1.Output },],
        'maxSelectableItems': [{ type: core_1.Input },],
        'minSelectableItems': [{ type: core_1.Input },],
        'ariaRole': [{ type: core_1.Input },],
    };
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;
