import { Type, NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { ADV_HTTP_CONFIG, ErrorHandlingStrategy, ErrorHandlerService, AdvHttp } from './adv-http.service';

export * from './adv-http.service';

export declare interface AdvHttpConfig {
  errorHandlerService?: Type<any>;
  defaultErrorHandlingStrategy: ErrorHandlingStrategy;
}

@NgModule({
  imports: [HttpModule],
  providers: [
    {
      provide: ADV_HTTP_CONFIG,
      useValue: {}
    },
    AdvHttp,
    {
      provide: ErrorHandlerService,
      useClass: ErrorHandlerService
    },
    {
      provide: AdvHttp,
                useClass: AdvHttp,

      // useFactory: (config: any, errorHandler: ErrorHandlerService, backend: XHRBackend, defaultOptions: RequestOptions) => {
      //   return new AdvHttp(config, errorHandler, backend, defaultOptions);
      // },
      deps: [ ADV_HTTP_CONFIG, ErrorHandlerService, XHRBackend, RequestOptions]
    },
    {
      provide: ADV_HTTP_CONFIG,
      useValue: {}
    }
  ]
})
export class AdvHttpModule {
  static forRoot(config: AdvHttpConfig): ModuleWithProviders {
    return {
      ngModule: AdvHttpModule,
      providers: [
        {
          provide: ADV_HTTP_CONFIG,
          useValue: config
        },
        AdvHttp,
        {
          provide: ErrorHandlerService,
          useClass: config.errorHandlerService || ErrorHandlerService
        },
        {
          provide: AdvHttp,
          useClass: AdvHttp,

          // useFactory: (config: any, errorHandler: ErrorHandlerService, backend: XHRBackend, defaultOptions: RequestOptions) => {
          //   return new AdvHttp(config, errorHandler, backend, defaultOptions);
          // },
          deps: [ ADV_HTTP_CONFIG, ErrorHandlerService, XHRBackend, RequestOptions]
        },
      ]
    };
  }
}
