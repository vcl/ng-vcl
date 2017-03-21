import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'input.component.html'
})
export class InputComponent implements OnInit {

  data1 = 'foobar';
  data2 = 'foobar';
  data3 = 42;

  constructor() { }

  ngOnInit() { }

}
