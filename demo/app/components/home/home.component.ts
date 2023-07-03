import { Component } from '@angular/core';

import README from '!raw-loader!../../../../README.md';

@Component({
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  get readme() {
    return README;
  }
}
