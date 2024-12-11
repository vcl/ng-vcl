import { Component } from '@angular/core';

@Component({
    templateUrl: 'demo.component.html',
    standalone: false
})
export class RatingDemoComponent {
  horizontalValue = 2.5;
  verticalValue = 2.5;
  customValue = 7.5;
}
