import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { createDemoModule, Demo } from "./demo.module.factory";

import METALIST_DEMO from "./demo-components/metalist/metalist.demo";
import DROPDOWN_DEMO from "./demo-components/dropdown/demo";
import SELECT_DEMO from "./demo-components/select/demo";
import ICON_DEMO from './demo-components/icon/icon.demo';
import ICOGRAM_DEMO from "./demo-components/icogram/icogram.demo";
import BUTTON_DEMO from './demo-components/button/button.demo';
import BUTTON_GROUP_DEMO from './demo-components/button-group/demo';
import LAYER_DEMO from './demo-components/layer/demo';
import LINK_DEMO from './demo-components/link/link.demo';
import RADIO_BUTTON_DEMO from './demo-components/radio-button/radio-button.demo';
import CHECKBOX_DEMO from './demo-components/checkbox/checkbox.demo';
import FORM_CONTROL_LABEL_DEMO from './demo-components/form-control-label/form-control-label.demo';
import FORM_DEMO from './demo-components/form/form.demo';
import FORM_ERROR_DEMO from './demo-components/form-error/form-error.demo';
import INPUT_DEMO from './demo-components/input/input.demo';
import FILE_INPUT_DEMO from './demo-components/file-input/file-input.demo';
import TEXTAREA_DEMO from './demo-components/textarea/textarea.demo';
import FLIP_SWITCH_DEMO from './demo-components/flip-switch/flip-switch.demo';
import POPOVER_DEMO from './demo-components/popover/demo';
import PROGRESS_BAR_DEMO from './demo-components/progress-bar/progress-bar.demo';
import TAB_NAV_DEMO from './demo-components/tab-nav/tab-nav.demo';
import NAVIGATION_DEMO from './demo-components/navigation/navigation.demo';
import TOOLBAR_DEMO from './demo-components/toolbar/toolbar.demo';
import WORMHOLE_DEMO from './demo-components/wormhole/demo';
import OFF_CLICK_DEMO from './demo-components/off-click/off-click.demo';
import MONTH_PICKER_DEMO from './demo-components/month-picker/month-picker.demo';
import DATE_PICKER_DEMO from './demo-components/date-picker/date-picker.demo';
import LABEL_DEMO from './demo-components/label/demo';
import TOKEN_DEMO from './demo-components/token/demo';
import SLIDER_DEMO from './demo-components/slider/demo';
import INPUT_CONTROL_GROUP from './demo-components/input-control-group/input-control-group.demo';
import ALERT_DEMO from './demo-components/alert/demo';
import BUSY_INDICATOR_DEMO from './demo-components/busy-indicator/demo';
import NOTIFICATION_DEMO from './demo-components/notification/demo';
import L10N_DEMO from './demo-components/l10n/l10n.demo';

export const DEMO_MODULES: any[] = [
  DROPDOWN_DEMO,
  SELECT_DEMO,
  ICON_DEMO,
  ICOGRAM_DEMO,
  BUTTON_DEMO,
  BUTTON_GROUP_DEMO,
  LAYER_DEMO,
  LINK_DEMO,
  RADIO_BUTTON_DEMO,
  CHECKBOX_DEMO,
  FORM_CONTROL_LABEL_DEMO,
  FORM_DEMO,
  FORM_ERROR_DEMO,
  INPUT_DEMO,
  FILE_INPUT_DEMO,
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
  DATE_PICKER_DEMO,
  LABEL_DEMO,
  TOKEN_DEMO,
  SLIDER_DEMO,
  INPUT_CONTROL_GROUP,
  L10N_DEMO,
  ALERT_DEMO,
  BUSY_INDICATOR_DEMO,
  NOTIFICATION_DEMO,
  METALIST_DEMO
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
