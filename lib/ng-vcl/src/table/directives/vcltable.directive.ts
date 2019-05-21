/* tslint:disable */
/*
Enables VCL table behavior
*/

import { Directive, Input, ElementRef, Renderer2, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[vcl-table]',
  host: {
    '[class.vclTable]': 'true',
  }
})
export class VclTableDirective implements OnChanges {


  @Input()
  selectable: boolean | '';

  tableService: TableService;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.alt) {
      this.selectable = this.tableService.ClassToggle('vclTable', this.selectable, 'table');
    }
  }
}


