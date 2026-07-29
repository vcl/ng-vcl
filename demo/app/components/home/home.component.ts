import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import README from '!raw-loader!../../../../README.md';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  templateUrl: 'home.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [MarkdownComponent],
})
export class HomeComponent {
  constructor(private sanitizer: DomSanitizer) {}

  get readme() {
    return README;
  }
}
