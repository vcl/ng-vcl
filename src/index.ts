import { VCLInputModule } from './components/input/input.module';
import {NgModule } from '@angular/core';

import { VCLIconModule,  } from './components/icon/icon.module';
import { VCLMetalistModule  } from './components/metalist/metalist.module';
import { VCLDropdownModule  } from './components/dropdown/dropdown.module';
import { VCLSelectModule  } from './components/select/select.module';
import { VCLIcogramModule } from './components/icogram/icogram.module';
import { VCLButtonModule } from './components/button/button.module';
import { VCLButtonGroupModule } from './components/button-group/button-group.module';
import { VCLLayerModule } from './components/layer/layer.module';
import { VCLTabModule } from './components/tab/tab.module';
import { VCLTetherModule } from './components/tether/tether.module';
import { VCLPopoverModule } from './components/popover/popover.module';
import { VCLRadioButtonModule } from './components/radio-button/radio-button.module';
import { VCLCheckboxModule } from './components/checkbox/checkbox.module';
import { VCLFormControlLabelModule } from './components/form-control-label/form-control-label.module';
import { VCLWormholeModule } from './directives/wormhole';

export * from './components/icon/icon.module';
export * from './components/icogram/icogram.module';
export * from './components/button/button.module';
export * from './components/button-group/button-group.module';
export * from './components/layer/layer.module';
export * from './components/tab/tab.module';
export * from './components/tether/tether.module';
export * from './components/popover/popover.module';
export * from './components/radio-button/radio-button.module';
export * from './components/checkbox/checkbox.module';
export * from './directives/wormhole';
export * from './l10n/l10n.module';
export * from './services/layerManager.service';

import { LayerManagerService } from './services/layerManager.service';
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
    VCLInputModule,
    VCLTabModule,
    VCLPopoverModule,
    VCLRadioButtonModule,
    VCLCheckboxModule,
    VCLFormControlLabelModule,
    VCLMetalistModule,
    VCLDropdownModule,
    VCLSelectModule
  ],
  exports: [
    VCLWormholeModule,
    VCLIconModule,
    VCLIcogramModule,
    VCLButtonModule,
    VCLButtonGroupModule,
    VCLLayerModule,
    VCLTetherModule,
    VCLInputModule,
    VCLTabModule,
    VCLPopoverModule,
    VCLRadioButtonModule,
    VCLCheckboxModule,
    VCLFormControlLabelModule,
    VCLMetalistModule,
    VCLDropdownModule,
    VCLSelectModule
  ],
  providers: [
    LayerManagerService,
    OverlayManagerService
  ],
})
export class VCLModule { }
