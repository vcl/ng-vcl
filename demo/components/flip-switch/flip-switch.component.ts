import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'flip-switch.component.html'
})
export class FlipSwitchComponent implements OnInit {

  selectedItem: any;

  value: boolean = false;

  constructor() { }

  ngOnInit() { }


  onChange(ev) {
    console.log('changed:');
    console.dir(ev);
  }

}
