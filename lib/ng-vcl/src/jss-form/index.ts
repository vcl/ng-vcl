import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';

import { VCLTokenModule } from '../token/index';
import { VCLIconModule } from '../icon/index';

import { VCLDatePickerModule } from '../date-picker/index';
import { VCLSelectModule } from '../select/index';

import { VCLLayerModule } from '../layer/index';

import { JssFormComponent } from './jss-form.component';
import { JssFormHintsComponent } from './jss-form-hints.component';
import {
  FormFieldInputComponent,
  FormFieldButtonComponent,
  FormFieldSwitchComponent,
  FormFieldObjectComponent,
  FormFieldRatingComponent,
  FormFieldControl,
  FormField,
  FormFieldButtonsComponent,
  FormFieldTextareaComponent,
  FormFieldSelectComponent,
  FormFieldSliderComponent,
  FormFieldCheckboxComponent,
  FormFieldRadioGroupComponent,
  FormFieldTokenComponent,
  FormFieldFileInputComponent,
  FormFieldHiddenComponent,
  FormFieldButtonGroupComponent,
  FormFieldSelectListComponent,
  FormFieldArrayComponent,
  FormFieldPasswordInputComponent,
  FormFieldDatepickerComponent,
  EmptyDirective,
} from './fields/index';
import { initializeFields } from './fields/index';
import { JssFormInputWrapperComponent } from './jss-form-input-wrapper.component';

export { JssFormComponent };
export * from './schemas';
export * from './types';
export { FormField, FormFieldControl };

let fieldsInitialized = false;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PortalModule,
    VCLTokenModule,
    VCLIconModule,
    VCLDatePickerModule,
    VCLSelectModule,
    VCLLayerModule,
    JssFormComponent,
    JssFormHintsComponent,
    JssFormInputWrapperComponent,
    FormFieldButtonComponent,
    FormFieldButtonsComponent,
    FormFieldInputComponent,
    FormFieldTextareaComponent,
    FormFieldSelectComponent,
    EmptyDirective,
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
    FormFieldPasswordInputComponent,
  ],
  exports: [JssFormComponent],
  providers: [],
})
export class VCLJssFormModule {
  constructor() {
    if (!fieldsInitialized) {
      initializeFields();
      fieldsInitialized = true;
    }
  }
}
