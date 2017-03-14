import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'radio-button.component.html'
})
export class RadioButtonComponent {

  isChecked = false;
  isChecked2 = false;
  isChecked3 = false;
  isChecked4 = false;

  rgValue1 = 1;
  rgValue2 = 'r2';

  onChange(value) {
    console.log('radio-button onChange fired');
    console.dir(value);
  }
}
