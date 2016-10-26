"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var adv_http_service_1 = require('./adv-http.service');
var AdvHttpModule = (function () {
    function AdvHttpModule() {
    }
    AdvHttpModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [http_1.HttpModule],
                    providers: [
                        adv_http_service_1.AdvHttp,
                        {
                            provide: adv_http_service_1.ErrorHandlerService,
                            useClass: adv_http_service_1.ErrorHandlerService
                        },
                        {
                            provide: adv_http_service_1.AdvHttp,
                            useFactory: function (config, errorHandler, backend, defaultOptions) {
                                return new adv_http_service_1.AdvHttp(config, errorHandler, backend, defaultOptions);
                            },
                            deps: [adv_http_service_1.ADV_HTTP_CONFIG, adv_http_service_1.ErrorHandlerService, http_1.XHRBackend, http_1.RequestOptions]
                        },
                        {
                            provide: adv_http_service_1.ADV_HTTP_CONFIG,
                            useValue: {}
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    AdvHttpModule.ctorParameters = [];
    return AdvHttpModule;
}());
exports.AdvHttpModule = AdvHttpModule;
