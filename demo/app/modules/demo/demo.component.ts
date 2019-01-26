import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class DemoComponent implements OnInit {

  title: string;
  tabs: {name: string, content: string}[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const data = this.activatedRoute.snapshot.data['demo']();
    if (data) {
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
  }
}
