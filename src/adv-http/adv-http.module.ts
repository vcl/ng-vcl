import { NgModule } from '@angular/core';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { AdvHttp, ErrorHandlerService, ADV_HTTP_CONFIG } from './adv-http.service';

export { AdvHttp, ErrorHandlerService, ADV_HTTP_CONFIG };

@NgModule({
  imports: [HttpModule],
  providers: [
    AdvHttp,
    {
      provide: ErrorHandlerService,
      useClass: ErrorHandlerService
    },
    {
      provide: AdvHttp,
      useFactory: (config: any, errorHandler: ErrorHandlerService, backend: XHRBackend, defaultOptions: RequestOptions) => {
        return new AdvHttp(config, errorHandler, backend, defaultOptions);
      },
      deps: [ ADV_HTTP_CONFIG, ErrorHandlerService, XHRBackend, RequestOptions]
    },
    {
      provide: ADV_HTTP_CONFIG,
      useValue: {}
    }
  ]
})
export class AdvHttpModule { }
