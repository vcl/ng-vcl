import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'radio-group.component.html'
})
export class RadioGroupComponent implements OnInit {

  value;
  value2 = '4';


  options = [
    {
      label: 'item1',
      value: '1'
    },
    {
      label: 'item2',
      value: '2'
    },
    {
      label: 'item3',
      value: '3'
    },
    {
      label: 'item4',
      value: '4'
    },
    {
      label: 'item5',
      value: '5'
    }
  ];

  options2 = [
    {
      label: 'item1',
      value: '1'
    },
    {
      label: 'item2',
      value: '2'
    },
    {
      label: 'item3',
      value: '3'
    },
    {
      label: 'item4',
      value: '4'
    },
    {
      label: 'item5',
      value: '5'
    }
  ];

  constructor() { }

  ngOnInit() { }

}
