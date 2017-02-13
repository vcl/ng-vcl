import { DemoComponent } from './components/demo/demo.component';
import { RouterModule } from '@angular/router';
import { VCLModule } from '@ng-vcl/ng-vcl';
import { VCLJsonEditorModule } from '@ng-vcl/json-editor';
import { VCLJssFormModule } from '@ng-vcl/jss-form';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export interface Demo {
  name: string;
  route: string;
  category: string;
  module?: ModuleWithProviders;
  tabs?: {
    [key: string]: any
  };
}

export function createDemoModule(demo: Demo) {
  @NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      BrowserModule,
      VCLModule,
      VCLJsonEditorModule,
      VCLJssFormModule,
      RouterModule.forChild([{
        path: demo.route,
        component: DemoComponent,
        data: {
          label: demo.name,
          tabs: demo.tabs
        },
      }]),
    ],
    declarations: [
      Object.keys(demo.tabs || {}).map(key => demo.tabs[key]).filter(o => typeof o === 'function'),
    ]
  })
  class GeneratedDemoModule {
    static label = demo.name;
    static category = demo.category;
    static path = demo.route;
  };
  return GeneratedDemoModule;
}
