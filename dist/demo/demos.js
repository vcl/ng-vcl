"use strict";
var demo_component_1 = require("./components/demo/demo.component");
var metalist_demo_1 = require("./components/metalist/metalist.demo");
var dropdown_demo_1 = require("./components/dropdown/dropdown.demo");
var select_demo_1 = require("./components/select/select.demo");
var icon_demo_1 = require("./components/icon/icon.demo");
var icogram_demo_1 = require("./components/icogram/icogram.demo");
var button_demo_1 = require("./components/button/button.demo");
var button_group_demo_1 = require("./components/button-group/button-group.demo");
var layer_demo_1 = require("./components/layer/layer.demo");
var tether_demo_1 = require("./components/tether/tether.demo");
var link_demo_1 = require("./components/link/link.demo");
var radio_button_demo_1 = require("./components/radio-button/radio-button.demo");
var checkbox_demo_1 = require("./components/checkbox/checkbox.demo");
var form_control_label_demo_1 = require("./components/form-control-label/form-control-label.demo");
var form_demo_1 = require("./components/form/form.demo");
var form_error_demo_1 = require("./components/form-error/form-error.demo");
var input_demo_1 = require("./components/input/input.demo");
var flip_switch_demo_1 = require("./components/flip-switch/flip-switch.demo");
var popover_demo_1 = require("./components/popover/popover.demo");
var tab_nav_demo_1 = require("./components/tab-nav/tab-nav.demo");
var navigation_demo_1 = require("./components/navigation/navigation.demo");
var toolbar_demo_1 = require("./components/toolbar/toolbar.demo");
var wormhole_demo_1 = require("./components/wormhole/wormhole.demo");
var off_click_demo_1 = require("./components/off-click/off-click.demo");
var month_picker_demo_1 = require("./components/month-picker/month-picker.demo");
var month_selector_demo_1 = require("./components/month-selector/month-selector.demo");
var date_picker_demo_1 = require("./components/date-picker/date-picker.demo");
var json_editor_demo_1 = require("./components/json-editor/json-editor.demo");
var label_demo_1 = require("./components/label/label.demo");
var token_demo_1 = require("./components/token/token.demo");
var l10n_demo_1 = require("./components/l10n/l10n.demo");
exports.DEMOS = [
    metalist_demo_1.default,
    dropdown_demo_1.default,
    select_demo_1.default,
    icon_demo_1.default,
    icogram_demo_1.default,
    button_demo_1.default,
    button_group_demo_1.default,
    layer_demo_1.default,
    tether_demo_1.default,
    link_demo_1.default,
    radio_button_demo_1.default,
    checkbox_demo_1.default,
    form_control_label_demo_1.default,
    form_demo_1.default,
    form_error_demo_1.default,
    input_demo_1.default,
    flip_switch_demo_1.default,
    popover_demo_1.default,
    tab_nav_demo_1.default,
    navigation_demo_1.default,
    toolbar_demo_1.default,
    wormhole_demo_1.default,
    off_click_demo_1.default,
    month_picker_demo_1.default,
    month_selector_demo_1.default,
    date_picker_demo_1.default,
    json_editor_demo_1.default,
    label_demo_1.default,
    token_demo_1.default,
    l10n_demo_1.default,
];
exports.GROUPED_DEMOS = function () {
    var itemsMap = {};
    exports.DEMOS.forEach(function (c) {
        if (itemsMap[c.category]) {
            itemsMap[c.category].push({
                label: c.name,
                route: ['/' + c.path],
                active: true,
            });
        }
        else {
            itemsMap[c.category] = [{
                    label: c.name,
                    route: ['/' + c.path],
                    active: true,
                }];
        }
    });
    return Object.keys(itemsMap).map(function (category) { return ({
        label: category,
        items: itemsMap[category],
        active: true,
    }); });
}();
exports.DEMO_DECLARATIONS = exports.DEMOS.map(function (dc) { return Object.keys(dc.tabs)
    .map(function (key) { return dc.tabs[key]; })
    .filter(function (o) { return typeof o === 'function'; }); });
exports.DEMO_ROUTES = (exports.DEMOS.map(function (dc) {
    return {
        path: dc.path,
        component: demo_component_1.DemoComponent,
        data: dc
    };
}));
