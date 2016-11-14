import { Component } from '@angular/core';

@Component({
  selector: 'date-picker',
  templateUrl: 'date-picker.component.html',
  styles: [`
    .100px{
      width: 100px;
    }
  `]
})
export class DatePickerComponent {

  expanded: boolean = false;

  thisYear: number = new Date().getUTCFullYear();
  currentYear: number = this.thisYear;

  prevYearAvailable: boolean = true;
  nextYearAvailable: boolean = false;


  selectedTime = new Date();
  selectRange = true;
  selectedRangeEnd = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3);

  minDate = new Date();

  constructor() { }

  ngOnInit() { }

  expandDatePicker() {
    this.expanded = !this.expanded;
  }

  onSelect(date: string) {
    console.log('onSelect():', date);
  }
}
