import { VCLInputModule } from './components/input/input.module';
import {NgModule } from '@angular/core';

import { VCLIconModule,  } from './components/icon/icon.module';
import { VCLIcogramModule } from './components/icogram/icogram.module';
import { VCLButtonModule } from './components/button/button.module';
import { VCLLayerModule } from './components/layer/layer.module';
import { VCLTetherModule } from './components/tether/tether.module';
import { VCLPopoverModule } from './components/popover/popover.module';
import { VCLRadioButtonModule } from './components/radio-button/radio-button.module';
import { VCLCheckboxModule } from './components/checkbox/checkbox.module';
import { VCLFormControlLabelModule } from './components/form-control-label/form-control-label.module';

export * from './components/icon/icon.module';
export * from './components/icogram/icogram.module';
export * from './components/button/button.module';
export * from './components/layer/layer.module';
export * from './components/tether/tether.module';
export * from './components/tether/tether.component';
export * from './components/popover/popover.module';
export * from './l10n/l10n.module';
export * from './services/overlayManager.service';

import { OverlayManagerService } from './services/overlayManager.service';

@NgModule({
  imports: [
    VCLIconModule,
    VCLIcogramModule,
    VCLButtonModule,
    VCLLayerModule,
    VCLTetherModule,
    VCLInputModule,
    VCLPopoverModule,
    VCLRadioButtonModule,
    VCLCheckboxModule,
    VCLFormControlLabelModule
  ],
  exports: [
    VCLIconModule,
    VCLIcogramModule,
    VCLButtonModule,
    VCLLayerModule,
    VCLTetherModule,
    VCLInputModule,
    VCLPopoverModule,
    VCLRadioButtonModule,
    VCLCheckboxModule,
    VCLFormControlLabelModule
  ],
  providers: [
    OverlayManagerService
  ],
})
export class VCLModule { }
