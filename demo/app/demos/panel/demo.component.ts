import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  VCLIconComponent,
  VCLPanelComponent,
  VCLPanelDialogDirective,
  VCLPanelFooterDirective,
  VCLPanelTitleDirective,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    VCLPanelComponent,
    VCLPanelTitleDirective,
    VCLPanelFooterDirective,
    VCLPanelDialogDirective,
    VCLIconComponent,
  ],
})
export class PanelDemoComponent {
  constructor() {}
}
