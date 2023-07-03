import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { VCLButtonModule } from '../button/index';
import { VCLIconModule } from '../icon/index';

import { PanelComponent } from './panel.component';
import {
  PanelFooterDirective,
  PanelHeaderDirective,
  PanelTitleDirective,
  PanelFooterButtonDirective,
  PanelDialogDirective,
} from './panel.directive';

export {
  PanelComponent,
  PanelDialogDirective,
  PanelTitleDirective,
  PanelFooterButtonDirective,
  PanelHeaderDirective,
  PanelFooterDirective,
};

@NgModule({
  imports: [FormsModule, CommonModule, VCLButtonModule, VCLIconModule],
  exports: [
    VCLButtonModule,
    VCLIconModule,
    PanelComponent,
    PanelFooterDirective,
    PanelHeaderDirective,
    PanelTitleDirective,
    PanelFooterButtonDirective,
    PanelDialogDirective,
  ],
  declarations: [
    PanelComponent,
    PanelFooterDirective,
    PanelHeaderDirective,
    PanelTitleDirective,
    PanelFooterButtonDirective,
    PanelDialogDirective,
  ],
})
export class VCLPanelModule {}
