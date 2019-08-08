import { NgModule } from '@angular/core';
import { VCL_DATE_ADAPTER_WEEKDAY_OFFSET, VCLDateAdapter } from './dateadapter';
import { VCLNativeDateAdapter } from './native-dateadapter';
import { VCL_NATIVE_DATE_ADAPTER_PARSER, VCLNativeDateAdapterParser, NativeDateAdapterParserDE, NativeDateAdapterParserEN, NativeDateAdapterParserENGB } from './parsers/index';
import { VCL_NATIVE_DATE_ADAPTER_DISPLAY_FORMATS_DEFAULT_PROVIDER, VCL_NATIVE_DATE_ADAPTER_DISPLAY_FORMATS } from './native-dateadapter-formats';
import { VCLDateAdapterDisplayFormats, VCLDateRange, VCLDateAdapterParseFormats } from './interfaces';

export {
  VCLDateAdapter,
  VCLNativeDateAdapter,
  VCLNativeDateAdapterParser,
  VCL_NATIVE_DATE_ADAPTER_PARSER,
  VCL_DATE_ADAPTER_WEEKDAY_OFFSET,
  VCL_NATIVE_DATE_ADAPTER_DISPLAY_FORMATS,
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
    VCL_NATIVE_DATE_ADAPTER_DISPLAY_FORMATS_DEFAULT_PROVIDER,
    {
      provide: VCLDateAdapter,
      useClass: VCLNativeDateAdapter
    }
  ],
})
export class VCLDateAdapterModule { }
