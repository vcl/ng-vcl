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

  get input1(): FormControl { return <FormControl> this.form.get('input1'); }
  get input2(): FormControl { return <FormControl> this.form.get('input2'); }
  get checkbox(): FormControl { return <FormControl> this.form.get('checkbox'); }
  get fileinput(): FormControl { return <FormControl> this.form.get('fileinput'); }
  get flipswitch(): FormControl { return <FormControl> this.form.get('flipswitch'); }
  get buttonGroup(): FormControl { return <FormControl> this.form.get('buttonGroup'); }
  get dropdown(): FormControl { return <FormControl> this.form.get('dropdown'); }
  get radiogroup(): FormControl { return <FormControl> this.form.get('radiogroup'); }
  get select(): FormControl { return <FormControl> this.form.get('select'); }
  get slider(): FormControl { return <FormControl> this.form.get('slider'); }
  get textarea(): FormControl { return <FormControl> this.form.get('textarea'); }
  get tokeninput(): FormControl { return <FormControl> this.form.get('tokeninput'); }

  validateSelection(c: AbstractControl) {
    return (Array.isArray(c.value) && c.value.length >= 1) ? null : { noSelection: true };
  }

  validateButtonInputs(c: AbstractControl) {
    return c.get('input1').value === c.get('input2').value ? null : { inputsNotEqual: true };
  }

  validateSlider(c: AbstractControl) {
    return (typeof c.value === 'number' && c.value > 1) ? null : { lowValue: true };
  }
}
