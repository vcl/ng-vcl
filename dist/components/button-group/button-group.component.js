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
        define(["require", "exports", 'rxjs/Observable', '@angular/core', '../button/button.component'], factory);
    }
})(function (require, exports) {
    "use strict";
    var Observable_1 = require('rxjs/Observable');
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
    
    @demo example1
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
        __decorate([
            core_1.Input(), 
            __metadata('design:type', Number)
        ], ButtonGroupComponent.prototype, "selectionMode", void 0);
        __decorate([
            core_1.Input(), 
            __metadata('design:type', String)
        ], ButtonGroupComponent.prototype, "mode", void 0);
        __decorate([
            core_1.Output(), 
            __metadata('design:type', Observable_1.Observable)
        ], ButtonGroupComponent.prototype, "change", null);
        __decorate([
            core_1.ContentChildren(button_component_1.ButtonComponent), 
            __metadata('design:type', core_1.QueryList)
        ], ButtonGroupComponent.prototype, "buttons", void 0);
        ButtonGroupComponent = __decorate([
            core_1.Component({
                selector: 'vcl-button-group',
                host: {
                    '[class.vclButtonGroup]': 'true',
                },
                template: "<ng-content></ng-content>",
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            }), 
            __metadata('design:paramtypes', [])
        ], ButtonGroupComponent);
        return ButtonGroupComponent;
    }());
    exports.ButtonGroupComponent = ButtonGroupComponent;
});
