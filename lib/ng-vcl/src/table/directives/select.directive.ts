/*
Row and cell selection

Individual cells and thus rows can be visually selected using the vclSelected class.
*/

import {
  Directive, Input, ElementRef, Renderer2,
  SimpleChanges, OnChanges
} from '@angular/core';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[selected]'
})
export class SelectDirective implements OnChanges {

  @Input('selected') selected: boolean | '';
  tableService: TableService;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selected) {
      this.selected = this.tableService.ClassToggle('vclSelected', this.selected, 'tr');
    }
  }
}

