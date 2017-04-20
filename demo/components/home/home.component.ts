import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const README = require('raw-loader!highlight-loader?!markdown-loader?breaks=true!@ng-vcl/ng-vcl/README.md');

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent  {
  constructor(private sanitizer: DomSanitizer) { }

  get readme() {
    return this.sanitizer.bypassSecurityTrustHtml(README);
  }
}
