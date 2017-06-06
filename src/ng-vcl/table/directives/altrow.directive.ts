/*
Alternating row color

Optionally an alternating row color can be defined by using the modifier vclAltRowColor.
*/

import { Directive, ElementRef, Renderer2, Input, SimpleChanges, OnChanges } from '@angular/core';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[altrow]',
})
export class AltRowColorDirective implements OnChanges {
  @Input('altrow') alt: boolean | '';
  isRow: boolean;
  tableService: TableService;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.alt) {
      this.alt = this.tableService.ClassToggle('vclAltRowColor', this.alt, 'table');
    }
  }
}
