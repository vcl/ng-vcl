import { Component } from '@angular/core';
import {
  VCLTokenComponent,
  VCLTokenInputContainerComponent,
  VCLTokenListComponent,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [
    VCLTokenComponent,
    VCLTokenListComponent,
    VCLTokenInputContainerComponent,
  ],
})
export class TokenDemoComponent {
  onRemove(token) {
    console.log('onRemove', token);
  }

  onListChange(value) {
    console.log('onListChange', value);
  }

  onInputChange(value) {
    console.log('onInputChange', value);
  }
}
