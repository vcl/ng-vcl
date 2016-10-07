import BUTTON_DEMO from './components/button/button.demo';
import LAYER_DEMO from './components/layer/layer.demo';
import ICON_DEMO from './components/icon/icon.demo';

import { MetalistComponent } from "./components/metalist/metalist.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { SelectComponent } from "./components/select/select.component";
import { IcogramComponent } from "./components/icogram/icogram.component";
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { TetherComponent } from './components/tether/tether.component';
import { LinkComponent } from './components/link/link.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormControlLabelComponent } from './components/form-control-label/form-control-label.component';
import { InputComponent } from './components/input/input.component';
import { PopoverComponent } from './components/popover/popover.component';
import { TabComponent } from './components/tab/tab.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WormholeComponent } from './components/wormhole/wormhole.component';

export const DEMO_COMPONENTS = [
  ICON_DEMO,
  {
    name: 'Metalist',
    component: MetalistComponent,
    path: 'metalist'
  },
  {
    name: 'Dropdown',
    component: DropdownComponent,
    path: 'dropdown'
  },
  {
    name: 'Select',
    component: SelectComponent,
    path: 'select'
  },
  {
    name: 'Icogram',
    component: IcogramComponent,
    path: 'icogram'
  },
  BUTTON_DEMO,
  {
    name: 'Button Group',
    component: ButtonGroupComponent,
    path: 'button-group'
  },
  LAYER_DEMO,
  {
    name: 'Tether',
    component: TetherComponent,
    path: 'tether'
  },
  {
    name: 'Link',
    component: LinkComponent,
    path: 'link',
  },
  {
    name: 'Radio Button',
    component: RadioButtonComponent,
    path: 'radio-button'
  },
  {
    name: 'Checkbox',
    component: CheckboxComponent,
    path: 'checkbox'
  },
  {
    name: 'Form Control Label',
    component: FormControlLabelComponent,
    path: 'form-control-label'
  },
  {
    name: 'Input',
    component: InputComponent,
    path: 'input'
  },
  {
    name: 'Popover',
    component: PopoverComponent,
    path: 'popover'
  },
  {
    name: 'Tab',
    component: TabComponent,
    path: 'tab'
  },
  {
    name: 'Navigation',
    component: NavigationComponent,
    path: 'navigation'
  },
  {
    name: 'Toolbar',
    component: ToolbarComponent,
    path: 'toolbar'
  },
  {
    name: 'Wormhole',
    component: WormholeComponent,
    path: 'wormhole'
  },
];
