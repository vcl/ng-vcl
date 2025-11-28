import { Component, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import {
  VCLDataListItemDirective,
  LayerRef,
  LayerService,
  VCLIcogramModule,
  VCLRadioButtonModule,
  VCLDataListComponent,
  VCLDataListHeaderDirective,
  VCLButtonComponent,
} from '@vcl/ng-vcl';
import { Subscription } from 'rxjs';
import { CreateCountryComponent } from './create-kitten.component';
import { data, Kitten } from './data';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'data-list-add-remove-demo',
  templateUrl: './data-list-add-remove-demo.component.html',
  styleUrls: ['./data-list-add-remove-demo.component.scss'],
  imports: [
    NgTemplateOutlet,
    JsonPipe,
    VCLRadioButtonModule,
    VCLIcogramModule,
    VCLDataListItemDirective,
    VCLDataListComponent,
    VCLDataListHeaderDirective,
    VCLButtonComponent,
  ],
})
export class DataListAddRemoveDemo implements OnDestroy {
  createCountryLayer: LayerRef;
  countrySub: Subscription;

  modeValue = 'single';
  selectedValues = [];
  kittensList: Kitten[] = data;

  @ViewChildren(VCLDataListItemDirective)
  dataListItems!: QueryList<VCLDataListItemDirective>;

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
        const newKitten: Kitten = {
          ...result.value,
          image: 'https://picsum.photos/180/180',
          owner: 'Julia',
          category: 'Pet',
          active: true,
          dateOfBirth: 'September 2, 2023',
          id: Math.floor(Math.random() * 10000),
        };

        this.kittensList = [...this.kittensList, newKitten];
      }
    });
  }

  onDeleteCountry(id: number, event: Event) {
    event.stopPropagation();
    this.kittensList = this.kittensList.filter(kit => kit.id !== id);
  }
}
