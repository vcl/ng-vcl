import {NgModule} from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app.module';
// import { AppModuleNgFactory } from '../tmp/demo/app.module.ngfactory';

platformBrowserDynamic().bootstrapModule(AppModule);
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
