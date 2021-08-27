"use strict";(self.webpackChunkng_vcl=self.webpackChunkng_vcl||[]).push([[813],{33813:function(e,n,t){t.r(n),t.d(n,{DateadapterDemoModule:function(){return i},demo:function(){return d}});var a=t(16274),r=t(95454),o=t(36196),s=t(62518),p=t(84271);function d(){return{label:"Date Adapter",tabs:{"README.md":{type:"md",content:"# DateAdapter\n\nThe `DateAdapter` is a service that provides utils for date operations.\n\n```js\nimport { VCLDateAdapterModule } from '@vcl/ng-vcl';;\n\n@NgModule({\n  imports: [ VCLDateAdapterModule.forRoot() ],\n  ...\n})\nexport class AppComponent {}\n\n```\n```ts\nimport { DateAdapter } from '@vcl/ng-vcl';;\n\n@Component({ ... })\nexport class MyComponent {\n\n  constructor(private dateAdapter: DateAdapter) {\n    const today = new Date();\n    const s = dateAdapter.format(today, 'date');\n  }\n```\n\nCheck the `DateAdapterBase` [abstract class](https://github.com/ng-vcl/ng-vcl/tree/dev/lib/ng-vcl/src/dateadapter/dateadapter-base.ts) for an overview of methods and properties.\n\n### Date representation\n\nThe DateAdapter and components use the `VCLDate` generic type. The exact type is defined by the `DateAdapterBase`.\nThe default implementation is using the native javascript date object.\n\n#### Date range\n\nA date range is defined by a start and an end date.\n\n```ts\nexport interface VCLDateRange<VCLDate> {\n  start: VCLDate;\n  end: VCLDate;\n}\n```\n\n### Localization\n\nThe default date adapter uses the javascript `Intl` interfaces for localization.\nThe angular `LOCALE_ID` token is used to determine the application locale.\n\nExample:\n\n```ts\nimport { LOCALE_ID } from '@angular/core';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\nimport { AppModule } from './app/app.module';\n\nplatformBrowserDynamic().bootstrapModule(AppModule, {\n  providers: [{provide: LOCALE_ID, useValue: 'de' }]\n});\n```\n\nCheck the [official docs](https://angular.io/guide/i18n) for further information.\n\n#### Parsing and formatting input controls\n\nOne shortcomings of the native Date object is the lack of parsing support for specific locales.\nThe default data adapter expresses date and time for inputs in `ISO 8601`. e.g. `2019-08-08` or `18:11`\n\nng-vcl provides parsing support for the following locales: `en`, `en-us`, `en-gb`, `de`, `de-AT`, `de-CH`, `de-DE`, `de-LI` and `de-LU`\n\nOther locales can be added by providing `VCL_DATE_ADAPTER_PARSER` with a class implementing the `DateAdapterParser`\nCheck one of the existing [providers](https://github.com/ng-vcl/ng-vcl/tree/dev/lib/ng-vcl/src/dateadapter/parsers) for a full example.\n\n```ts\nimport { DateAdapterParser, DateAdapterBaseParseFormats, DateAdapterBaseDisplayFormats } from '@vcl/ng-vcl';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class DateAdapterParserFR implements DateAdapterParser {\n  supportedLocales = ['fr', 'fr-FR'];\n  ...\n}\n\n@NgModule({\n  providers: [\n    {\n      provide: VCL_DATE_ADAPTER_PARSER,\n      useClass: DateAdapterParserFR,\n      multi: true\n    },\n  ],\n})\nexport class MyApp {}\n```\n\n### Weekday offset\n\nThe default first day of the week is Sunday.\nAdd the following provider for a weekday offset.\n\n```ts\nimport { VCL_DATE_ADAPTER_WEEKDAY_OFFSET } from '@vcl/ng-vcl';\n\n@NgModule({\n  providers: [\n    // Calendar week starts on Monday\n    { provide: VCL_DATE_ADAPTER_WEEKDAY_OFFSET, useValue: 1 }\n  ],\n})\nexport class MyApp {}\n```\n\n### Custom date adapter\n\nA custom adapter must extend from `DateAdapterBase` and implement the abstract methods.\n\n```ts\nexport class MyDateAdapter extends DateAdapterBase<MyDate> {\n\n  constructor(\n    @Inject(VCL_DATE_ADAPTER_WEEKDAY_OFFSET)\n    private weekDayOffset: number,\n    @Optional()\n    @Inject(LOCALE_ID)\n    private locale?: string,\n  ) {\n    super();\n  }\n\n  // Abstract class implementation\n  isDate(date: any): date is Date {\n    ...\n  }\n  ...\n}\n```\n\n```ts\nimport { DateAdapterBase } from '@vcl/ng-vcl';\n\n@NgModule({\n  providers: [\n    MyDateAdapter\n    { provide: DateAdapterBase, useExisting: MyDateAdapter },\n  ],\n})\nexport class MyApp {}\n```\n"}}}}let i=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[a.ez,s.l,o.V4c,o.Byc,r.Bz.forChild([{path:"",component:s.z,data:{demo:d}}])]]}),e})()}}]);