import { ModuleWithProviders } from '@angular/core';
import 'rxjs';
import { L10nLoaderService, L10nLoaderConfig } from './l10n-loader.service';
import { L10nParserService } from './l10n-parser.service';
import { L10nConfig } from './l10n.service';
export { L10nNoopLoaderService, L10nStaticLoaderService } from './l10n-loader.service';
export { L10nFormatParserService } from './l10n-parser.service';
export { L10nService } from './l10n.service';
export interface IL10nLoaderService {
    new (...args: any[]): L10nLoaderService;
}
export interface IL10nParserService {
    new (...args: any[]): L10nParserService;
}
export interface RootConfig {
    config?: L10nConfig;
    loader: IL10nLoaderService;
    loaderConfig: L10nLoaderConfig;
    parser?: any;
}
export declare class L10nModule {
    static forRoot(config: RootConfig): ModuleWithProviders;
}
