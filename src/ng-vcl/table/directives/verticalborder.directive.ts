/*
Borders style

By default, only horizontal borders are shown. For vertical borders, use the vclVerticalBorder modifier.
*/

import { Directive, ElementRef, Renderer2, AfterContentInit, SimpleChanges, Input } from '@angular/core';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[vertical-border]',
})
export class VerticalBorderDirective {

  @Input('vertical-border') border: boolean | '';
  tableService: TableService;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.border) {
      this.border = this.tableService.ClassToggle('vclVerticalBorder', this.border, 'table');
    }
  }
}


