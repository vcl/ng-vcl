/*
Row and cell selectability

Rows can be styled to suggest their selectability (single or multiple) using the vclRowSelectability modifier which makes rows show a pointer cursor on hover.
*/

import { Directive, Input, ElementRef, Renderer2, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[selectable]',
})
export class SelectableDirective implements OnChanges {


  @Input('selectable') selectable: boolean | '';
  tableService: TableService;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.alt) {
      this.selectable = this.tableService.ClassToggle('vclRowSelectability', this.selectable, 'tr');
    }
  }
}


