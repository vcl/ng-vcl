import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class RadioButtonDemoComponent {

  isChecked = false;

  rgValue1 = 'red';
  rgValue2 = 'f';
  rgValue3 = 'g';

  onChange(value) {
    console.log('radio-button onChange fired');
    console.dir(value);
  }
}
