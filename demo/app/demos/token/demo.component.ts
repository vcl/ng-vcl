import { Component } from '@angular/core';
import { VCLTokenModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLTokenModule],
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
