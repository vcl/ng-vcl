import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'radio-button.component.html'
})
export class RadioButtonComponent implements OnInit {

  isChecked = false;
  isChecked2 = false;
  isChecked3 = false;


  onChange(value) {
    console.log('radio-button onChange fired');
    console.dir(value);
  }

  constructor() { }

  ngOnInit() { }

}
