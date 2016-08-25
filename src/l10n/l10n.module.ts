import { NgModule, ModuleWithProviders } from '@angular/core';
import 'rxjs';

import { L10nLoaderService, L10nNoopLoaderService, L10nStaticLoaderService, L10nLoaderConfig, L10N_LOADER_CONFIG } from './l10n-loader.service';
import { L10nParserService, L10nFormatParserService } from './l10n-parser.service';
import { L10nService, L10N_CONFIG, L10nConfig } from './l10n.service';
import { L10nPipe } from './l10n.pipe';

export {L10nNoopLoaderService, L10nStaticLoaderService} from './l10n-loader.service';
export {L10nFormatParserService} from './l10n-parser.service';
export {L10nService} from './l10n.service';

export declare interface IL10nLoaderService {
  new (...args): L10nLoaderService;
}

export declare interface IL10nParserService {
  new (...args): L10nParserService;
}

export declare interface rootConfig {
  config?: L10nConfig
  loader: IL10nLoaderService,
  loaderConfig: L10nLoaderConfig
  parser?: any
}

@NgModule({
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
    L10nService,
    {
      provide: L10nLoaderService,
      useClass: L10nNoopLoaderService
    },
    {
      provide: L10nParserService,
      useClass: L10nFormatParserService
    }
  ]
})
export class L10nModule {
  static forRoot(config: rootConfig): ModuleWithProviders {
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
  }
}

