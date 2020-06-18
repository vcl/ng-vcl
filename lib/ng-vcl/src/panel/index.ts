import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { VCLButtonModule } from '../button/index';
import { VCLIconModule } from '../icon/index';
import { PanelFooterDirective, PanelHeaderDirective, PanelTitleDirective, PanelFooterButtonDirective, PanelDialogDirective } from './panel.directive';
import { PanelComponent } from './panel.component';

export { PanelComponent };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    VCLButtonModule,
    VCLIconModule,
  ],
  exports: [ VCLButtonModule, VCLIconModule, PanelComponent, PanelFooterDirective, PanelHeaderDirective, PanelTitleDirective, PanelFooterButtonDirective, PanelDialogDirective],
  declarations: [ PanelComponent, PanelFooterDirective, PanelHeaderDirective, PanelTitleDirective, PanelFooterButtonDirective, PanelDialogDirective ],
})
export class VCLPanelModule {

}
