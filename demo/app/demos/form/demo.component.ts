import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, FormControl } from '@angular/forms';


function equalInputMatcher(c: AbstractControl) {

}

@Component({
  templateUrl: 'demo.component.html'
})
export class FormDemoComponent {

  form = new FormGroup({
    input1: new FormControl('', [ Validators.required, Validators.minLength(4) ]),
    input2: new FormControl('', [ ]),
    checkbox: new FormControl(true, [ ]),
    fileinput: new FormControl(null, [ ]),
    flipswitch: new FormControl(true, [ ]),
    buttonGroup: new FormControl([], [ this.validateSelection.bind(this) ]),
    dropdown: new FormControl([], [ this.validateSelection.bind(this) ]),
    radiogroup: new FormControl(null, Validators.required),
    select: new FormControl(null, Validators.required),
    slider: new FormControl(0, [ this.validateSlider.bind(this) ] ),
    textarea: new FormControl(null, Validators.required),
    tokeninput: new FormControl([], [ this.validateSelection.bind(this) ]),
  }, this.validateButtonInputs.bind(this) );

  get input1() { return this.form.get('input1'); }
  get input2() { return this.form.get('input2'); }
  get checkbox() { return this.form.get('checkbox'); }
  get fileinput() { return this.form.get('fileinput'); }
  get flipswitch() { return this.form.get('flipswitch'); }
  get buttonGroup() { return this.form.get('buttonGroup'); }
  get dropdown() { return this.form.get('dropdown'); }
  get radiogroup() { return this.form.get('radiogroup'); }
  get select() { return this.form.get('select'); }
  get slider() { return this.form.get('slider'); }
  get textarea() { return this.form.get('textarea'); }
  get tokeninput() { return this.form.get('tokeninput'); }

  validateSelection(c: AbstractControl) {
    return (Array.isArray(c.value) && c.value.length >= 1) ? null : { noSelection: true };
  }

  validateButtonInputs(c: AbstractControl) {
    return c.get('input1').value === c.get('input2').value ? null : { inputsNotEqual: true };
  }

  validateSlider(c: AbstractControl) {
    return (typeof c.value === 'number' && c.value > 1) ? null : { lowValue: true };
  }

    // // the module-based forms logic is made with the FormBuilder
    // this.form = this.fb.group({
    //   myname: ['', Validators.required],
    //   myname2: ['', Validators.required],
    //   itemselect: [''],
    //   myradio: [''],
    //   mydropdown: [''],
    //   mycheckbox: ['', Validators.required],
    //   flip: [''],
    //   tokenlist: [''],
    //   tokeninput: [this.tokenList2],
    //   datepick: [''],
    //   slider: [80]
    // }, {
    //     validator: equalInputMatcher
    //   });
    // this.form.patchValue({
    //   myname: 'Steven'
    // });


}
