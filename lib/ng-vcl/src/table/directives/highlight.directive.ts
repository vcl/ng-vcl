/* tslint:disable */
/*
Cell and column highlighting

Single cells and columns can be highlighted by using the
vclCellHighlight class on each tdin the respective column or on single cells only.
*/

import { Directive, ElementRef, Renderer2, AfterContentInit, SimpleChanges, Input, OnChanges } from '@angular/core';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[hightlight]',
})
export class HighlightDirective implements OnChanges {

  @Input()
  hightlight: boolean | '';

  tableService: TableService;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hightlight) {
      this.hightlight = this.tableService.ClassToggle('vclCellHighlight', this.hightlight, 'td');
    }
  }
}


