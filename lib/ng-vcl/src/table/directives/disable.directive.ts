/*
Disabled rows

Rows can be visually disabled with the vclDisabled modifier.
*/

import {
  Directive, Input, ElementRef, Renderer2,
  SimpleChanges, OnChanges
} from '@angular/core';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[disabled]'
})
export class DisableDirective implements OnChanges {
  @Input()
  disabled: boolean | '';

  tableService: TableService;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.disabled) {
      this.disabled = this.tableService.ClassToggle('vclDisabled', this.disabled, 'tr');
    }
  }
}
