import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html',
  styles: [`
    .100px{
      width: 100px;
    }
  `]
})
export class DatePickerDemoComponent {

  date = new Date();

  onChange(date) {
    console.log('onChange', date);
  }
}
