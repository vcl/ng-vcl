import { Component, OnDestroy } from '@angular/core';
import { LayerRef, LayerService } from '@vcl/ng-vcl';
import { Subscription } from 'rxjs';
import { CreateCountryComponent } from './create-country.component';

interface CountryData {
  name: string;
  description: string;
  code: string;
}

@Component({
  selector: 'data-list-add-remove-demo',
  templateUrl: './data-list-add-remove-demo.component.html',
  styleUrls: ['./data-list-add-remove-demo.component.scss'],
})
export class DataListAddRemoveDemo implements OnDestroy {
  createCountryLayer: LayerRef;
  countrySub: Subscription;

  selectedValues = [];
  countriesList: CountryData[] = [
    {
      name: 'Germany',
      description:
        'Germany,[e] officially the Federal Republic of Germany,[f] is a country in the western region of Central Europe.',
      code: 'de',
    },
    {
      name: 'France',
      description:
        'France (officially the French Republic (French: République française [ʁepyblik fʁɑ̃sɛːz]),[14] is a country located primarily in Western Europe.',
      code: 'fr',
    },
  ];

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

  onAddCountry() {
    this.countrySub = this.createCountryLayer.open().subscribe(result => {
      if (result) {
        this.countriesList = [
          ...this.countriesList,
          result.value as CountryData,
        ];
      }
    });
  }

  onDeleteCountry(code: string, event: Event) {
    event.stopPropagation();
    this.countriesList = this.countriesList.filter(
      country => country.code !== code
    );
  }
}
