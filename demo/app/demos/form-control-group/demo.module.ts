import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLButtonModule, VCLButtonGroupModule,
         VCLInputModule, VCLFileInputModule, VCLFlipSwitchModule, VCLCheckboxModule, VCLSliderModule, VCLTokenModule, VCLTextareaModule,
         VCLRadioButtonModule,
         VCLFormControlGroupModule,
         VCLIcogramModule,
         VCLIconModule,
         VCLSelectModule,
         VCLEmbeddedInputGroupModule,
         VCLRatingModule,
         VCLNotifierModule,
         VCLPasswordInputModule,
         VCLDatepickerModule} from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { FormControlGroupDemoComponent } from './demo.component';
import { VCLCounterModule } from './counter.component';
import README from '@ng-vcl/ng-vcl/form-control-group/README.md';

export function demo() {
  return {
    label: 'Form Control Group',
    tabs: {
      Demo: FormControlGroupDemoComponent,
      'README.md': {
        type: 'md',
        content: README
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
    VCLCounterModule,
    VCLButtonModule,
    VCLEmbeddedInputGroupModule,
    VCLButtonGroupModule,
    VCLInputModule,
    VCLPasswordInputModule,
    VCLRatingModule,
    VCLFileInputModule,
    VCLFlipSwitchModule,
    VCLIconModule,
    VCLCheckboxModule,
    VCLIcogramModule,
    VCLRadioButtonModule,
    VCLSliderModule,
    VCLSelectModule,
    VCLTokenModule,
    VCLTextareaModule,
    VCLNotifierModule,
    VCLDatepickerModule,
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
