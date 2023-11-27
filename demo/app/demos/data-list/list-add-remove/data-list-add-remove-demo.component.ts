import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { DataListItemDirective, LayerRef, LayerService } from '@vcl/ng-vcl';
import { Subscription } from 'rxjs';
import { CreateCountryComponent } from './create-country.component';
import { data, Kitten } from './data';

@Component({
  selector: 'data-list-add-remove-demo',
  templateUrl: './data-list-add-remove-demo.component.html',
  styleUrls: ['./data-list-add-remove-demo.component.scss'],
})
export class DataListAddRemoveDemo implements OnDestroy {
  createCountryLayer: LayerRef;
  countrySub: Subscription;

  modeValue = 'single';
  selectedValues = [];
  kittensList: Kitten[] = data;

  @ViewChildren(DataListItemDirective)
  dataListItems!: QueryList<DataListItemDirective>;

  constructor(private layerService: LayerService) {
    this.createCountryLayer = this.layerService.create(CreateCountryComponent, {
      closeOnBackdropClick: false,
      closeOnEscape: false,
    });
  }

  ngOnDestroy(): void {
    if (this.countrySub) {
      this.countrySub.unsubscribe();
    }
  }

  onModeChange(val: string) {
    this.modeValue = val;
    this.selectedValues = [];
    this.dataListItems.map(item => (item.selected = false));
    return;
  }

  onAddCountry() {
    this.countrySub = this.createCountryLayer.open().subscribe(result => {
      if (result) {
        this.kittensList = [...this.kittensList, result.value as Kitten];
      }
    });
  }

  onDeleteCountry(id: number, event: Event) {
    event.stopPropagation();
    this.kittensList = this.kittensList.filter(kit => kit.id !== id);
  }
}
