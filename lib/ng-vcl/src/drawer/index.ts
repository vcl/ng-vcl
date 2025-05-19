/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { DrawerContainerComponent } from './drawer-container.component';
import { DrawerComponent } from './drawer.component';

export { DrawerComponent, DrawerContainerComponent };

@NgModule({
  imports: [DrawerComponent, DrawerContainerComponent],
  exports: [DrawerComponent, DrawerContainerComponent],
  declarations: [],
})
export class VCLDrawerModule {}
