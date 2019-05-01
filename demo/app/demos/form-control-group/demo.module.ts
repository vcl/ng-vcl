import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLButtonModule, VCLButtonGroupModule,
         VCLInputModule, VCLFileInputModule, VCLFlipSwitchModule, VCLDropdownModule, VCLCheckboxModule, VCLLabelModule, VCLSliderModule, VCLTokenModule, VCLTextareaModule,
         VCLRadioButtonModule,
         VCLFormControlGroupModule,
         VCLIcogramModule,
         VCLIconModule,
         VCLSelectModule,
         VCLEmbeddedInputGroupModule,
         VCLRatingModule} from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { FormControlGroupDemoComponent } from './demo.component';

export function demo() {
  return {
    name: 'Form',
    tabs: {
      Demo: FormControlGroupDemoComponent,
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/form-control-group/README.md')
      },
      'demo.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./demo.component.ts')
      }
    }
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoModule,
    VCLButtonModule,
    VCLEmbeddedInputGroupModule,
    VCLButtonGroupModule,
    VCLInputModule,
    VCLRatingModule,
    VCLFileInputModule,
    VCLFlipSwitchModule,
    VCLIconModule,
    VCLDropdownModule,
    VCLCheckboxModule,
    VCLIcogramModule,
    VCLLabelModule,
    VCLRadioButtonModule,
    VCLSliderModule,
    VCLSelectModule,
    VCLTokenModule,
    VCLTextareaModule,
    VCLFormControlGroupModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ FormControlGroupDemoComponent ],
  declarations: [ FormControlGroupDemoComponent ]
})
export class FormControlGroupDemoModule { }
