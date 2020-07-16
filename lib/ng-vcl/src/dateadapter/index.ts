import { NgModule } from '@angular/core';
import { VCL_DATE_ADAPTER_WEEKDAY_OFFSET, VCLDateAdapter } from './dateadapter';
import { VCLNativeDateAdapter } from './native-dateadapter';
import { VCL_NATIVE_DATE_ADAPTER_PARSER, VCLNativeDateAdapterParser, NativeDateAdapterParserDE, NativeDateAdapterParserEN, NativeDateAdapterParserENGB } from './parsers/index';
import { VCLDateAdapterDisplayFormats, VCLDateRange, VCLDateAdapterParseFormats } from './interfaces';

export {
  VCLDateAdapter,
  VCLNativeDateAdapter,
  VCLNativeDateAdapterParser,
  VCL_NATIVE_DATE_ADAPTER_PARSER,
  VCL_DATE_ADAPTER_WEEKDAY_OFFSET,
  VCLDateAdapterDisplayFormats,
  VCLDateAdapterParseFormats,
  VCLDateRange,
  NativeDateAdapterParserDE,
  NativeDateAdapterParserEN,
  NativeDateAdapterParserENGB
};

@NgModule({
  providers: [
    {
      provide: VCL_DATE_ADAPTER_WEEKDAY_OFFSET,
      useValue: 0
    },
    {
      provide: VCLDateAdapter,
      useClass: VCLNativeDateAdapter
    }
  ],
})
export class VCLDateAdapterModule { }
