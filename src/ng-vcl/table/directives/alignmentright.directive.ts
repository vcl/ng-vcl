/*
Text alignment

Left alignment is default, for centered text use class vclAlignCentered and for right aligned text vclAlignRight on tds.
*/

import { Directive, ElementRef, Renderer2, AfterContentInit, SimpleChanges, Input } from '@angular/core';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[align-right]',
})
export class AlignmentRightDirective {

  @Input('align-right') align: boolean | '';
  tableService: TableService;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.align) {
      this.align = this.tableService.ClassToggle('vclAlignRight', this.align, 'td');
    }
  }
}


