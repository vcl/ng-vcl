import { Component, Input } from '@angular/core';
import * as marked from 'marked';

marked.setOptions({
  breaks: true
});

@Component({
  template: '<div class="markdown-body" [innerHTML]="marked"></div>',
  styleUrls: ['markdown.component.css'],
  selector: 'markdown',
})
export class MarkdownComponent {
  @Input()
  markdown: string;
  get marked() {
    return  marked(this.markdown);
  }
}
