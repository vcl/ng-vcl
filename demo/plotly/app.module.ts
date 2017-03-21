
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VCLPlotlyModule } from '@ng-vcl/plotly';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    VCLPlotlyModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
