/*
Truncation

In conjunction with the fixed layout mode, the modifier vclNoWrap can be used to truncate all cell content which would
span more than one line and show an ellipsis to indicate truncated content instead.
Individual cells can also be truncated using the general vclNoWrap and vclOverflowEllipsis modifiers from the utils module.
*/

import {
  Directive, Input, ElementRef, Renderer2,
  SimpleChanges, OnChanges
} from '@angular/core';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[overflow-ellipsis]'
})
export class OverflowEllipsisDirective implements OnChanges {

  @Input('overflow-ellipsis') ellipsis: boolean | '';
  tableService: TableService;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.ellipsis) {
      this.ellipsis = this.tableService.ClassToggle('vclOverflowEllipsis', this.ellipsis, 'td');
    }
  }
}

