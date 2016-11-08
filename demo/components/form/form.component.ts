import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'form.component.html'
})
export class FormComponent implements OnInit {



  changed(form) {
    console.log('form submitted');
    console.dir(form);
  }

  items = [
    { label: 'item 1' },
    { label: 'item 2' },
    { label: 'item 3' },
    { label: 'item 4' },
    { label: 'item 5' },
    { label: 'item 6', sublabel: 'sublabel of item 6' },
    { label: 'item 7', sublabel: 'sublabel of item 7' },
    { label: 'item 8', sublabel: 'sublabel of item 8' },
    { label: 'item 9' },
    { label: 'item 10' }
  ];

  data1: string = '';

  data: Object = {
    user: {}
  };

  constructor() { }

  ngOnInit() { }

}
