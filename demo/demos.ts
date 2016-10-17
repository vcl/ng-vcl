import { DemoComponent } from "./components/demo/demo.component";

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
import CHECKBOX_DEMO from './components/checkbox/checkbox.demo';
import FORM_CONTROL_LABEL_DEMO from './components/form-control-label/form-control-label.demo';
import INPUT_DEMO from './components/input/input.demo';
import POPOVER_DEMO from './components/popover/popover.demo';
import TAB_DEMO from './components/tab/tab.demo';
import NAVIGATION_DEMO from './components/navigation/navigation.demo';
import TOOLBAR_DEMO from './components/toolbar/toolbar.demo';
import WORMHOLE_DEMO from './components/wormhole/wormhole.demo';
import OFF_CLICK_DEMO from './components/off-click/off-click.demo';
import MONTH_PICKER_DEMO from './components/month-picker/month-picker.demo';

interface Demo {
  name: string;
  path: string;
  category: string;
  tabs: {
    [key: string]: any
  };
}

export const DEMOS: Demo[] = [
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
  CHECKBOX_DEMO,
  FORM_CONTROL_LABEL_DEMO,
  INPUT_DEMO,
  POPOVER_DEMO,
  TAB_DEMO,
  NAVIGATION_DEMO,
  TOOLBAR_DEMO,
  WORMHOLE_DEMO,
  OFF_CLICK_DEMO,
  MONTH_PICKER_DEMO
];

export const GROUPED_DEMOS = function() {
  var itemsMap = {};

  DEMOS.forEach(c => {
    if (itemsMap[c.category]) {
      itemsMap[c.category].push({
        label: c.name,
        route: ['/' + c.path],
        active: true,
      });
    } else {
      itemsMap[c.category] = [{
        label: c.name,
        route: ['/' + c.path],
        active: true,
      }];
    }
  });

  return Object.keys(itemsMap).map(category => ({
    label: category,
    items: itemsMap[category],
    active: true,
  }));
}();

export const DEMO_DECLARATIONS = DEMOS.map(dc => Object.keys(dc.tabs)
                                                       .map(key => dc.tabs[key])
                                                       .filter(o => typeof o === 'function')
                                          );
export const DEMO_ROUTES = (DEMOS.map(dc => {
  return {
    path: dc.path,
    component: DemoComponent,
    data: dc
  };
}));
