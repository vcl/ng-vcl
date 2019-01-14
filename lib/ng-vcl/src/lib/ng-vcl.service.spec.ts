import { TestBed } from '@angular/core/testing';

import { NgVclService } from './ng-vcl.service';

describe('NgVclService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgVclService = TestBed.get(NgVclService);
    expect(service).toBeTruthy();
  });
});
