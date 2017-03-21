
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { StoreModule } from '@ng-vcl/store';
import { VCLModule } from "@ng-vcl/ng-vcl";
import { AppComponent } from './app.component';
import { BooksEffects, BooksService } from './books.service';
import { BOOKS_REDUCERS } from './books.reducers';


@NgModule({
  providers: [ BooksService ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    VCLModule,
    StoreModule.forChild({
      reducers: [ BOOKS_REDUCERS ],
      effects: [ BooksEffects ]
    }),
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
