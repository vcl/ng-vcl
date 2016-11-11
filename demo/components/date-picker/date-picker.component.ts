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




  constructor() { }

  ngOnInit() { }

  expandDatePicker() {
    this.expanded = !this.expanded;
  }

  onSelect(date: string) {
    console.log('onSelect():', date);
  }

  onPreviousYearTap() {
    console.log('onPreviousYearTap()');
    console.log('this.currentYear:', this.currentYear);
    if (this.currentYear < this.thisYear) {
      this.nextYearAvailable = true;
    }
  }

  onNextYearTap() {
    console.log('onNextYearTap()');
    console.log('this.currentYear:', this.currentYear);
    if (this.currentYear === this.thisYear) {
      this.nextYearAvailable = false;
    }
  }
}
