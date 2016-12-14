import { ActivatedRoute } from '@angular/router';
import { Component, Directive, Input, ComponentFactoryResolver, ViewContainerRef, Type, ComponentRef } from '@angular/core';
import { ComponentWormhole } from './../../../src/index';

@Component({
  templateUrl: 'demo.component.html'
})
export class DemoComponent {

  title: string;
  tabs: {name: string, content: string}[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe( (data: any) => {
      if (data && data.label ) {
        this.title = data.label;
        if (data.tabs) {
          this.tabs = Object.keys(data.tabs).map(key => {

            let type;
            let content;
            if (typeof data.tabs[key] === 'string' && key.endsWith('.md')) {
              type = 'markdown';
              content = data.tabs[key];
            } else if (typeof data.tabs[key] === 'string') {
              type = 'text';
              content = data.tabs[key];
            } else if (typeof data.tabs[key] === 'function') {
              type = 'component';
              content = new ComponentWormhole(data.tabs[key]);
            }

            return {
              name: key,
              content,
              type
            };
        });
        } else {
          this.tabs = [];
        }
      } else {
        this.title = null;
        this.tabs = [];
      }
    });
  }
}
