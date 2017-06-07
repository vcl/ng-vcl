/*
Border configuration

The cell borders are removed with vclNoBorder. The border style can be changed from solid to dotted by using the vclDottedBorder modifier.
*/

import { Directive, ElementRef, Renderer2, AfterContentInit, SimpleChanges, Input } from '@angular/core';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[dottedborder]',
})
export class DottedBorderDirective {

  @Input('dottedborder') dottedborder: boolean | '';
  tableService: TableService;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dottedborder) {
      this.dottedborder = this.tableService.ClassToggle('vclDottedBorder', this.dottedborder, 'table');
    }
  }
}


