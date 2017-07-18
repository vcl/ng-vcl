import { Component } from '@angular/core';

@Component({
  selector: 'date-picker',
  templateUrl: 'demo.component.html',
  styles: [`
    .100px{
      width: 100px;
    }
  `]
})
export class DatePickerDemoComponent {

  selectedDate = new Date();
  selectedDate2 = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 31);
  selectedRangeEnd = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 34);
  minDate = new Date();

  onChange(date) {
    console.log('onChange', date);
  }
}
