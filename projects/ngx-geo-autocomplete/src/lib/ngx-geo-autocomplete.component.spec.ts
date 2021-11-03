import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGeoAutocompleteComponent } from './ngx-geo-autocomplete.component';

describe('NgxGeoAutocompleteComponent', () => {
  let component: NgxGeoAutocompleteComponent;
  let fixture: ComponentFixture<NgxGeoAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGeoAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGeoAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
