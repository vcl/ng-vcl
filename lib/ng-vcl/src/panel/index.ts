import { NgModule } from '@angular/core';
import { VCLButtonModule } from '../button/index';
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
    VCLButtonModule,
    VCLIconModule,
    VCLPanelComponent,
    VCLPanelFooterDirective,
    VCLPanelHeaderDirective,
    VCLPanelTitleDirective,
    VCLPanelFooterButtonDirective,
    VCLPanelDialogDirective,
  ],
})
export class VCLPanelModule {}
