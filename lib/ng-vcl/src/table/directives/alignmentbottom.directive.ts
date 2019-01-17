/*
Vertical alignment

Top alignment is default, for vertically centered content use class
vclVAlignMiddle and for bottom aligned content vclVAlignBottom on a table or tds.
*/

import { Directive, ElementRef, Renderer2, SimpleChanges, Input, OnChanges } from '@angular/core';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[align-bottom]',
})
export class AlignmentbottomDirective implements OnChanges {

  @Input('align-bottom') align: boolean | '';
  tableService: TableService;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.align) {
      this.align = this.tableService.ClassToggle('vclVAlignBottom', this.align, '');
    }
  }
}


