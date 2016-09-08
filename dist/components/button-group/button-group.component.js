"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["None"] = 0] = "None";
    SelectionMode[SelectionMode["Single"] = 1] = "Single";
    SelectionMode[SelectionMode["Multiple"] = 2] = "Multiple";
})(SelectionMode || (SelectionMode = {}));
var ButtonGroupComponent = (function () {
    // select = false; // If `true`, a single button from the group can be selected. The selection is tracked following the actions.
    // @Input()
    // multiple = false; // If `true` and in select mode, multipe buttons can be selected
    // private buttons: ButtonComponent[] = [];
    function ButtonGroupComponent() {
        this.selectionMode = SelectionMode.None;
    }
    ButtonGroupComponent.prototype.ngOnInit = function () {
        console.log('buttons', this.buttons);
    };
    ;
    ButtonGroupComponent.prototype.ngAfterContentInit = function () {
        this.buttons.changes.subscribe(function (x) {
            console.log('changes', x);
        });
        console.log('after content init:', this.buttons);
        this.buttons.first.selected = true;
        // this.buttons[0].selected = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ButtonGroupComponent.prototype, "selectionMode", void 0);
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
            templateUrl: 'button-group.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonGroupComponent);
    return ButtonGroupComponent;
}());
exports.ButtonGroupComponent = ButtonGroupComponent;
// var ButtonGroup = Ember.Component.extend({
//   layout: layout,
//   /**
//   if true then link is underlined else it's not
//   @public
//   */
//   actions: {
//     trigger: function(button) {
//       var select = this.get('select');
//       if (select === true) {
//         var multiple = this.get('multiple');
//         var buttons = this.get('buttons');
//         if (multiple === true) {
//           Ember.set(button, 'selected', !Ember.get(button, 'selected'));
//         } else {
//           buttons.setEach('selected', false);
//           Ember.set(button, 'selected', true);
//         }
//       }
//       this.triggerAction({
//         action: button.action,
//         actionContext: button.index
//       });
//     }
//   }
// });
// Utils.registerComponent('vcl-button-group', ButtonGroup);
// export default ButtonGroup;
