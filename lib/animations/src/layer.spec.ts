import { async, TestBed } from '@angular/core/testing';
import { LAYER_ANIMATIONS } from '@ng-vcl/ng-vcl';
import { LAYER_ANIMATIONS_PROVIDER, LayerAnimationsModule } from './layer';

describe('Layer service', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ LayerAnimationsModule ]
    });
  }));

  it('to equal', () => {
    const service = TestBed.get(LAYER_ANIMATIONS);
    expect(service).toEqual(LAYER_ANIMATIONS_PROVIDER);
  });
});
