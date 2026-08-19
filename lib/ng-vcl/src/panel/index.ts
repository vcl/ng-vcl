import { NgModule } from '@angular/core';

import { VCLIconModule } from '../icon/index';
import {
  VCLPanelDialogDirective,
  VCLPanelTitleDirective,
  VCLPanelFooterButtonDirective,
  VCLPanelHeaderDirective,
  VCLPanelFooterDirective,
} from './panel.directive';
import { VCLPanelComponent } from './panel.component';

export {
  VCLPanelComponent,
  VCLPanelDialogDirective,
  VCLPanelTitleDirective,
  VCLPanelFooterButtonDirective,
  VCLPanelHeaderDirective,
  VCLPanelFooterDirective,
};

@NgModule({
  imports: [
    VCLPanelComponent,
    VCLPanelDialogDirective,
    VCLPanelTitleDirective,
    VCLPanelFooterButtonDirective,
    VCLPanelHeaderDirective,
    VCLPanelFooterDirective,
  ],
  exports: [
    VCLPanelComponent,
    VCLPanelDialogDirective,
    VCLPanelTitleDirective,
    VCLPanelFooterButtonDirective,
    VCLPanelHeaderDirective,
    VCLPanelFooterDirective,
  ],
})
export class VCLPanelModule {}
