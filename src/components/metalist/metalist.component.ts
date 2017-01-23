import {
  Component, Input, Output,
  EventEmitter, ContentChild, TemplateRef, OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { includes } from '../../utils';

@Component({
  selector: 'vcl-metalist',
  templateUrl: 'metalist.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetalistComponent implements OnInit {

  @Input() items: any[];
  @Input() meta: any;
  @Input() minSelectableItems: number = 1;
  @Input() maxSelectableItems: number = 1;
  @Output('select') select = new EventEmitter<any[]>(); // returns all items


  constructor() {

  }

  next() {
    // console.log('next');
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
    // console.log('prev');
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


  metaFromItem(item: any) {
    const i = this.items.indexOf(item);
    return this.meta[i];
  }


  selectItem(item: any) {
    // console.log('selectItem');
    if (!includes(this.items, item)) return false;

    let itemIndex = this.items.indexOf(item);


    // maxSelectableItems === 1 -> deselect old item
    if (this.maxSelectableItems === 1) {
      // TODO is metaItems even used?
      let metaItems = this.meta.filter(function(obj) {
        return obj && obj.selected === true;
      });
      for (let i = 0; i < metaItems.length; i++) {
        metaItems[i].selected = false;
      }

    }

    const metaItem = this.metaFromItem(item);
    if (
      this.getSelectedItems().length < this.maxSelectableItems &&
      metaItem
    ) metaItem.selected = true;

    this.select.emit(this.getSelectedItems());
    return true;
  }

  deSelectItem(item: any) {
    // console.log('deSelectItem');
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
    // console.log('getSelectedItems');
    const result = this.meta
      .filter(obj => obj.selected)
      .map(metaItem => this.items[this.meta.indexOf(metaItem)]);
    return result;
  }

  setSelectedItems() {

  }

  ngAfterContentInit() { }

  getMarkedItemIndex(): number {
    // console.log('getMarkedItemIndex');
    let meta = this.getMarkedItemMeta();
    if (meta) {
      return this.meta.indexOf(meta);
    }
    return -1;
  }

  getMarkedItemMeta(): any {
    // console.log('getMarkedItemMeta');
    return this.meta.filter(obj => obj.marked)[0];
  }

  setMarkedIndex(index: number) {
    // console.log('setMarkedIndex');
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
    // console.log('setMarkedItem');
    let markedIndex = this.items.indexOf(item);
    if (markedIndex !== -1) {
      this.setMarkedIndex(markedIndex);
    }
  }


  @ContentChild(TemplateRef) template1: any;

  getMeta(item) {
    // console.log('getMeta');
    // console.dir(this.items);
    let key = this.items.indexOf(item);
    if (!this.meta[key]) {
      this.meta[key] = {};
    }
    // console.dir(JSON.stringify(this.meta[key]));
    return this.meta[key];
  }
}
