import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class CalendarDemoComponent {
  date = new Date(2019, 5, 5);
}
