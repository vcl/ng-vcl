import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf,
} from '@angular/core';
import {
  VCL_DATE_ADAPTER_WEEKDAY_OFFSET,
  DateAdapterBase,
} from './dateadapter-base';
import { DateAdapter } from './dateadapter';
import {
  VCL_DATE_ADAPTER_PARSER,
  DateAdapterParser,
  DateAdapterParserISO,
  DateAdapterParserDE,
  DateAdapterParserEN,
  DateAdapterParserENGB,
} from './parsers/index';
import {
  DateAdapterBaseDisplayFormats,
  VCLDateRange,
  DateAdapterBaseParseFormats,
} from './interfaces';

const VCLDateAdapter = DateAdapter;
const NativeDateAdapterParserDE = DateAdapterParserDE;
const NativeDateAdapterParserEN = DateAdapterParserEN;
const NativeDateAdapterParserENGB = DateAdapterParserENGB;
const NativeDateAdapterParserISO = DateAdapterParserISO;

export {
  DateAdapterBase,
  DateAdapter,
  DateAdapterParser,
  VCL_DATE_ADAPTER_PARSER,
  VCL_DATE_ADAPTER_WEEKDAY_OFFSET,
  DateAdapterBaseDisplayFormats,
  DateAdapterBaseParseFormats,
  VCLDateRange,
  DateAdapterParserDE,
  DateAdapterParserEN,
  DateAdapterParserENGB,
  // deprecated
  VCLDateAdapter,
  NativeDateAdapterParserDE,
  NativeDateAdapterParserEN,
  NativeDateAdapterParserENGB,
  NativeDateAdapterParserISO,
};

@NgModule({
  providers: [
    {
      provide: DateAdapter,
      useClass: DateAdapter,
    },
    {
      provide: DateAdapterBase,
      useExisting: DateAdapter,
    },
    {
      // `en`, `en-us`
      provide: VCL_DATE_ADAPTER_PARSER,
      useClass: DateAdapterParserEN,
      multi: true,
    },
    {
      // `en-gb
      provide: VCL_DATE_ADAPTER_PARSER,
      useClass: DateAdapterParserENGB,
      multi: true,
    },
    {
      // `de`, `de-AT`, `de-CH`, `de-DE`, `de-LI`, `de-LU`
      provide: VCL_DATE_ADAPTER_PARSER,
      useClass: DateAdapterParserDE,
      multi: true,
    },
  ],
})
export class VCLDateAdapterModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule?: VCLDateAdapterModule
  ) {
    if (parentModule) {
      throw new Error(
        'VCLDateAdapterModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(
    config: { weekDayOffset?: number } = {}
  ): ModuleWithProviders<VCLDateAdapterModule> {
    return {
      ngModule: VCLDateAdapterModule,
      providers: [
        {
          provide: VCL_DATE_ADAPTER_WEEKDAY_OFFSET,
          useValue: config.weekDayOffset ?? 0,
        },
      ],
    };
  }
}
