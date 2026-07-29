import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VCLButtonComponent, VCLIconModule, VCLLabelDirective } from '@vcl/ng-vcl';
import { VCLInputDirective } from '../../../../lib/ng-vcl/src/input/input.directive';
import { TextareaDirective } from '../../../../lib/ng-vcl/src/input/textarea.directive';
import { VCLInputFieldComponent } from '../../../../lib/ng-vcl/src/input/input-field.component';
import { EmbeddedInputFieldLabelDirective } from '../../../../lib/ng-vcl/src/input/embedded-label.directive';

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
