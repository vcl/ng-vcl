import { Component } from '@angular/core';
import {
  DateAdapter,
  DateAdapterParserDE,
  DateAdapterParserEN,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
})
export class DatePickerDemoComponent {
  constructor(private da: DateAdapter) {}

  date = new Date();
  month = new Date();
  monthAlt = new Date();
  time = new Date();

  selectedLocale = 'en';

  datePattern = this.da.pattern('date');
  monthPattern = this.da.pattern('month');
  timePattern = this.da.pattern('time');

  onChange(date) {
    console.log('onChange', date);
  }

  toGerman() {
    this.da.setParser(new DateAdapterParserDE(), 'de-DE');
    this.date = new Date(this.date);
    this.month = new Date(this.month);
    this.monthAlt = new Date(this.monthAlt);
    this.time = new Date(this.time);
    this.selectedLocale = 'de';
  }

  toEnglish() {
    this.da.setParser(new DateAdapterParserEN(), 'en-US');
    this.date = new Date(this.date);
    this.month = new Date(this.month);
    this.monthAlt = new Date(this.monthAlt);
    this.time = new Date(this.time);
    this.selectedLocale = 'en';
  }
}
