(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core', './l10n-loader.service', './l10n-parser.service', './l10n.service', './l10n.pipe', './l10n-loader.service', './l10n-parser.service', './l10n.service'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var l10n_loader_service_1 = require('./l10n-loader.service');
    var l10n_parser_service_1 = require('./l10n-parser.service');
    var l10n_service_1 = require('./l10n.service');
    var l10n_pipe_1 = require('./l10n.pipe');
    var l10n_loader_service_2 = require('./l10n-loader.service');
    exports.L10nNoopLoaderService = l10n_loader_service_2.L10nNoopLoaderService;
    exports.L10nStaticLoaderService = l10n_loader_service_2.L10nStaticLoaderService;
    var l10n_parser_service_2 = require('./l10n-parser.service');
    exports.L10nFormatParserService = l10n_parser_service_2.L10nFormatParserService;
    var l10n_service_2 = require('./l10n.service');
    exports.L10nService = l10n_service_2.L10nService;
    var L10nModule = (function () {
        function L10nModule() {
        }
        L10nModule.forRoot = function (config) {
            return {
                ngModule: L10nModule,
                providers: [
                    l10n_service_1.L10nService,
                    {
                        provide: l10n_service_1.L10N_CONFIG,
                        useValue: config.config || {}
                    },
                    {
                        provide: l10n_loader_service_1.L10nLoaderService,
                        useClass: config.loader
                    }, {
                        provide: l10n_loader_service_1.L10N_LOADER_CONFIG,
                        useValue: config.loaderConfig || {}
                    }, {
                        provide: l10n_parser_service_1.L10nParserService,
                        useClass: config.parser || l10n_parser_service_1.L10nFormatParserService
                    }
                ]
            };
        };
        L10nModule.decorators = [
            { type: core_1.NgModule, args: [{
                        imports: [],
                        declarations: [
                            l10n_pipe_1.L10nPipe
                        ],
                        exports: [
                            l10n_pipe_1.L10nPipe
                        ],
                        providers: [
                            // TODO: Remove provider. Should work when marked optional in pipe
                            // not sure why it isn't
                            {
                                provide: l10n_service_1.L10N_CONFIG,
                                useValue: {}
                            },
                            l10n_service_1.L10nService,
                            {
                                provide: l10n_loader_service_1.L10nLoaderService,
                                useClass: l10n_loader_service_1.L10nNoopLoaderService
                            },
                            {
                                provide: l10n_loader_service_1.L10N_LOADER_CONFIG,
                                useValue: {}
                            },
                            {
                                provide: l10n_parser_service_1.L10nParserService,
                                useClass: l10n_parser_service_1.L10nFormatParserService
                            }
                        ]
                    },] },
        ];
        /** @nocollapse */
        L10nModule.ctorParameters = [];
        return L10nModule;
    }());
    exports.L10nModule = L10nModule;
});
