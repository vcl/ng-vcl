/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PlatformModule } from '@angular/cdk/platform';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DrawerContainerComponent } from './drawer-container.component';
import { DrawerComponent } from './drawer.component';

export { DrawerComponent, DrawerContainerComponent };

@NgModule({
  imports: [CommonModule, ScrollingModule, PlatformModule],
  exports: [DrawerComponent, DrawerContainerComponent],
  declarations: [DrawerComponent, DrawerContainerComponent],
})
export class VCLDrawerModule {}
