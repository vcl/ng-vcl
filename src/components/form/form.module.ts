import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FormComponent, FormInputControlGroup } from './form.component';

@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports: [FormComponent, FormInputControlGroup, FormsModule, ReactiveFormsModule],
  declarations: [FormComponent, FormInputControlGroup]
})
export class VCLFormModule { }
