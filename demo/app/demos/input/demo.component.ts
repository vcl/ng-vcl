import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  VCLButtonComponent, VCLIconModule, VCLLabelDirective,
  VCLInputDirective,
  VCLInputFieldComponent,
  EmbeddedInputFieldLabelDirective,
  TextareaDirective,
} from '@vcl/ng-vcl';
@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    FormsModule,
    VCLInputDirective,
    TextareaDirective,
    VCLInputFieldComponent,
    EmbeddedInputFieldLabelDirective,
    VCLButtonComponent,
    VCLIconModule,
    VCLLabelDirective
  ],
})
export class InputDemoComponent {
  data1 = '';
  data2 = '';
}
