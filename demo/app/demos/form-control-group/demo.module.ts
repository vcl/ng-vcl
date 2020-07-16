import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLButtonModule, VCLButtonGroupModule,
         VCLInputModule, VCLFileInputModule, VCLFlipSwitchModule, VCLCheckboxModule, VCLSliderModule, VCLTokenModule,
         VCLRadioButtonModule,
         VCLFormControlGroupModule,
         VCLIcogramModule,
         VCLIconModule,
         VCLSelectModule,
         VCLRatingModule,
         VCLNotifierModule,
         VCLPasswordInputModule,
         VCLDatepickerModule,
         VCLTooltipModule,
         VCLLayerModule,
         VCLPanelModule} from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { FormControlGroupDemoComponent } from './demo.component';
import { VCLCounterModule } from './counter.component';
import README from '!raw-loader!@vcl/ng-vcl/form-control-group/README.md';

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
        type: 'html',
        content: require('!raw-loader!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./demo.component.ts')
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
    VCLButtonGroupModule,
    VCLInputModule,
    VCLPasswordInputModule,
    VCLRatingModule,
    VCLFileInputModule,
    VCLLayerModule,
    VCLFlipSwitchModule,
    VCLIconModule,
    VCLPanelModule,
    VCLCheckboxModule,
    VCLIcogramModule,
    VCLRadioButtonModule,
    VCLSliderModule,
    VCLSelectModule,
    VCLTokenModule,
    VCLTooltipModule,
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
