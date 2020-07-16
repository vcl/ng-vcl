import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  templateUrl: 'demo.component.html'
})
export class DemoComponent implements OnInit {

  title: string;
  tabs: {name: string, type: string, content: any }[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const data = this.activatedRoute.snapshot.data.demo();
    if (data) {
      this.title = data.label;
      if (data.tabs) {
        this.tabs = Object.keys(data.tabs).reduce((aggr, key) => {
          let type;
          let content;
          if (typeof data.tabs[key] === 'object' && data.tabs[key]) {
            type = data.tabs[key].type;
            if (typeof data.tabs[key].content === 'object' && data.tabs[key].content && data.tabs[key].content.default) {
              content = data.tabs[key].content.default;
            } else {
              content = data.tabs[key].content;
            }
          } else if (typeof data.tabs[key] === 'function') {
            type = 'component';
            content = new ComponentPortal(data.tabs[key]);
          }

          if (content && type) {
            return [
              ...aggr,
              {
                name: key,
                content,
                type
              }
            ]
          } else {
            return aggr;
          }
      }, []);
      } else {
        this.tabs = [];
      }
    } else {
      this.title = 'ng-vcl';
      this.tabs = [];
    }
  }
}
