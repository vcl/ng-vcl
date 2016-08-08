import { Component, OnInit } from '@angular/core';
import template from './icon.component.html';
import {ICON_DIRECTIVES} from '../../../src/components/index';

@Component({
  template,
  directives: [ICON_DIRECTIVES]
})
export class IconComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

}