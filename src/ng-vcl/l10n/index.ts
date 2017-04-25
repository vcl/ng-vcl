import { NgModule, ModuleWithProviders } from '@angular/core';
import { L10nLoaderService, L10nNoopLoaderService, L10nStaticLoaderService, L10nAsyncLoaderService, L10N_LOADER_CONFIG } from './l10n-loader.service';
import { L10nParserService, L10nFormatParserService } from './l10n-parser.service';
import { L10nService, L10N_CONFIG, L10nConfig } from './l10n.service';
import { L10nPipe } from './l10n.pipe';

// export {L10nNoopLoaderService, L10nStaticLoaderService, L10nFormatParserService, L10nService };
export {L10nNoopLoaderService, L10nStaticLoaderService, L10nAsyncLoaderService, L10nFormatParserService, L10nService };

export declare interface IL10nLoaderService {
  new (...args): L10nLoaderService;
}

export declare interface IL10nParserService {
  new (...args): L10nParserService;
}

export declare interface RootConfig {
  config?: L10nConfig;
  loader: IL10nLoaderService;
  loaderConfig: any;
  parser?: any;
}

@NgModule({
  imports: [],
  declarations: [ L10nPipe ],
  exports: [ L10nPipe ]
})
export class L10nModule {
  static forRoot(config: RootConfig): ModuleWithProviders {
    return {
      ngModule: L10nModule,
      providers: [
        L10nService,
        {
          provide: L10N_CONFIG,
          useValue: config.config || {}
        },
        {
          provide: L10nLoaderService,
          useClass: config.loader
        }, {
          provide: L10N_LOADER_CONFIG,
          useValue: config.loaderConfig
        }, {
          provide: L10nParserService,
          useClass: config.parser || L10nFormatParserService
        }
      ]
    };
  }
}

