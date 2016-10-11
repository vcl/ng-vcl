"use strict";
var core_1 = require('@angular/core');
var button_component_1 = require('../button/button.component');
(function (SelectionMode) {
    SelectionMode[SelectionMode["Single"] = 0] = "Single";
    SelectionMode[SelectionMode["Multiple"] = 1] = "Multiple";
})(exports.SelectionMode || (exports.SelectionMode = {}));
var SelectionMode = exports.SelectionMode;
var ButtonGroupComponent = (function () {
    function ButtonGroupComponent() {
        this.subscriptions = [];
        // If `Single`, a single button from the group can be selected
        // If `Multiple` multipe buttons can be selected
        this.selectionMode = SelectionMode.Single;
        this._selectedIndexChange = new core_1.EventEmitter();
        /* Event emitted when the group's value changes. */
        this._change = new core_1.EventEmitter();
    }
    Object.defineProperty(ButtonGroupComponent.prototype, "mode", {
        // String alias for selectionMode
        set: function (value) {
            if (value === 'multiple') {
                this.selectionMode = SelectionMode.Multiple;
            }
            else {
                this.selectionMode = SelectionMode.Single;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroupComponent.prototype, "selectedIndexChange", {
        get: function () {
            return this._selectedIndexChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ButtonGroupComponent.prototype, "change", {
        get: function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ButtonGroupComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectedIndex'] && changes['selectedIndex'].currentValue !== undefined) {
            this.initButtons();
        }
    };
    ButtonGroupComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    ButtonGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initButtons();
        // Reinitialize if buttons change
        this.buttons.changes.subscribe(function () {
            _this.initButtons();
        });
    };
    // - Dipose old Subscription
    // - Validate and init selectedIndex
    // - Subscribe to buttons press event
    ButtonGroupComponent.prototype.initButtons = function () {
        var _this = this;
        if (!this.buttons) {
            return;
        }
        // Unsubscribe from the old buttons
        this.dispose();
        // Validate the provided selectedIndex value
        var selectedIndex;
        if (this.selectionMode === SelectionMode.Single && typeof this.selectedIndex === 'number') {
            selectedIndex = [this.selectedIndex];
        }
        else if (this.selectionMode === SelectionMode.Multiple &&
            Array.isArray(this.selectedIndex) &&
            this.selectedIndex.every(function (n) { return typeof n === 'number'; })) {
            selectedIndex = this.selectedIndex;
        }
        // If valid selectedIndex is provided, change the button selected states
        if (selectedIndex) {
            this.buttons.forEach(function (btn, idx) {
                btn.selected = selectedIndex.indexOf(idx) >= 0;
            });
        }
        // Subscribe to buttons press event
        this.subscriptions = this.buttons.map(function (btn, idx) { return btn.press.subscribe(function () {
            if (_this.selectionMode === SelectionMode.Single) {
                _this.unselectAll();
                btn.selected = true;
                _this._change.emit({ source: btn, index: idx });
                _this._selectedIndexChange.emit(idx);
            }
            else {
                btn.selected = !btn.selected;
                var indexes = _this.buttons.map(function (btn, idx) { return ({ s: btn.selected, idx: idx }); }).filter(function (o) { return o.s; }).map(function (o) { return o.idx; });
                _this._change.emit({ source: btn, index: indexes });
                _this._selectedIndexChange.emit(indexes);
            }
        }); });
    };
    ButtonGroupComponent.prototype.unselectAll = function () {
        this.buttons.forEach(function (btn) { return btn.selected = false; });
    };
    ButtonGroupComponent.prototype.dispose = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
        this.subscriptions = [];
    };
    ButtonGroupComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-button-group',
                    host: {
                        '[class.vclButtonGroup]': 'true',
                    },
                    template: "<ng-content></ng-content>",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    ButtonGroupComponent.ctorParameters = [];
    ButtonGroupComponent.propDecorators = {
        'selectionMode': [{ type: core_1.Input },],
        'mode': [{ type: core_1.Input },],
        'selectedIndex': [{ type: core_1.Input },],
        'selectedIndexChange': [{ type: core_1.Output },],
        'change': [{ type: core_1.Output },],
        'buttons': [{ type: core_1.ContentChildren, args: [button_component_1.ButtonComponent,] },],
    };
    return ButtonGroupComponent;
}());
exports.ButtonGroupComponent = ButtonGroupComponent;
