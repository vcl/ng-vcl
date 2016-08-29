var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import 'rxjs';
import { L10nLoaderService, L10nNoopLoaderService, L10N_LOADER_CONFIG } from './l10n-loader.service';
import { L10nParserService, L10nFormatParserService } from './l10n-parser.service';
import { L10nService, L10N_CONFIG } from './l10n.service';
import { L10nPipe } from './l10n.pipe';
export { L10nNoopLoaderService, L10nStaticLoaderService } from './l10n-loader.service';
export { L10nFormatParserService } from './l10n-parser.service';
export { L10nService } from './l10n.service';
export var L10nModule = (function () {
    function L10nModule() {
    }
    L10nModule.forRoot = function (config) {
        return {
            ngModule: L10nModule,
            providers: [
                L10nService,
                {
                    provide: L10N_CONFIG,
                    useValue: config.config || {}
                },
                L10nLoaderService,
                {
                    provide: L10nLoaderService,
                    useClass: config.loader
                }, {
                    provide: L10N_LOADER_CONFIG,
                    useValue: config.loaderConfig || {}
                }, {
                    provide: L10nParserService,
                    useClass: config.parser || L10nFormatParserService
                }
            ]
        };
    };
    L10nModule = __decorate([
        NgModule({
            imports: [],
            declarations: [
                L10nPipe
            ],
            exports: [
                L10nPipe
            ],
            providers: [
                // TODO: Remove provider. Should work when marked optional in pipe
                // not sure why it isn't
                {
                    provide: L10N_CONFIG,
                    useValue: {}
                },
                L10nService,
                {
                    provide: L10nLoaderService,
                    useClass: L10nNoopLoaderService
                },
                {
                    provide: L10N_LOADER_CONFIG,
                    useValue: {}
                },
                {
                    provide: L10nParserService,
                    useClass: L10nFormatParserService
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], L10nModule);
    return L10nModule;
}());
