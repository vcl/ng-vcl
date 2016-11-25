"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var SelectOptionComponent = (function () {
    function SelectOptionComponent() {
        this.class = '';
    }
    /**
     * transforms this NavigationItemComponent into an object,
     * so it can be handled the same way as an inputList
     * @return {Object}
     */
    SelectOptionComponent.prototype.toObject = function () {
        var ret = {
            value: this.value,
            label: this.label,
            sublabel: this.sublabel,
            class: this.class
        };
        return ret;
    };
    SelectOptionComponent.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'vcl-select-option'
                },] },
    ];
    /** @nocollapse */
    SelectOptionComponent.ctorParameters = [];
    SelectOptionComponent.propDecorators = {
        'value': [{ type: core_1.Input, args: ['value',] },],
        'label': [{ type: core_1.Input, args: ['label',] },],
        'sublabel': [{ type: core_1.Input, args: ['sublabel',] },],
        'class': [{ type: core_1.Input, args: ['class',] },],
    };
    return SelectOptionComponent;
}());
exports.SelectOptionComponent = SelectOptionComponent;
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return SelectComponent; }),
    multi: true
};
var SelectComponent = (function () {
    function SelectComponent() {
        var _this = this;
        this.popoverTarget = 'popoverTarget' + Math.random().toString().slice(2); // TODO cant this be solved via view/content-childs?
        this.select = new core_1.EventEmitter();
        this.expanded = false;
        // options
        this.items = [];
        // multi-select
        this.minSelectableItems = 1;
        this.maxSelectableItems = 1;
        // styling
        this.expandedIcon = 'fa:chevron-up';
        this.collapsedIcon = 'fa:chevron-down';
        this.displayValue = 'Select value';
        this.changeEE = new core_1.EventEmitter(); // string[] if multi-select
        this.expand = function () { return _this.expanded = !_this.expanded; };
        this.onOutsideClick = function () { return _this.expanded = false; };
        this.changeEE.subscribe(function (newValue) {
            // displayValue
            _this.items
                .filter(function (i) { return i.value == newValue; })
                .map(function (i) { return _this.displayValue = i.label; });
            // displayValue for multiselect
            if (_this.value.length) {
                _this.displayValue = _this.items
                    .filter(function (i) { return _this.value.includes(i.value); })
                    .map(function (i) { return i.label; })
                    .join(', ');
            }
            // propagate form-change
            !!_this.onChangeCallback && _this.onChangeCallback(newValue);
        });
    }
    SelectComponent.prototype.ngOnInit = function () { };
    SelectComponent.prototype.ngAfterContentInit = function () {
        // transform template-items if available
        var templateItemsAr = this.templateItems.toArray();
        if (templateItemsAr.length > 0) {
            this.items = templateItemsAr.map(function (i) { return i.toObject(); });
        }
        // make sure value and label exists on every option
        this.items.map(function (item) {
            if (!item.value)
                item.value = item.label;
            if (!item.label)
                item.label = item.value;
            return item;
        });
    };
    SelectComponent.prototype.onSelect = function (newItems) {
        if (this.maxSelectableItems == 1)
            this.value = newItems[0].value; // single-select
        else
            this.value = newItems.map(function (i) { return i.value; }); // multi-select
        this.changeEE.emit(this.value);
    };
    SelectComponent.prototype.writeValue = function (value) {
        if (this.value == value)
            return;
        this.value = value;
        this.changeEE.emit(this.value);
    };
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    SelectComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-select',
                    templateUrl: 'select.component.html',
                    //  changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = [];
    SelectComponent.propDecorators = {
        'value': [{ type: core_1.Input, args: ['value',] },],
        'select': [{ type: core_1.Output, args: ['select',] },],
        'expanded': [{ type: core_1.Input, args: ['expanded',] },],
        'items': [{ type: core_1.Input, args: ['items',] },],
        'templateItems': [{ type: core_1.ContentChildren, args: [SelectOptionComponent,] },],
        'minSelectableItems': [{ type: core_1.Input },],
        'maxSelectableItems': [{ type: core_1.Input },],
        'expandedIcon': [{ type: core_1.Input },],
        'collapsedIcon': [{ type: core_1.Input },],
        'displayValue': [{ type: core_1.Input, args: ['displayValue',] },],
        'changeEE': [{ type: core_1.Output, args: ['change',] },],
        'dropdown': [{ type: core_1.ViewChild, args: ['dropdown',] },],
    };
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
