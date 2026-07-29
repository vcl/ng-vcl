import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentLayerRef } from '@vcl/ng-vcl';
import { VCLPanelComponent } from '../../../../lib/ng-vcl/src/panel/panel.component';
import {
  VCLPanelTitleDirective,
  VCLPanelFooterButtonDirective,
  VCLPanelDialogDirective,
} from '../../../../lib/ng-vcl/src/panel/panel.directive';
import { VCLButtonComponent } from '../../../../lib/ng-vcl/src/button/button.component';

@Component({
  templateUrl: 'bar.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    VCLPanelComponent,
    VCLPanelTitleDirective,
    VCLPanelFooterButtonDirective,
    VCLPanelDialogDirective,
    VCLButtonComponent,
  ],
})
export class BarComponent {
  constructor(private layer: ComponentLayerRef) {}

  get title() {
    return this.layer.data.title;
  }

  close(value?: string) {
    this.layer.close({
      value,
    });
  }
}
