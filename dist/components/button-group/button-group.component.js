"use strict";
var core_1 = require('@angular/core');
var button_component_1 = require('../button/button.component');
/**
A button group which distributes space for each button
equally to occupy 100% horizontal space.

## Usage

```html
<vcl-button-group select=true>
  ...
</vcl-button-group>
```

The buttons must be defined as an item array
with the following structure:

```js
buttons: [
  {
    index: 0,
    label: 'Privacy',
    action: 'tabIndex',
    selected: true
  },
  {
    index: 1,
    label: 'Terms',
    action: 'tabIndex',
    selected: false
  }
]
```

When a button's action is triggered,
it emits the given `action` with the `index` as param.
*/
(function (SelectionMode) {
    SelectionMode[SelectionMode["Single"] = 0] = "Single";
    SelectionMode[SelectionMode["Multiple"] = 1] = "Multiple";
})(exports.SelectionMode || (exports.SelectionMode = {}));
var SelectionMode = exports.SelectionMode;
var ButtonGroupComponent = (function () {
    function ButtonGroupComponent() {
        this.subscriptions = [];
        // If `Single`, a single button from the group can be selected. The selection is tracked following the actions.
        // If `Multiple` multipe buttons can be selected
        this.selectionMode = SelectionMode.Single;
        /** Event emitted when the group's value changes. */
        this._change = new core_1.EventEmitter();
    }
    Object.defineProperty(ButtonGroupComponent.prototype, "change", {
        get: function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ButtonGroupComponent.prototype.ngOnChanges = function (changes) {
        if (changes['mode']) {
            if (changes['mode'].currentValue === 'multiple') {
                this.selectionMode = SelectionMode.Multiple;
            }
            else {
                this.selectionMode = SelectionMode.Single;
            }
        }
    };
    ButtonGroupComponent.prototype.ngOnInit = function () {
    };
    ButtonGroupComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    ButtonGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initButtons();
        this.buttons.changes.subscribe(function (x) {
            _this.initButtons();
        });
    };
    ButtonGroupComponent.prototype.initButtons = function () {
        var _this = this;
        this.dispose();
        this.subscriptions = this.buttons.map(function (btn, idx) { return btn.press.subscribe(function () {
            if (_this.selectionMode === SelectionMode.Single) {
                _this.unselectAll();
                btn.selected = true;
                _this._change.emit({
                    source: btn,
                    index: idx
                });
            }
            else {
                btn.selected = !btn.selected;
                _this._change.emit({
                    source: btn,
                    index: _this.buttons.map(function (btn, idx) { return ({ s: btn.selected, idx: idx }); }).filter(function (o) { return o.s; }).map(function (o) { return o.idx; })
                });
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
        'change': [{ type: core_1.Output },],
        'buttons': [{ type: core_1.ContentChildren, args: [button_component_1.ButtonComponent,] },],
    };
    return ButtonGroupComponent;
}());
exports.ButtonGroupComponent = ButtonGroupComponent;
