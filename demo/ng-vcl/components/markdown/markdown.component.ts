import { Component, Input } from '@angular/core';
import * as marked from 'marked';
const style = require("!raw-loader!./markdown.component.css");

marked.setOptions({
  breaks: true
});

@Component({
  template: '<div class="markdown-body" [innerHTML]="marked"></div>',
  styles: [style],
  selector: 'markdown',
})
export class MarkdownComponent {
  @Input()
  markdown: string;
  get marked() {
    return  marked(this.markdown);
  }
}
