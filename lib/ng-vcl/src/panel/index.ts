import { NgModule } from '@angular/core';
import { VCLButtonModule } from '../button/index';
import { VCLIconModule } from '../icon/index';
import {
  PanelFooterDirective,
  PanelHeaderDirective,
  PanelTitleDirective,
  PanelFooterButtonDirective,
  PanelDialogDirective,
} from './panel.directive';
import { PanelComponent } from './panel.component';

export {
  PanelComponent,
  PanelDialogDirective,
  PanelTitleDirective,
  PanelFooterButtonDirective,
  PanelHeaderDirective,
  PanelFooterDirective,
};

@NgModule({
  imports: [
    PanelComponent,
    PanelFooterDirective,
    PanelHeaderDirective,
    PanelTitleDirective,
    PanelFooterButtonDirective,
    PanelDialogDirective,
  ],
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
})
export class VCLPanelModule {}
