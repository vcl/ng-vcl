/*
Wrapping behavior

To allow breaking words of textual cell content apart, use the modifier vclBreakWords. This works best in combination with the fixed layout mode.
*/

import { Directive, ElementRef, Renderer2, AfterContentInit, SimpleChanges, Input, OnChanges } from '@angular/core';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[break-words]',
})
export class BreakingWordsDirective implements OnChanges {

  @Input('break-words') breakWords: boolean | '';
  tableService: TableService;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.breakWords) {
      this.breakWords = this.tableService.ClassToggle('vclBreakWords', this.breakWords, '');
    }
  }
}


