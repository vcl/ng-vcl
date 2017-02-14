import { NgModule } from '@angular/core';

export * from './core/index';

import { VCLInputModule } from './input/index';
export * from './input/index';

import { VCLFileInputModule } from './file-input/index';
export * from './file-input/index';

import { VCLTextareaModule } from './textarea/index';
export * from './textarea/index';

import { VCLFlipSwitchModule } from './flip-switch/index';
export * from './flip-switch/index';

import { VCLIconModule } from './icon/index';
export * from './icon/index';

import { VCLMetalistModule  } from './metalist/index';
export * from './metalist/index';

import { VCLDropdownModule  } from './dropdown/index';
export * from './dropdown/index';

import { VCLSelectModule  } from './select/index';
export * from './select/index';

import { VCLIcogramModule } from './icogram/index';
export * from './icogram/index';

import { VCLButtonModule } from './button/index';
export * from './button/index';

import { VCLButtonGroupModule } from './button-group/index';
export * from './button-group/index';

import { VCLLayerModule } from './layer/index';
export * from './layer/index';

import { VCLTabNavModule } from './tab-nav/index';
export * from './tab-nav/index';

import { VCLNavigationModule } from './navigation/index';
export * from './navigation/index';

import { VCLToolbarModule } from './toolbar/index';
export * from './toolbar/index';

import { VCLLinkModule } from './link/index';
export * from './link/index';

import { VCLPopoverModule } from './popover/index';
export * from './popover/index';

import { VCLProgressBarModule } from './progress-bar/index';
export * from './progress-bar/index';

import { VCLRadioButtonModule } from './radio-button/index';
export * from './radio-button/index';

import { VCLRadioGroupModule } from './radio-group/index';
export * from './radio-group/index';

import { VCLCheckboxModule } from './checkbox/index';
export * from './checkbox/index';

import { VCLOffClickModule } from './off-click/index';
export * from './off-click/index';

import { VCLDatePickerModule } from './date-picker/index';
export * from './date-picker/index';

import { VCLFormControlLabelModule } from './form-control-label/index';
export * from './form-control-label/index';

import { VCLWormholeModule } from './wormhole/index';
export * from './wormhole/index';

import { VCLMonthPickerModule } from './month-picker/index';
export * from './month-picker/index';

import { VCLLabelModule } from './label/index';
export * from './label/index';

import { VCLTokenModule } from './token/index';
export * from './token/index';

import { VCLSliderModule } from './slider/index';
export * from './slider/index';

import { VCLInputControlGroupModule } from './input-control-group/index';
export * from './input-control-group/index';

import { VCLAlertModule } from './alert/index';
export * from './alert/index';

import { VCLBusyModule } from './busy/index';
export * from './busy/index';

import { VCLGrowlModule } from './growl/index';
export * from './growl/index';

import { L10nModule } from './l10n/index';
export * from './l10n/index';

@NgModule({
  imports: [],
  exports: [
    VCLWormholeModule,
    VCLIconModule,
    VCLIcogramModule,
    VCLButtonModule,
    VCLButtonGroupModule,
    VCLLayerModule,
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


