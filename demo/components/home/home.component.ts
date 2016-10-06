import { Component } from '@angular/core';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent  {
  constructor() { }

  readme = require("!raw!../../../README.md")
}
