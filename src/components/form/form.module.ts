import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FormComponent } from './form.component';

@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports: [FormComponent, FormsModule, ReactiveFormsModule],
  declarations: [FormComponent]
})
export class VCLFormModule { }
