import { Component } from '@angular/core';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent  {
  constructor() { }

  readme = require("!raw-loader!../../../README.md")
}
