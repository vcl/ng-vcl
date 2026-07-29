import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ComponentPortal, CdkPortalOutlet } from '@angular/cdk/portal';
import { NgIf, NgFor } from '@angular/common';
import { VCLTabNavComponent } from '../../../../lib/ng-vcl/src/tab-nav/tab-nav.component';
import { VCLTabComponent } from '../../../../lib/ng-vcl/src/tab-nav/tab.component';
import { VCLLabelDirective } from '../../../../lib/ng-vcl/src/core/label';
import { MarkdownComponent, LanguagePipe } from 'ngx-markdown';

@Component({
  templateUrl: 'demo.component.html',
  styleUrls: [`demo.component.scss`],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NgIf,
    VCLTabNavComponent,
    NgFor,
    VCLTabComponent,
    VCLLabelDirective,
    CdkPortalOutlet,
    MarkdownComponent,
    LanguagePipe,
  ],
})
export class DemoComponent implements OnInit {
  title: string;
  tabs: { name: string; type: string; content: any }[] = [];

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
            if (
              typeof data.tabs[key].content === 'object' &&
              data.tabs[key].content &&
              data.tabs[key].content.default
            ) {
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
                type,
              },
            ];
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
