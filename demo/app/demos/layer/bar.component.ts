import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  ComponentLayerRef,
  VCLPanelComponent,
  VCLPanelTitleDirective,
  VCLPanelFooterButtonDirective,
  VCLPanelDialogDirective,
  VCLButtonComponent,
} from '@vcl/ng-vcl';

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
