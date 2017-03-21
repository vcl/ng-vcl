
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VCLJsonEditorModule } from '@ng-vcl/json-editor';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    VCLJsonEditorModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
