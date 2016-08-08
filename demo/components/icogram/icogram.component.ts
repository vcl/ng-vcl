import { Component, OnInit } from '@angular/core';
import template from './icogram.component.html';
import {ICOGRAM_DIRECTIVES, ICON_DIRECTIVES} from '../../../src/components/index';

@Component({
  template,
  directives: [ICOGRAM_DIRECTIVES, ICON_DIRECTIVES]
})
export class IcogramComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

} 