import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import { FormComponent, FormInputControlGroup } from './form.component';

@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports: [FormComponent, FormInputControlGroup],
  declarations: [FormComponent, FormInputControlGroup]
})
export class VCLFormModule { }
