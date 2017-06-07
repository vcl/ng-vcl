/*
Layout

The auto layout mode is used by default. For tables with toolbars however, the vclFixed class must be used to enable the fixed table layout mode.
*/

import { Directive, ElementRef, Renderer2, AfterContentInit, SimpleChanges, Input } from '@angular/core';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[fixed]',
})
export class LayoutDirective {

  @Input('fixed') fixed: boolean | '';
  tableService: TableService;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fixed) {
      this.fixed = this.tableService.ClassToggle('vclFixed', this.fixed, 'table');
    }
  }
}


