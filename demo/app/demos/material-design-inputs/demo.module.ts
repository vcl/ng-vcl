import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLButtonModule, VCLButtonGroupModule,
         VCLInputModule,
         VCLTextareaModule,
         VCLFormControlGroupModule,
         VCLIcogramModule,
         VCLIconModule,
         VCLSelectModule,
         VCLEmbeddedInputGroupModule,
         VCLNotifierModule,
         VCLPasswordInputModule,
         VCLMaterialDesignInputsModule,
         VCLRadioButtonModule,
         VCLDatepickerModule} from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { MaterialDesignInputsDemoComponent } from './demo.component';
import README from '@vcl/ng-vcl/material-design-inputs/README.md';

export function demo() {
  return {
    label: 'Material Design Inputs',
    tabs: {
      Demo: MaterialDesignInputsDemoComponent,
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
    VCLButtonModule,
    VCLEmbeddedInputGroupModule,
    VCLButtonGroupModule,
    VCLRadioButtonModule,
    VCLInputModule,
    VCLPasswordInputModule,
    VCLIconModule,
    VCLIcogramModule,
    VCLSelectModule,
    VCLTextareaModule,
    VCLNotifierModule,
    VCLDatepickerModule,
    VCLFormControlGroupModule,
    VCLMaterialDesignInputsModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ MaterialDesignInputsDemoComponent ],
  declarations: [ MaterialDesignInputsDemoComponent ]
})
export class MaterialDesignInputsDemoModule { }
