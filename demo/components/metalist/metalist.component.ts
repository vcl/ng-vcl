import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'metalist.component.html'
})
export class MetalistComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  items: any = [
    { name: 'name 1' },
    { name: 'name 2' },
    { name: 'name 3' },
    { name: 'name 4' },
    { name: 'name 5' },
  ];

  metaInformation: any[] = [
    null,
    null,
    { selected: true }
  ];

  select(meta: any) {
    if (!meta.selected) {
      meta.selected = true;
    } else {
      meta.selected = false;
    }

    console.log('Meta informations: ', this.metaInformation);
  }
}
