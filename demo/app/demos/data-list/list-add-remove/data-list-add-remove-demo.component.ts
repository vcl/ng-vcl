import {
  AfterViewChecked,
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

interface CountryData {
  name: string;
  description: string;
  code: string;
  disabled: boolean;
}

const data: CountryData[] = [
  {
    name: 'Greece',
    description:
      'A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas',
    code: 'gr',
    disabled: false,
  },
  {
    name: 'France',
    description:
      'France (officially the French Republic (French: République française [ʁepyblik fʁɑ̃sɛːz]),[14] is a country located primarily in Western Europe.',
    code: 'fr',
    disabled: false,
  },
  {
    name: 'Germany (disabled)',
    description:
      'Germany,[e] officially the Federal Republic of Germany,[f] is a country in the western region of Central Europe.',
    code: 'de',
    disabled: true,
  },
  {
    name: 'The United Kingdom of Great Britain and Northern Ireland',
    description: '',
    code: 'gb',
    disabled: false,
  },
  { name: 'Japan', description: '', code: 'jp', disabled: false },
  { name: 'China', description: '', code: 'ch', disabled: false },
  { name: 'Thailand', description: '', code: 'th', disabled: false },
];

@Component({
  selector: 'data-list-add-remove-demo',
  templateUrl: './data-list-add-remove-demo.component.html',
  styleUrls: ['./data-list-add-remove-demo.component.scss'],
})
export class DataListAddRemoveDemo
  implements OnChanges, OnDestroy
{
  createCountryLayer: LayerRef;
  countrySub: Subscription;

  selectedValues = [];
  countriesList: CountryData[] = data;

  @Input() mode!: string;
  @ViewChildren(DataListItemDirective)
  dataListItems!: QueryList<DataListItemDirective>;

  constructor(private layerService: LayerService) {
    this.createCountryLayer = this.layerService.create(CreateCountryComponent, {
      closeOnBackdropClick: false,
      closeOnEscape: false,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const mode = changes['mode'];

    if (!mode.firstChange && mode.currentValue !== mode.previousValue) {
      this.selectedValues = [];

      // Unselect the item when the mode has changed.
      this.dataListItems.map(item => (item.selected = false));
    }
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
// TODO Change the content to match the vcl's
