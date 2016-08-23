import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { VCLModule } from '../src/index';
import { L10nModule, L10nStaticLoaderService } from '../src/l10n/l10n.module';

import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { IconComponent } from "./components/icon/icon.component";
import { IcogramComponent } from "./components/icogram/icogram.component";
import { ButtonComponent } from './components/button/button.component';
import { LayerComponent } from './components/layer/layer.component';
import { TetherComponent } from './components/tether/tether.component';

import { routing, appRoutingProviders } from './app.routes';

@NgModule({
  providers: [
    appRoutingProviders
  ],
  imports: [
    BrowserModule,
    routing,
    VCLModule,
    L10nModule.forRoot({
      config: {
        // locale: 'de-de'
      },
      loader: L10nStaticLoaderService,
      loaderConfig: {
      }
    })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    IconComponent,
    IcogramComponent,
    ButtonComponent,
    LayerComponent,
    TetherComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}

