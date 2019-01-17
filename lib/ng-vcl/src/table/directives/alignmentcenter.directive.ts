/*
Text alignment

Left alignment is default, for centered text use class vclAlignCentered and for right aligned text vclAlignRight on tds.
*/

import { Directive, ElementRef, Renderer2, AfterContentInit, SimpleChanges, Input, OnChanges } from '@angular/core';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[align-center]',
})
export class AlignmentCenterDirective implements OnChanges {

  @Input('align-center') align: boolean | '';
  tableService: TableService;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.align) {
      this.align = this.tableService.ClassToggle('vclAlignCentered', this.align, 'td');
    }
  }
}


