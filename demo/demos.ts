import { BrowserModule } from '@angular/platform-browser';
import { VCLModule } from './../src/index';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DemoComponent } from "./components/demo/demo.component";
import { createDemoModule, Demo } from "./demo.module";

import METALIST_DEMO from "./components/metalist/metalist.demo";
import DROPDOWN_DEMO from "./components/dropdown/dropdown.demo";
import SELECT_DEMO from "./components/select/select.demo";
import ICON_DEMO from './components/icon/icon.demo';
import ICOGRAM_DEMO from "./components/icogram/icogram.demo";
import BUTTON_DEMO from './components/button/button.demo';
import BUTTON_GROUP_DEMO from './components/button-group/button-group.demo';
import LAYER_DEMO from './components/layer/layer.demo';
import TETHER_DEMO from './components/tether/tether.demo';
import LINK_DEMO from './components/link/link.demo';
import RADIO_BUTTON_DEMO from './components/radio-button/radio-button.demo';
import RADIO_GROUP_DEMO from './components/radio-group/radio-group.demo';
import CHECKBOX_DEMO from './components/checkbox/checkbox.demo';
import FORM_CONTROL_LABEL_DEMO from './components/form-control-label/form-control-label.demo';
import FORM_DEMO from './components/form/form.demo';
import FORM_ERROR_DEMO from './components/form-error/form-error.demo';
import INPUT_DEMO from './components/input/input.demo';
import TEXTAREA_DEMO from './components/textarea/textarea.demo';
import FLIP_SWITCH_DEMO from './components/flip-switch/flip-switch.demo';
import POPOVER_DEMO from './components/popover/popover.demo';
import PROGRESS_BAR_DEMO from './components/progress-bar/progress-bar.demo';
import TAB_NAV_DEMO from './components/tab-nav/tab-nav.demo';
import NAVIGATION_DEMO from './components/navigation/navigation.demo';
import TOOLBAR_DEMO from './components/toolbar/toolbar.demo';
import WORMHOLE_DEMO from './components/wormhole/wormhole.demo';
import OFF_CLICK_DEMO from './components/off-click/off-click.demo';
import MONTH_PICKER_DEMO from './components/month-picker/month-picker.demo';
import MONTH_SELECTOR_DEMO from './components/month-selector/month-selector.demo';
import DATE_PICKER_DEMO from './components/date-picker/date-picker.demo';
import JSON_EDITOR_DEMO from './components/json-editor/json-editor.demo';
import LABEL_DEMO from './components/label/label.demo';
import TOKEN_DEMO from './components/token/token.demo';
import SLIDER_DEMO from './components/slider/slider.demo';
import JSS_FORM_DEMO from './components/jss-form/jss-form.demo';
import INPUT_CONTROL_GROUP from './components/input-control-group/input-control-group.demo';

import L10N_DEMO from './components/l10n/l10n.demo';
import STORE_DEMO from './components/store/store.demo';

export const DEMO_MODULES: any[] = [
  METALIST_DEMO,
  DROPDOWN_DEMO,
  SELECT_DEMO,
  ICON_DEMO,
  ICOGRAM_DEMO,
  BUTTON_DEMO,
  BUTTON_GROUP_DEMO,
  LAYER_DEMO,
  TETHER_DEMO,
  LINK_DEMO,
  RADIO_BUTTON_DEMO,
  RADIO_GROUP_DEMO,
  CHECKBOX_DEMO,
  FORM_CONTROL_LABEL_DEMO,
  FORM_DEMO,
  FORM_ERROR_DEMO,
  INPUT_DEMO,
  TEXTAREA_DEMO,
  FLIP_SWITCH_DEMO,
  POPOVER_DEMO,
  PROGRESS_BAR_DEMO,
  TAB_NAV_DEMO,
  NAVIGATION_DEMO,
  TOOLBAR_DEMO,
  WORMHOLE_DEMO,
  OFF_CLICK_DEMO,
  MONTH_PICKER_DEMO,
  MONTH_SELECTOR_DEMO,
  DATE_PICKER_DEMO,
  JSON_EDITOR_DEMO,
  LABEL_DEMO,
  TOKEN_DEMO,
  SLIDER_DEMO,
  JSS_FORM_DEMO,
  INPUT_CONTROL_GROUP,
  L10N_DEMO,
  STORE_DEMO
].map(module => typeof module === 'function' ? module : createDemoModule(module));


export const GROUPED_DEMOS = function() {
  const itemsMap = {};

  DEMO_MODULES.forEach(c => {
    if (!itemsMap[c.category]) itemsMap[c.category] = [];
    itemsMap[c.category].push({
      label: c.label,
      route: ['/' + c.path],
      active: true,
    });
  });

  return Object.keys(itemsMap).map(category => ({
    label: category,
    items: itemsMap[category],
    active: true,
  }));
} ();
