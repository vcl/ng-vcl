import {NgModule } from '@angular/core';

import { VCLIconModule,  } from './components/icon/icon.module';
import { VCLIcogramModule } from './components/icogram/icogram.module';
import { VCLButtonModule } from './components/button/button.module';
import { VCLLayerModule } from './components/layer/layer.module';
import { VCLTetherModule } from './components/tether/tether.module';
import { VCLPopoverModule } from './components/popover/popover.module';

export * from './components/icon/icon.module';
export * from './components/icogram/icogram.module';
export * from './components/button/button.module';
export * from './components/layer/layer.module';
export * from './components/tether/tether.module';
export * from './components/tether/tether.component';
export * from './components/popover/popover.module';
export * from './components/popover/popover.component';
export * from './l10n/l10n.module';

import { OverlayManagerService } from './services/overlayManager.service';

@NgModule({
  imports: [
    VCLIconModule,
    VCLIcogramModule,
    VCLButtonModule,
    VCLLayerModule,
    VCLTetherModule,
    VCLPopoverModule,
  ],
  exports: [
    VCLIconModule,
    VCLIcogramModule,
    VCLButtonModule,
    VCLLayerModule,
    VCLTetherModule,
    VCLPopoverModule,
  ],
  providers: [
    OverlayManagerService
  ],
})
export class VCLModule { }
