import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { VCLModule } from '../src/index';

import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { IconComponent } from "./components/icon/icon.component";
import { IcogramComponent } from "./components/icogram/icogram.component";
import { ButtonComponent } from './components/button/button.component';

import { routing, appRoutingProviders } from './app.routes';

@NgModule({
  providers:   [appRoutingProviders],
  imports:      [ 
    BrowserModule, 
    routing, 
    VCLModule 
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent,
    IconComponent, 
    IcogramComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 