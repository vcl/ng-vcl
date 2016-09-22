"use strict";
var core_1 = require('@angular/core');
/**
*/
var DropdownComponent = (function () {
    function DropdownComponent() {
        this.select = new core_1.EventEmitter();
        this.tabindex = 0;
        this.expanded = false;
        this.expandedChange = new core_1.EventEmitter();
        this.maxSelectableItems = 1;
        this.minSelectableItems = 1;
        this.ariaRole = 'listbox';
        this.metaInformation = [];
    }
    DropdownComponent.prototype.selectItem = function (item, meta, metalist) {
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
    DropdownComponent.prototype.onSelect = function (selectedItems) {
        this.select.emit(selectedItems);
    };
    DropdownComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-dropdown',
                    templateUrl: 'dropdown.component.html',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = [];
    DropdownComponent.propDecorators = {
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
