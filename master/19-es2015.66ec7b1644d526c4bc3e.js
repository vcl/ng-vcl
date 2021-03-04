(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{DNwU:function(e,n,t){"use strict";t.r(n),n.default="import { Component } from '@angular/core';\nimport { DateAdapter } from '@vcl/ng-vcl';\n\n@Component({\n  templateUrl: 'demo.component.html',\n  styles: [`\n    .100px{\n      width: 100px;\n    }\n  `]\n})\nexport class DatePickerDemoComponent {\n\n  constructor(private da: DateAdapter) { }\n\n  date = new Date();\n  month = new Date();\n  time = new Date();\n\n  datePattern = this.da.pattern('date');\n  monthPattern = this.da.pattern('month');\n  timePattern = this.da.pattern('time');\n\n  onChange(date) {\n    console.log('onChange', date);\n  }\n}\n"},H8Na:function(e,n,t){"use strict";t.r(n),n.default='<vcl-form-control-group>\n  <vcl-label>Basic datepicker</vcl-label>\n  <vcl-datepicker [placeholder]="datePattern" [(ngModel)]="date"></vcl-datepicker>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Month Picker</vcl-label>\n  <vcl-datepicker [placeholder]="monthPattern" [(ngModel)]="month" pick="month"></vcl-datepicker>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Time Picker</vcl-label>\n  <vcl-datepicker [placeholder]="timePattern" [(ngModel)]="time" pick="time"></vcl-datepicker>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Disabled datepicker</vcl-label>\n  <vcl-datepicker [disabled]="true"></vcl-datepicker>\n</vcl-form-control-group>\n'},Jqs8:function(e,n,t){"use strict";t.r(n),t.d(n,"demo",(function(){return u})),t.d(n,"DatepickerDemoModule",(function(){return h}));var a=t("ofXK"),o=t("tyNb"),l=t("19H1"),r=t("2FIb"),c=t("fXoL"),i=t("xsjC"),d=t("x1VK"),p=t("pKlR"),m=t("jPeI"),s=t("3Pt+");let v=(()=>{class e{constructor(e){this.da=e,this.date=new Date,this.month=new Date,this.time=new Date,this.datePattern=this.da.pattern("date"),this.monthPattern=this.da.pattern("month"),this.timePattern=this.da.pattern("time")}onChange(e){console.log("onChange",e)}}return e.\u0275fac=function(n){return new(n||e)(c.Jb(l.DateAdapter))},e.\u0275cmp=c.Db({type:e,selectors:[["ng-component"]],decls:16,vars:7,consts:[[3,"placeholder","ngModel","ngModelChange"],["pick","month",3,"placeholder","ngModel","ngModelChange"],["pick","time",3,"placeholder","ngModel","ngModelChange"],[3,"disabled"]],template:function(e,n){1&e&&(c.Pb(0,"vcl-form-control-group"),c.Pb(1,"vcl-label"),c.xc(2,"Basic datepicker"),c.Ob(),c.Pb(3,"vcl-datepicker",0),c.Wb("ngModelChange",(function(e){return n.date=e})),c.Ob(),c.Ob(),c.Pb(4,"vcl-form-control-group"),c.Pb(5,"vcl-label"),c.xc(6,"Month Picker"),c.Ob(),c.Pb(7,"vcl-datepicker",1),c.Wb("ngModelChange",(function(e){return n.month=e})),c.Ob(),c.Ob(),c.Pb(8,"vcl-form-control-group"),c.Pb(9,"vcl-label"),c.xc(10,"Time Picker"),c.Ob(),c.Pb(11,"vcl-datepicker",2),c.Wb("ngModelChange",(function(e){return n.time=e})),c.Ob(),c.Ob(),c.Pb(12,"vcl-form-control-group"),c.Pb(13,"vcl-label"),c.xc(14,"Disabled datepicker"),c.Ob(),c.Kb(15,"vcl-datepicker",3),c.Ob()),2&e&&(c.yb(3),c.fc("placeholder",n.datePattern)("ngModel",n.date),c.yb(4),c.fc("placeholder",n.monthPattern)("ngModel",n.month),c.yb(4),c.fc("placeholder",n.timePattern)("ngModel",n.time),c.yb(4),c.fc("disabled",!0))},directives:[i.a,d.a,p.a,m.a,s.r,s.u],styles:[".100px[_ngcontent-%COMP%]{\n      width: 100px;\n    }"]}),e})();function u(){return{label:"Datepicker",tabs:{Demo:v,"README.md":{type:"md",content:'# vcl-datepicker\n\nLets users pick dates and time comfortably.\n\n## Usage\n\n```js\nimport { VCLDatepickerModule } from \'@vcl/ng-vcl\';;\n\n@NgModule({\n  imports: [ VCLDatePickerModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-form-control-group>\n  <vcl-label>Date picker</vcl-label>\n  <vcl-datepicker [value]="value" (valueChange)="onValueChange($event)"></vcl-datepicker>\n</vcl-form-control-group>\n```\n```html\n<vcl-form-control-group>\n  <vcl-label>Month picker</vcl-label>\n  <vcl-datepicker [value]="value" (valueChange)="onValueChange($event)" pick="month"></vcl-datepicker>\n</vcl-form-control-group>\n```\n\n```html\n  <vcl-form-control-group>\n    <vcl-label>Time picker</vcl-label>\n    <vcl-datepicker [value]="value" (valueChange)="onValueChange($event)" pick="time"></vcl-datepicker>\n  </vcl-form-control-group>\n```\n\n### Date representation\n\nThe datepicker uses the `DateAdapterBase` for date representation.\nCheck the [`DateAdapterBase` docs](#/dateadapter) for further information.\n\n### API\n\n#### vcl-datepicker attributes\n\nName                | Type                                            | Default | Description\n------------        | -------                                         | ------- | -----------------------------------------------\n`value`             | VCLDate                                         |         | Current value\n`viewDate`          | VCLDate                                         | today   | The currently shown date in the calendar \n`disabled`          | boolean                                         | false   | Disables the datepicker when true\n`pick`              | \'date\' \\| \'month\' \\| \'time\'                     | \'date\'  | Datepicker mode\n`dateModifier`      | VCLCalendarDateModifier[]                       |         | See vcl-calendar\n`showWeekOfTheYear` | boolean                                         | false   | See vcl-calendar\n\n#### vcl-datepicker events\nName                | Type       | Description\n---------------     | -------    | -----------------------------------------------\n`valueChange`       | VCLDate    | Triggered when a new date is selected\n'},"demo.component.html":{type:"html",content:t("H8Na")},"demo.component.ts":{type:"ts",content:t("DNwU")}}}}let h=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(n){return new(n||e)},imports:[[a.c,s.m,r.b,l.VCLButtonModule,l.VCLFormControlGroupModule,l.VCLDatepickerModule,o.g.forChild([{path:"",component:r.a,data:{demo:u}}])]]}),e})()}}]);