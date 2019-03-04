import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements';
import { VCLFlipSwitchModule, FlipSwitchComponent } from './index';

@NgModule({
  imports: [ BrowserModule, VCLFlipSwitchModule],
  entryComponents: [ FlipSwitchComponent ]
})
export class WSModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const elm = createCustomElement(FlipSwitchComponent, { injector: this.injector });
    customElements.define('vcl-flip-switch', elm);
  }
}

platformBrowserDynamic().bootstrapModule(WSModule)
  .catch(err => console.error(err));
