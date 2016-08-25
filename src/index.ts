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
export * from './l10n/l10n.module';

import { IconService } from './services/icon.service';
import { OverlayManagerService } from './services/overlayManager.service';

export * from './services/icon.service';

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
    // IconService,
    OverlayManagerService
  ],
})
export class VCLModule { }
