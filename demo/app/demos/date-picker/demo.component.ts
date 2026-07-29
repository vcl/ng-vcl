import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DateAdapter,
  DateAdapterParserDE,
  DateAdapterParserEN,
  VCLDatePickerModule,
  VCLLabelDirective,
} from '@vcl/ng-vcl';
import { VCLButtonGroupComponent } from '../../../../lib/ng-vcl/src/button-group/button-group.component';
import { FormControlGroupComponent } from '../../../../lib/ng-vcl/src/form-control-group/form-control-group.component';
import { VCLButtonComponent } from '../../../../lib/ng-vcl/src/button/button.component';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    FormsModule,
    VCLButtonGroupComponent,
    FormControlGroupComponent,
    VCLDatePickerModule,
    VCLButtonComponent,
    VCLLabelDirective
  ],
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
