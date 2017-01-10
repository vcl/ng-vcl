import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, Directive, Input, ComponentFactoryResolver, ViewContainerRef, Type, ComponentRef } from '@angular/core';
import { ComponentWormhole } from './../../../src/index';
const style = require("!raw-loader!../markdown/markdown.component.css");

@Component({
  templateUrl: 'demo.component.html',
  styles: [style]
})
export class DemoComponent {

  title: string;
  tabs: {name: string, content: string}[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe( (data: any) => {
      if (data && data.label ) {
        this.title = data.label;
        if (data.tabs) {
          this.tabs = Object.keys(data.tabs).map(key => {

            let type;
            let content;
            if (typeof data.tabs[key] === 'object' && data.tabs[key]) {
              type = data.tabs[key].type;
              if (type === 'pre' || type === 'html' || type === 'md') {
                content = this.sanitizer.bypassSecurityTrustHtml(data.tabs[key].content);
              } else {
                content = data.tabs[key].content;
              }
            } else if (typeof data.tabs[key] === 'string' && key.endsWith('.md')) {
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
