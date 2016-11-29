import { BrowserModule } from '@angular/platform-browser';
import { Component, Input, OnInit, NgModule, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'vcl-form',
  templateUrl: 'form.component.html',
  host: {
    '[class.vclForm]': 'true',
  }
})
export class FormComponent implements OnInit {

  @Input() layout: 'vertical' | 'horizontal' | 'inline' = 'vertical';

  @Output('ngSubmit') valueChange = new EventEmitter<Object>(); // emits ngForm

  onSubmitTemplateBased() {
  }


  constructor() {

  }


  ngOnInit() { }


  ngSubmit(form) {
    this.valueChange.emit(form);
  }

}
