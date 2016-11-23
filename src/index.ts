import { NgModule } from '@angular/core';

import 'hammerjs';

import { VCLInputModule } from './components/input/input.module';
import { VCLFlipSwitchModule } from './components/flip-switch/flip-switch.module';
import { VCLIconModule, } from './components/icon/icon.module';
import { VCLMetalistModule  } from './components/metalist/metalist.module';
import { VCLDropdownModule  } from './components/dropdown/dropdown.module';
import { VCLSelectModule  } from './components/select/select.module';
import { VCLIcogramModule } from './components/icogram/icogram.module';
import { VCLButtonModule } from './components/button/button.module';
import { VCLButtonGroupModule } from './components/button-group/button-group.module';
import { VCLLayerModule } from './components/layer/layer.module';
import { VCLTabNavModule } from './components/tab-nav/tab-nav.module';
import { VCLNavigationModule } from './components/navigation/navigation.module';
import { VCLToolbarModule } from './components/toolbar/toolbar.module';
import { VCLTetherModule } from './components/tether/tether.module';
import { VCLLinkModule } from './components/link/link.module';
import { VCLPopoverModule } from './components/popover/popover.module';
import { VCLProgressBarModule } from './components/progress-bar/progress-bar.module';
import { VCLRadioButtonModule } from './components/radio-button/radio-button.module';
import { VCLCheckboxModule } from './components/checkbox/checkbox.module';
import { VCLOffClickModule } from './directives/off-click/off-click.module';
import { VCLFormControlLabelModule } from './components/form-control-label/form-control-label.module';
import { VCLFormModule } from './components/form/form.module';
import { VCLJsonEditorModule } from './components/json-editor/json-editor.module';
import { VCLWormholeModule } from './directives/wormhole/wormhole.module';
import { VCLMonthPickerModule } from './components/month-picker/month-picker.module';
import { VCLDatePickerModule } from './components/date-picker/date-picker.module';
import { VCLLabelModule } from './components/label/label.module';
import { VCLTokenModule } from './components/token/token.module';
import { VCLSliderModule } from './components/slider/slider.module';
import { VCLJssFormModule } from './components/jss-form/jss-form.module';


export * from './reflect';

export * from './components/icon/icon.module';
export * from './components/icogram/icogram.module';
export * from './components/button/button.module';
export * from './components/button-group/button-group.module';
export * from './components/layer/layer.module';
export * from './components/tab-nav/tab-nav.module';
export * from './components/navigation/navigation.module';
export * from './components/form/form.module';
export * from './components/toolbar/toolbar.module';
export * from './components/tether/tether.module';
export * from './components/link/link.module';
export * from './components/popover/popover.module';
export * from './components/progress-bar/progress-bar.module';
export * from './components/radio-button/radio-button.module';
export * from './components/checkbox/checkbox.module';
export * from './components/month-picker/month-picker.module';
export * from './components/date-picker/date-picker.module';
export * from './components/json-editor/json-editor.module';
export * from './components/label/label.module';
export * from './components/token/token.module';
export * from './components/slider/slider.module';
export * from './components/jss-form/jss-form.module';

export * from './directives/off-click/off-click.module';
export * from './directives/wormhole/wormhole.module';
export * from './l10n/l10n.module';
export * from './reactive/index';

import { OverlayManagerService } from './services/overlayManager.service';

@NgModule({
  imports: [
    VCLWormholeModule,
    VCLIconModule,
    VCLIcogramModule,
    VCLButtonModule,
    VCLButtonGroupModule,
    VCLLayerModule,
    VCLTetherModule,
    VCLLinkModule,
    VCLInputModule,
    VCLFlipSwitchModule,
    VCLTabNavModule,
    VCLNavigationModule,
    VCLToolbarModule,
    VCLPopoverModule,
    VCLProgressBarModule,
    VCLRadioButtonModule,
    VCLCheckboxModule,
    VCLFormControlLabelModule,
    VCLFormModule,
    VCLMetalistModule,
    VCLDropdownModule,
    VCLSelectModule,
    VCLOffClickModule,
    VCLMonthPickerModule,
    VCLDatePickerModule,
    VCLJsonEditorModule,
    VCLLabelModule,
    VCLTokenModule,
    VCLSliderModule,
    VCLJssFormModule
  ],
  exports: [
    VCLWormholeModule,
    VCLIconModule,
    VCLIcogramModule,
    VCLButtonModule,
    VCLButtonGroupModule,
    VCLLayerModule,
    VCLTetherModule,
    VCLLinkModule,
    VCLInputModule,
    VCLFlipSwitchModule,
    VCLTabNavModule,
    VCLNavigationModule,
    VCLToolbarModule,
    VCLPopoverModule,
    VCLProgressBarModule,
    VCLRadioButtonModule,
    VCLCheckboxModule,
    VCLFormControlLabelModule,
    VCLFormModule,
    VCLMetalistModule,
    VCLDropdownModule,
    VCLSelectModule,
    VCLOffClickModule,
    VCLMonthPickerModule,
    VCLDatePickerModule,
    VCLJsonEditorModule,
    VCLLabelModule,
    VCLTokenModule,
    VCLSliderModule,
    VCLJssFormModule
  ],
  providers: [
    OverlayManagerService
  ],
})
export class VCLModule { }
