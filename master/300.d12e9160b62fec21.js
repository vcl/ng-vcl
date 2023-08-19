"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[300],{7300:(m,r,n)=>{n.r(r),n.d(r,{CalendarDemoModule:()=>y,demo:()=>v});var i=n(6814),p=n(2911),h=n(2916),u=n(2320),e=n(5879),g=n(5296),C=n(6253);function f(t,c){if(1&t){const s=e.EpF();e.TgZ(0,"div",10)(1,"div",11)(2,"div",12)(3,"button",13),e.NdJ("click",function(){e.CHM(s);const a=e.oxw(),d=e.MAs(33);return e.KtG(d.viewDate=a.today)}),e._uU(4," go to today "),e.qZA(),e.TgZ(5,"button",14),e.NdJ("click",function(){e.CHM(s),e.oxw();const a=e.MAs(33);return e.KtG(a.viewDate=a.value)}),e._uU(6," go to selected "),e.qZA()()()()}}let A=(()=>{var t;class c{constructor(l){this.dateAdapter=l,this.dateArray=[],this.monthArray=[],this.today=this.dateAdapter.today(),this.available=[{match:{start:this.dateAdapter.addDays(this.dateAdapter.today(),1),end:this.dateAdapter.addDays(this.dateAdapter.today(),14)},class:"available",view:"month"},{match:this.dateAdapter.always(),class:"unavailable",disabled:!0,view:"month"}]}get sdate(){return this.dateAdapter.format(this.date,"date")}get sdateRange(){return this.dateAdapter.isRange(this.dateRange)?this.dateAdapter.format(this.dateRange.start,"date")+" - "+this.dateAdapter.format(this.dateRange.end,"date"):"-"}get sdateArray(){return this.dateArray.map(l=>this.dateAdapter.format(l,"date")).join(", ")}get smonth(){return this.dateAdapter.format(this.month,"yearMonth")}get smonthRange(){return this.dateAdapter.isRange(this.monthRange)?this.dateAdapter.format(this.monthRange.start,"yearMonth")+" - "+this.dateAdapter.format(this.monthRange.end,"yearMonth"):"-"}get smonthArray(){return this.monthArray.map(l=>this.dateAdapter.format(l,"yearMonth")).join(", ")}}return(t=c).\u0275fac=function(l){return new(l||t)(e.Y36(h.Z_m))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:35,vars:17,consts:[[3,"value","valueChange"],["selectionMode","range",3,"value","valueChange"],["selectionMode","multiple",3,"value","maxSelectableDates","valueChange"],["selectionMode","month",3,"value","valueChange"],["selectionMode","month-range",3,"value","valueChange"],["selectionMode","month-multiple",3,"value","maxSelectableDates","valueChange"],[3,"disabled"],[3,"dateModifiers"],["c","vclCalendar"],["vclCalendarFooter","","class","d-g-row",4,"ngIf"],["vclCalendarFooter","",1,"d-g-row"],[1,"d-g-cell","toolbar"],["role","menubar",1,"flex","row","justify-between","center"],["vcl-button","","type","button",1,"transparent","flex",3,"click"],["vcl-button","","square","","type","button",1,"transparent","flex",3,"click"]],template:function(l,a){if(1&l&&(e.TgZ(0,"h3"),e._uU(1,"Basic calendar"),e.qZA(),e.TgZ(2,"vcl-calendar",0),e.NdJ("valueChange",function(o){return a.date=o}),e.qZA(),e._uU(3),e.TgZ(4,"h3"),e._uU(5,'With selectionMode="range"'),e.qZA(),e.TgZ(6,"vcl-calendar",1),e.NdJ("valueChange",function(o){return a.dateRange=o}),e.qZA(),e._uU(7),e.TgZ(8,"h3"),e._uU(9,'With selectionMode="multiple", maxSelectableDates=3'),e.qZA(),e.TgZ(10,"vcl-calendar",2),e.NdJ("valueChange",function(o){return a.dateArray=o}),e.qZA(),e._uU(11),e.TgZ(12,"h3"),e._uU(13,'With selectionMode="month"'),e.qZA(),e.TgZ(14,"vcl-calendar",3),e.NdJ("valueChange",function(o){return a.month=o}),e.qZA(),e._uU(15),e.TgZ(16,"h3"),e._uU(17,'With selectionMode="month-range"'),e.qZA(),e.TgZ(18,"vcl-calendar",4),e.NdJ("valueChange",function(o){return a.monthRange=o}),e.qZA(),e._uU(19),e.TgZ(20,"h3"),e._uU(21,'With selectionMode="month-multiple", maxSelectableDates=2'),e.qZA(),e.TgZ(22,"vcl-calendar",5),e.NdJ("valueChange",function(o){return a.monthArray=o}),e.qZA(),e._uU(23),e.TgZ(24,"h3"),e._uU(25,"Disabled"),e.qZA(),e._UZ(26,"vcl-calendar",6),e.TgZ(27,"h3"),e._uU(28,"With dateModifiers"),e.qZA(),e._UZ(29,"vcl-calendar",7),e.TgZ(30,"h3"),e._uU(31,"Custom Footer"),e.qZA(),e.TgZ(32,"vcl-calendar",null,8),e.YNc(34,f,7,0,"div",9),e.qZA()),2&l){const d=e.MAs(33);e.xp6(2),e.Q6J("value",a.date),e.xp6(1),e.hij("\nValue: ",a.sdate," "),e.xp6(3),e.Q6J("value",a.dateRange),e.xp6(1),e.hij("\nValue: ",a.sdateRange," "),e.xp6(3),e.Q6J("value",a.dateArray)("maxSelectableDates",3),e.xp6(1),e.hij("\nValue: ",a.sdateArray," "),e.xp6(3),e.Q6J("value",a.month),e.xp6(1),e.hij("\nValue: ",a.smonth," "),e.xp6(3),e.Q6J("value",a.monthRange),e.xp6(1),e.hij("\nValue: ",a.smonthRange," "),e.xp6(3),e.Q6J("value",a.monthArray)("maxSelectableDates",2),e.xp6(1),e.hij("\nValue: ",a.smonthArray," "),e.xp6(3),e.Q6J("disabled",!0),e.xp6(3),e.Q6J("dateModifiers",a.available),e.xp6(5),e.Q6J("ngIf","month"===d.view)}},dependencies:[i.O5,g.r,C.e],styles:["vcl-calendar[_ngcontent-%COMP%]{width:18em}"]}),c})();const D="# vcl-calendar\n\nA calendar to display and select dates\n\n## Usage\n\n```typescript\nimport { VCLCalendarModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLCalendarModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-calendar [date]=\"date\"></vcl-calendar>\n```\n\n### Date representation\n\nThe calendar uses the `DateAdapterBase` for date representation.\nCheck the [`DateAdapterBase` docs](#/dateadapter) for further information.\n\n### selectionMode\n\nThe calendar supports a variety of selection modes. The default `selectionMode` is `date`\n\n- `date` Can select a single date\n- `range` Can select a date range with a starting and ending date (see `VCLDateRange` interface)\n- `multiple` Can select multiple dates\n- `month` Can a single month\n- `month-multiple` Can select multiple months\n- `month-range` Can select a month range with a starting and ending month (see `VCLDateRange` interface)\n\n### dateModifier\n\nA date modifier allows to customize specific days in the month calendar.\nAn array of object implementing the `VCLCalendarDateModifier` can be passed to the calendar.\n\n```html\n<vcl-calendar [dateModifiers]=\"dateModifiers\"></vcl-calendar>\n```\n\n```ts\ndateModifiers = [\n  {\n    match: new Date(2019, 0, 1), // Matches January, 1\n    class: 'holiday', // Adds holiday css class\n    disabled: true, // Disabled date\n    view: 'month', // Limits  modifier to month view\n  },\n];\n```\n\n#### vcl-calendar attributes\n\n| Name                 | Type                                          | Default | Description                                                                             |\n| -------------------- | --------------------------------------------- | ------- | --------------------------------------------------------------------------------------- |\n| `value`              | VCLDate \\| VCLDate[] \\| VCLDateRange<VCLDate> |         | Selected date(s)/date range in the calendar                                             |\n| `viewDate`           | VCLDate                                       | today   | The currently shown date in the calendar                                                |\n| `selectionMode`      | VCLCalendarSelectionMode                      |         | See selectionMode description                                                           |\n| `disabled`           | boolean                                       | false   | Disables the calendar when true                                                         |\n| `dateModifiers`      | VCLCalendarDateModifier[]                     |         | only `month` view: See dateModifier description                                         |\n| `showWeekOfTheYear`  | boolean                                       | false   | only `month` view: Show of the year when true                                           |\n| `maxSelectableDates` | boolean                                       |         | only for selectionMode `multiple` and `month-range`: Maximum number of selectable dates |\n\n#### vcl-calendar events\n\n| Name             | Type                                          | Description                           |\n| ---------------- | --------------------------------------------- | ------------------------------------- |\n| `valueChange`    | VCLDate \\| VCLDate[] \\| VCLDateRange<VCLDate> | Triggered when a new date is selected |\n| `viewDateChange` | VCLDate                                       | Triggered when the viewDate changes   |\n\n#### vcl-calendar interfaces\n\n```ts\nexport type VCLCalendarSelectionMode =\n  | 'date'\n  | 'multiple'\n  | 'range'\n  | 'month'\n  | 'month-multiple'\n  | 'month-range';\nexport type VCLCalendarView = 'month' | 'year' | 'years' | 'hours' | 'minutes';\n\nexport interface VCLCalendarDateModifier<VCLDate> {\n  match: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;\n  class?: string;\n  disabled?: boolean;\n  view: ?VCLCalendarView;\n}\n```\n";function v(){return{label:"Calendar",tabs:{Demo:A,"README.md":{type:"md",content:D},"demo.component.html":{type:"html",content:n(969)},"demo.component.ts":{type:"ts",content:n(190)}}}}let y=(()=>{var t;class c{}return(t=c).\u0275fac=function(l){return new(l||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.ez,u.l,h.V4c,h.Byc,p.Bz.forChild([{path:"",component:u.z,data:{demo:v}}])]}),c})()},969:(m,r,n)=>{n.r(r),n.d(r,{default:()=>i});const i='<h3>Basic calendar</h3>\n\n<vcl-calendar [(value)]="date"></vcl-calendar>\nValue: {{ sdate }}\n\n<h3>With selectionMode="range"</h3>\n\n<vcl-calendar [(value)]="dateRange" selectionMode="range"></vcl-calendar>\nValue: {{ sdateRange }}\n\n<h3>With selectionMode="multiple", maxSelectableDates=3</h3>\n\n<vcl-calendar\n  [(value)]="dateArray"\n  selectionMode="multiple"\n  [maxSelectableDates]="3"></vcl-calendar>\nValue: {{ sdateArray }}\n\n<h3>With selectionMode="month"</h3>\n\n<vcl-calendar [(value)]="month" selectionMode="month"></vcl-calendar>\nValue: {{ smonth }}\n\n<h3>With selectionMode="month-range"</h3>\n\n<vcl-calendar [(value)]="monthRange" selectionMode="month-range"></vcl-calendar>\nValue: {{ smonthRange }}\n\n<h3>With selectionMode="month-multiple", maxSelectableDates=2</h3>\n\n<vcl-calendar\n  [(value)]="monthArray"\n  selectionMode="month-multiple"\n  [maxSelectableDates]="2"></vcl-calendar>\nValue: {{ smonthArray }}\n\n<h3>Disabled</h3>\n\n<vcl-calendar [disabled]="true"></vcl-calendar>\n\n<h3>With dateModifiers</h3>\n\n<vcl-calendar [dateModifiers]="available"></vcl-calendar>\n\n<h3>Custom Footer</h3>\n\n<vcl-calendar #c="vclCalendar">\n  <div vclCalendarFooter class="d-g-row" *ngIf="c.view === \'month\'">\n    <div class="d-g-cell toolbar">\n      <div class="flex row justify-between center" role="menubar">\n        <button\n          vcl-button\n          class="transparent flex"\n          type="button"\n          (click)="c.viewDate = today">\n          go to today\n        </button>\n        <button\n          vcl-button\n          square\n          class="transparent flex"\n          type="button"\n          (click)="c.viewDate = c.value">\n          go to selected\n        </button>\n      </div>\n    </div>\n  </div>\n</vcl-calendar>\n'},190:(m,r,n)=>{n.r(r),n.d(r,{default:()=>i});const i="import { Component } from '@angular/core';\n\nimport { VCLDateRange, DateAdapterBase } from '@vcl/ng-vcl';\nimport { VCLCalendarDateModifier } from '@vcl/ng-vcl';\n\n@Component({\n  templateUrl: 'demo.component.html',\n  styles: [\n    `\n      vcl-calendar {\n        width: 18em;\n      }\n    `,\n  ],\n})\nexport class CalendarDemoComponent {\n  constructor(private dateAdapter: DateAdapterBase<Date>) {}\n\n  date: Date;\n  get sdate() {\n    return this.dateAdapter.format(this.date, 'date');\n  }\n  dateRange: VCLDateRange<Date>;\n  get sdateRange() {\n    if (this.dateAdapter.isRange(this.dateRange)) {\n      return (\n        this.dateAdapter.format(this.dateRange.start, 'date') +\n        ' - ' +\n        this.dateAdapter.format(this.dateRange.end, 'date')\n      );\n    }\n    return '-';\n  }\n  dateArray: Date[] = [];\n  get sdateArray() {\n    return this.dateArray\n      .map(d => this.dateAdapter.format(d, 'date'))\n      .join(', ');\n  }\n\n  month: Date;\n  get smonth() {\n    return this.dateAdapter.format(this.month, 'yearMonth');\n  }\n  monthRange: VCLDateRange<Date>;\n  get smonthRange() {\n    if (this.dateAdapter.isRange(this.monthRange)) {\n      return (\n        this.dateAdapter.format(this.monthRange.start, 'yearMonth') +\n        ' - ' +\n        this.dateAdapter.format(this.monthRange.end, 'yearMonth')\n      );\n    }\n    return '-';\n  }\n  monthArray: Date[] = [];\n  get smonthArray() {\n    return this.monthArray\n      .map(d => this.dateAdapter.format(d, 'yearMonth'))\n      .join(', ');\n  }\n\n  today = this.dateAdapter.today();\n\n  available: VCLCalendarDateModifier<Date>[] = [\n    {\n      // Set vclAvailable class on specific range\n      match: {\n        start: this.dateAdapter.addDays(this.dateAdapter.today(), 1),\n        end: this.dateAdapter.addDays(this.dateAdapter.today(), 14),\n      },\n      class: 'available',\n      view: 'month', // Limit to month view\n    },\n    {\n      // Set vclUnavailable class and disable on specific range\n      match: this.dateAdapter.always(), // Still works as first modifier is prioritized\n      class: 'unavailable',\n      disabled: true,\n      view: 'month', // Limit to month view\n    },\n  ];\n}\n"}}]);