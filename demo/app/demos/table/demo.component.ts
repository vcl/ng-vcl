import { Component } from '@angular/core';

@Component({
  templateUrl: './demo.component.html',
})
export class TableDemoComponent {
  isSelected: boolean = true;
  defaultColumnSort: -1 | 0 | 1;
  readMore: boolean = true;

  OnSortingDefaultColumn(sort: -1 | 0 | 1): void {
    this.defaultColumnSort = sort;
  }


  get defaultColumnSortName(): string {
    switch (this.defaultColumnSort) {
      case -1: {
        return 'desc';
      }
      case 1: {
        return 'asc';
      }
      default: {
        return 'none';
      }
    }
  }



}
