import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import README from '../../../../README.md';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent  {
  constructor(private sanitizer: DomSanitizer) { }

  get readme() {
    return this.sanitizer.bypassSecurityTrustHtml(README);
  }
}
