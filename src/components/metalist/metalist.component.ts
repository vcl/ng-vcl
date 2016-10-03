import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef, OnInit } from '@angular/core';

/**
*/

@Component({
  selector: 'vcl-metalist',
  templateUrl: 'metalist.component.html'
})
export class MetalistComponent implements OnInit {

  @Output()
  select = new EventEmitter<any[]>();

  @Input() items: any[];

  @Input() meta: any;

  @Input() minSelectableItems: number = 1;

  @Input() maxSelectableItems: number = 1;

  @Output()
  maxItemsSelected: boolean = false;

  next() {
    let oldIndex = this.getMarkedItemIndex();
    if (oldIndex !== -1) {
      let newIndex = oldIndex + 1;
      if (this.items.length > newIndex) {
        this.setMarkedIndex(newIndex);
      }
    } else {
      this.setMarkedIndex(0);
    }
  }

  prev() {
    let oldIndex = this.getMarkedItemIndex();
    if (oldIndex !== -1) {
      let newIndex = oldIndex - 1;
      if (newIndex >= 0) {
        this.setMarkedIndex(newIndex);
      }
    }
  }

  ngOnInit() {
    if (!this.meta) {
      // create meta if not present
      this.meta = [];
    }
  }

  selectItem(item: any) {
    let itemIndex = this.items.indexOf(item);
    if (itemIndex === -1) {
      return;
    }

    // maxSelectableItems === 1 -> deselect old item
    if (this.maxSelectableItems === 1) {
      let metaItems = this.meta.filter(function(obj) {
        return obj && obj.selected === true;
      });
      for (let i = 0; i < metaItems.length; i++ ) {
        metaItems[i].selected = false;
      }
    }
    if (this.getSelectedItems().length < this.maxSelectableItems && this.meta[itemIndex]) {
      this.meta[itemIndex].selected = true;
    }
    this.select.emit(this.getSelectedItems());
  }

  deSelectItem(item: any) {
    let itemIndex = this.items.indexOf(item);
    if (itemIndex === -1) {
      return;
    }
    if (this.meta[itemIndex]) {
      this.meta[itemIndex].selected = false;
    }
    this.select.emit(this.getSelectedItems());
  }

  getSelectedItems() {
    let metaItems = this.meta.filter(function(obj) {
      return obj && obj.selected === true;
    });
    let result = [];
    for (let i = 0; i < metaItems.length; i++) {
      result.push(this.items[this.meta.indexOf(metaItems[i])]);
    }
    return result;
  }

  setSelectedItems() {

  }

  getMarkedItemIndex(): number {
    let meta = this.getMarkedItemMeta();
    if (meta) {
      return this.meta.indexOf(meta);
    }
    return -1;
  }

  getMarkedItemMeta(): any {
    return this.meta.filter(function(obj) {
      return obj && obj.marked === true;
    })[0];
  }

  setMarkedIndex(index: number) {
    // unset old item
    let oldItem = this.getMarkedItemMeta();
    if (oldItem) {
      oldItem.marked = false;
    }
    let meta = this.meta[index];
    if (meta) {
      meta.marked = true;
    }
  }

  setMarkedItem(item: any) {
    let markedIndex = this.items.indexOf(item);
    if (markedIndex !== -1) {
      this.setMarkedIndex(markedIndex);
    }
  }


  @ContentChild(TemplateRef)
  template: any;

  getMeta(item) {
    let key = this.items.indexOf(item);
    if (!this.meta[key]) {
      this.meta[key] = {};
    }
    return this.meta[key];
  }
}
