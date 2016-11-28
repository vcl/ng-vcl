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

  /*  @Input()
    @HostBinding('class.vclDisabled')
    disabled: boolean = false;

    @Input()
    requiredIndicatorCharacter: string = '•';

    // The label
    @Input()
    label: string;

    // Optional sub-label
    @Input()
    subLabel: string;

    // Whether the label prepends the child content
    @Input()
    prepend: boolean = false;

    // Whether the label wraps the labelled control
    @Input()
    @HostBinding('class.vclFormControlLabelWrapping')
    wrapping: boolean  = false;

    // Whether an indicator that an input in to the labelled control is required
    @Input()
    required: boolean  = false;

    // Accessible label for the required indicator
    @Input()
    requiredIndLabel: string;
  */

}
