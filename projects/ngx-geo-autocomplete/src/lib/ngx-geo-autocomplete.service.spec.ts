import { TestBed } from '@angular/core/testing';

import { NgxGeoAutocompleteService } from './ngx-geo-autocomplete.service';

describe('NgxGeoAutocompleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxGeoAutocompleteService = TestBed.get(NgxGeoAutocompleteService);
    expect(service).toBeTruthy();
  });
});
