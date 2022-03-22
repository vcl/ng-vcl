import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';

import { VCLButtonModule } from '../button/index';
import { VCLButtonGroupModule } from '../button-group/index';
import { VCLSelectListModule } from '../select-list/index';
import { VCLFlipSwitchModule } from '../flip-switch/index';
import { VCLSliderModule } from '../slider/index';
import { VCLCheckboxModule } from '../checkbox/index';
import { VCLRadioButtonModule } from '../radio-button/index';
import { VCLInputModule } from '../input/index';
import { VCLPasswordInputModule } from '../password-input/index';
import { VCLTokenModule } from '../token/index';
import { VCLIconModule } from '../icon/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';
import { VCLDatePickerModule } from '../date-picker/index';
import { VCLSelectModule } from '../select/index';
import { VCLFileInputModule } from '../file-input/index';
import { VCLRatingModule } from '../rating/index';
import { VCLLayerModule } from '../layer/index';
import { VCLPanelModule } from '../panel/index';
import { VCLSpinnerModule } from '../spinner';

import { JssFormComponent } from './jss-form.component';
import { JssFormHintsComponent } from './jss-form-hints.component';
import { FormFieldInputComponent, FormFieldButtonComponent, FormFieldSwitchComponent,
         FormFieldObjectComponent, FormFieldRatingComponent, FormFieldControl,
         FormField, FormFieldButtonsComponent, FormFieldTextareaComponent, FormFieldSelectComponent, FormFieldSliderComponent,
         FormFieldCheckboxComponent, FormFieldRadioGroupComponent, FormFieldTokenComponent,
         FormFieldFileInputComponent, FormFieldHiddenComponent, FormFieldButtonGroupComponent, FormFieldSelectListComponent, FormFieldArrayComponent, FormFieldPasswordInputComponent, FormFieldDatepickerComponent } from './fields/index';
import { initializeFields  } from './fields/index';
import { JssFormInputWrapperComponent } from './jss-form-input-wrapper.component';

export { JssFormComponent };
export * from './schemas';
export * from './types';
export {FormField, FormFieldControl };

let fieldsInitialized = false;

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PortalModule,
        VCLButtonModule,
        VCLButtonGroupModule,
        VCLSelectListModule,
        VCLFlipSwitchModule,
        VCLSliderModule,
        VCLCheckboxModule,
        VCLRadioButtonModule,
        VCLInputModule,
        VCLPasswordInputModule,
        VCLTokenModule,
        VCLIconModule,
        VCLFormControlGroupModule,
        VCLDatePickerModule,
        VCLSelectModule,
        VCLSelectListModule,
        VCLFileInputModule,
        VCLRatingModule,
        VCLLayerModule,
        VCLPanelModule,
        VCLSpinnerModule
    ],
    exports: [JssFormComponent],
    declarations: [
        JssFormComponent,
        JssFormHintsComponent,
        JssFormInputWrapperComponent,
        FormFieldButtonComponent,
        FormFieldButtonsComponent,
        FormFieldInputComponent,
        FormFieldTextareaComponent,
        FormFieldSelectComponent,
        FormFieldSelectListComponent,
        FormFieldSwitchComponent,
        FormFieldSliderComponent,
        FormFieldCheckboxComponent,
        FormFieldRadioGroupComponent,
        FormFieldTokenComponent,
        FormFieldDatepickerComponent,
        FormFieldFileInputComponent,
        FormFieldHiddenComponent,
        FormFieldButtonGroupComponent,
        FormFieldRatingComponent,
        FormFieldObjectComponent,
        FormFieldArrayComponent,
        FormFieldPasswordInputComponent
    ],
    providers: []
})
export class VCLJssFormModule {
  constructor() {
    if (!fieldsInitialized) {
      initializeFields();
      fieldsInitialized = true;
    }
  }
}
