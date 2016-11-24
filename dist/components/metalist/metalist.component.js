"use strict";
var core_1 = require('@angular/core');
var MetalistComponent = (function () {
    function MetalistComponent() {
        this.select = new core_1.EventEmitter();
        this.minSelectableItems = 1;
        this.maxSelectableItems = 1;
        this.maxItemsSelected = false;
    }
    MetalistComponent.prototype.next = function () {
        var oldIndex = this.getMarkedItemIndex();
        if (oldIndex !== -1) {
            var newIndex = oldIndex + 1;
            if (this.items.length > newIndex) {
                this.setMarkedIndex(newIndex);
            }
        }
        else {
            this.setMarkedIndex(0);
        }
    };
    MetalistComponent.prototype.prev = function () {
        var oldIndex = this.getMarkedItemIndex();
        if (oldIndex !== -1) {
            var newIndex = oldIndex - 1;
            if (newIndex >= 0) {
                this.setMarkedIndex(newIndex);
            }
        }
    };
    MetalistComponent.prototype.ngOnInit = function () {
        if (!this.meta) {
            // create meta if not present
            this.meta = [];
        }
    };
    MetalistComponent.prototype.selectItem = function (item) {
        var itemIndex = this.items.indexOf(item);
        if (itemIndex === -1) {
            return;
        }
        // maxSelectableItems === 1 -> deselect old item
        if (this.maxSelectableItems === 1) {
            var metaItems = this.meta.filter(function (obj) {
                return obj && obj.selected === true;
            });
            for (var i = 0; i < metaItems.length; i++) {
                metaItems[i].selected = false;
            }
        }
        if (this.getSelectedItems().length < this.maxSelectableItems && this.meta[itemIndex]) {
            this.meta[itemIndex].selected = true;
        }
        this.select.emit(this.getSelectedItems());
    };
    MetalistComponent.prototype.deSelectItem = function (item) {
        var itemIndex = this.items.indexOf(item);
        if (itemIndex === -1) {
            return;
        }
        if (this.meta[itemIndex]) {
            this.meta[itemIndex].selected = false;
        }
        this.select.emit(this.getSelectedItems());
    };
    MetalistComponent.prototype.getSelectedItems = function () {
        var metaItems = this.meta.filter(function (obj) {
            return obj && obj.selected === true;
        });
        var result = [];
        for (var i = 0; i < metaItems.length; i++) {
            result.push(this.items[this.meta.indexOf(metaItems[i])]);
        }
        return result;
    };
    MetalistComponent.prototype.setSelectedItems = function () {
    };
    MetalistComponent.prototype.ngAfterContentInit = function () { };
    MetalistComponent.prototype.getMarkedItemIndex = function () {
        var meta = this.getMarkedItemMeta();
        if (meta) {
            return this.meta.indexOf(meta);
        }
        return -1;
    };
    MetalistComponent.prototype.getMarkedItemMeta = function () {
        return this.meta.filter(function (obj) {
            return obj && obj.marked === true;
        })[0];
    };
    MetalistComponent.prototype.setMarkedIndex = function (index) {
        // unset old item
        var oldItem = this.getMarkedItemMeta();
        if (oldItem) {
            oldItem.marked = false;
        }
        var meta = this.meta[index];
        if (meta) {
            meta.marked = true;
        }
    };
    MetalistComponent.prototype.setMarkedItem = function (item) {
        var markedIndex = this.items.indexOf(item);
        if (markedIndex !== -1) {
            this.setMarkedIndex(markedIndex);
        }
    };
    MetalistComponent.prototype.getMeta = function (item) {
        var key = this.items.indexOf(item);
        if (!this.meta[key]) {
            this.meta[key] = {};
        }
        return this.meta[key];
    };
    MetalistComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-metalist',
                    templateUrl: 'metalist.component.html'
                },] },
    ];
    /** @nocollapse */
    MetalistComponent.ctorParameters = [];
    MetalistComponent.propDecorators = {
        'select': [{ type: core_1.Output },],
        'items': [{ type: core_1.Input },],
        'meta': [{ type: core_1.Input },],
        'minSelectableItems': [{ type: core_1.Input },],
        'maxSelectableItems': [{ type: core_1.Input },],
        'maxItemsSelected': [{ type: core_1.Output },],
        'template': [{ type: core_1.ContentChild, args: [core_1.TemplateRef,] },],
    };
    return MetalistComponent;
}());
exports.MetalistComponent = MetalistComponent;
