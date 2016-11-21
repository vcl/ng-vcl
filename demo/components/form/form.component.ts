import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';



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

  customScaleNames = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five'
  ];

  tokenList = [
    {
      label: 'alice',
      selected: false
    },
    {
      label: 'bob',
      selected: false
    },
    {
      label: 'carol',
      selected: false
    },
    {
      label: 'dave',
      selected: false
    }
  ];

  tokenList2 = [
    {
      label: 'alice',
      selected: false
    },
    {
      label: 'bob',
      selected: false
    }
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
      mycheckbox: ['', Validators.required],
      flip: [''],
      tokenlist: [''],
      tokeninput: [this.tokenList2],
      datepick: [''],
      slider: [80]
    }, {
        validator: equalInputMatcher
      });
    this.form.patchValue({
      myname: 'Steven'
    });


  }

  ngOnInit() { }


}
