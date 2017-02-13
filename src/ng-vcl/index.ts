import { NgModule } from '@angular/core';

import 'hammerjs';

import { VCLInputModule } from './input/input.module';
import { VCLFileInputModule } from './file-input/file-input.module';
import { VCLTextareaModule } from './textarea/textarea.module';
import { VCLFlipSwitchModule } from './flip-switch/flip-switch.module';
import { VCLIconModule, } from './icon/icon.module';
import { VCLMetalistModule  } from './metalist/metalist.module';
import { VCLDropdownModule  } from './dropdown/dropdown.module';
import { VCLSelectModule  } from './select/select.module';
import { VCLIcogramModule } from './icogram/icogram.module';
import { VCLButtonModule } from './button/button.module';
import { VCLButtonGroupModule } from './button-group/button-group.module';
import { VCLLayerModule } from './layer/layer.module';
import { VCLTabNavModule } from './tab-nav/tab-nav.module';
import { VCLNavigationModule } from './navigation/navigation.module';
import { VCLToolbarModule } from './toolbar/toolbar.module';
import { VCLTetherModule } from './tether/tether.module';
import { VCLLinkModule } from './link/link.module';
import { VCLPopoverModule } from './popover/popover.module';
import { VCLProgressBarModule } from './progress-bar/progress-bar.module';
import { VCLRadioButtonModule } from './radio-button/radio-button.module';
import { VCLRadioGroupModule } from './radio-group/radio-group.module';
import { VCLCheckboxModule } from './checkbox/checkbox.module';
import { VCLOffClickModule } from './off-click/off-click.module';
import { VCLFormControlLabelModule } from './form-control-label/form-control-label.module';
import { VCLWormholeModule } from './wormhole/wormhole.module';
import { VCLMonthPickerModule } from './month-picker/month-picker.module';
import { VCLDatePickerModule } from './date-picker/date-picker.module';
import { VCLLabelModule } from './label/label.module';
import { VCLTokenModule } from './token/token.module';
import { VCLSliderModule } from './slider/slider.module';
import { VCLInputControlGroupModule } from './input-control-group/input-control-group.module';
import { VCLAlertModule } from './alert/alert.module';
import { VCLBusyModule } from './busy/busy.module';
import { VCLGrowlModule } from './growl/growl.module';
import { L10nModule } from './l10n/l10n.module';

export * from './core/index';

export * from './input/input.module';
export * from './file-input/file-input.module';
export * from './textarea/textarea.module';
export * from './icon/icon.module';
export * from './icogram/icogram.module';
export * from './button/button.module';
export * from './button-group/button-group.module';
export * from './layer/layer.module';
export * from './tab-nav/tab-nav.module';
export * from './navigation/navigation.module';
export * from './toolbar/toolbar.module';
export * from './tether/tether.module';
export * from './link/link.module';
export * from './popover/popover.module';
export * from './progress-bar/progress-bar.module';
export * from './radio-button/radio-button.module';
export * from './radio-group/radio-group.module';
export * from './checkbox/checkbox.module';
export * from './month-picker/month-picker.module';
export * from './date-picker/date-picker.module';
export * from './label/label.module';
export * from './token/token.module';
export * from './slider/slider.module';
export * from './input-control-group/input-control-group.module';
export * from './alert/alert.module';
export * from './busy/busy.module';
export * from './growl/growl.module';
export * from './off-click/off-click.module';
export * from './wormhole/wormhole.module';
export * from './metalist/metalist.module';
export * from './dropdown/dropdown.module';
export * from './select/select.module';
export * from './flip-switch/flip-switch.module';
export * from './l10n/l10n.module';


@NgModule({
  imports: [],
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
    VCLFileInputModule,
    VCLTextareaModule,
    VCLFlipSwitchModule,
    VCLTabNavModule,
    VCLNavigationModule,
    VCLToolbarModule,
    VCLPopoverModule,
    VCLProgressBarModule,
    VCLRadioButtonModule,
    VCLRadioGroupModule,
    VCLCheckboxModule,
    VCLFormControlLabelModule,
    VCLMetalistModule,
    VCLDropdownModule,
    VCLSelectModule,
    VCLOffClickModule,
    VCLMonthPickerModule,
    VCLDatePickerModule,
    VCLLabelModule,
    VCLTokenModule,
    VCLSliderModule,
    VCLInputControlGroupModule,
    VCLAlertModule,
    VCLBusyModule,
    VCLGrowlModule
  ]
})
export class VCLModule { }
