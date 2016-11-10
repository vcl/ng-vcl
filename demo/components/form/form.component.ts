import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule, AbstractControl } from '@angular/forms';



function equalInputMatcher(c: AbstractControl) {
  return c.get('myname').value === c.get('myname2').value
    ? null : { notequal: true };
}

@Component({
  templateUrl: 'form.component.html'
})
export class FormComponent implements OnInit {

  items = [
    { label: 'item 1' },
    { label: 'item 2' },
    { label: 'item 3' }
  ];

  form: FormGroup;

  constructor(public fb: FormBuilder) {

    // the module-based forms logic is made with the FormBuilder
    this.form = this.fb.group({
      myname: ['', Validators.required],
      myname2: ['', Validators.required],
      itemselect: [''],
      myradio: [''],
      mydropdown: [''],
      mycheckbox: ['', Validators.required]
    }, {
        validator: equalInputMatcher
      });
    this.form.patchValue({
      myname: 'Steven'
    });


  }

  ngOnInit() { }

}
