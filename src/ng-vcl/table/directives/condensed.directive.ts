/*
Padding style

If the default cell padding is too extensive, vclCondensed makes it more compact.
*/

import { Directive, ElementRef, Renderer2, AfterContentInit, SimpleChanges, Input } from '@angular/core';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[condensed]',
})
export class CondensedDirective {

  @Input('condensed') condensed: boolean | '';
  tableService: TableService;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.condensed) {
      this.condensed = this.tableService.ClassToggle('vclCondensed', this.condensed, 'table');
    }
  }
}


