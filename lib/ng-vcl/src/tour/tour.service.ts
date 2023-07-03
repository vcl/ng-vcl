import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { TourComponent } from './tour.component';

function isNumber(v: unknown): boolean {
  return typeof v === 'number' && !isNaN(v) && isFinite(v);
}

export class TourOptions {
  useOrder = false;
  elementsDisabled = true;
  applyRelative = true;
  dismissOnOverlay = false;

  zIndex = 21;

  previousLabel = 'Previous';
  nextLabel = 'Next';
  exitLabel = 'Exit';

  previousIcon = 'vcl:arrow-left';
  nextIcon = 'vcl:arrow-right';
  exitIcon = 'vcl:close';

  buttonClass = '';

  offsetX = 0;
  offsetY = 0;
}

@Injectable()
export class TourService {
  options: TourOptions;

  end$: Subject<boolean> = new Subject();
  tourComponent$: Subject<TourComponent> = new Subject();

  private _showOverlay = false;
  set showOverlay(showOverlay: boolean) {
    this._showOverlay = showOverlay;
  }

  get showOverlay(): boolean {
    return this._showOverlay;
  }

  get hasPrevious(): boolean {
    const hasPrevious: boolean = this.index > 0;
    return hasPrevious;
  }

  get hasNext(): boolean {
    const hasNext: boolean = this.index < this.tourComponents.length - 1;
    return hasNext;
  }

  private _tourComponents: TourComponent[] = [];
  private tourComponents: TourComponent[] = [];
  private tourComponent: TourComponent | null;
  private index = 0;

  register(tourComponent: TourComponent): void {
    this._tourComponents = this._tourComponents.includes(tourComponent)
      ? this._tourComponents
      : [...this._tourComponents, tourComponent];
  }

  initialize(options: TourOptions = new TourOptions()): void {
    this.options = Object.assign(new TourOptions(), options);
  }

  start(index: number = 0): void {
    if (!this.options) {
      this.initialize();
    }

    this.tourComponents = this.options.useOrder
      ? this._tourComponents.slice().sort((s1, s2) => s1.order - s2.order)
      : this._tourComponents;

    this.tourComponents.forEach(tourComponent => {
      tourComponent.offsetX = isNumber(tourComponent.offsetX)
        ? tourComponent.offsetX
        : this.options.offsetX;
      tourComponent.offsetY = isNumber(tourComponent.offsetY)
        ? tourComponent.offsetY
        : this.options.offsetY;
    });

    this.show(index);
  }

  show(index: number): void {
    this.tourComponent && this.tourComponent.hide();

    const tourComponent: TourComponent = this.tourComponents[index];
    if (!tourComponent) {
      this.tourComponent = null;
      this.index = 0;
      return;
    }

    this.tourComponent = tourComponent;
    this.index = index;

    this.showOverlay = true;
    tourComponent.show();

    this.tourComponent$.next(this.tourComponent);
  }

  showPrevious(): void {
    if (!this.hasPrevious) {
      return this.end();
    }

    this.show(this.index - 1);
  }

  showNext(): void {
    if (!this.hasNext) {
      return this.end();
    }

    this.show(this.index + 1);
  }

  end(): void {
    this.tourComponent && this.tourComponent.hide();
    this.showOverlay = false;
    this.index = 0;
    this.end$.next(true);
  }

  onOverlayClick(): void {
    if (this.options.dismissOnOverlay) {
      this.showNext();
    }
  }
}
