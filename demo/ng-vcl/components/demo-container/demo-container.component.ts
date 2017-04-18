import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, Directive, Input, ComponentFactoryResolver, ViewContainerRef, Type, ComponentRef } from '@angular/core';
import { ComponentWormhole } from '@ng-vcl/ng-vcl';
const style = require("!raw-loader!../markdown/markdown.component.css");

@Component({
  templateUrl: 'demo-container.component.html',
  styleUrls: ['../markdown/markdown.component.css'],
})
export class DemoContainerComponent {

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
              content = data.tabs[key];
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
        this.title = 'ng-vcl';
        this.tabs = [];
      }
    });
  }
}
