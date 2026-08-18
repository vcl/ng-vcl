/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { VCLDrawerContainerComponent } from './drawer-container.component';
import { VCLDrawerComponent } from './drawer.component';

export { VCLDrawerComponent, VCLDrawerContainerComponent };

@NgModule({
  imports: [VCLDrawerComponent, VCLDrawerContainerComponent],
  exports: [VCLDrawerComponent, VCLDrawerContainerComponent],
  declarations: [],
})
export class VCLDrawerModule {}
