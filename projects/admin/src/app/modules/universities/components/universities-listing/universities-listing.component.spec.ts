import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesListingComponent } from './universities-listing.component';

describe('UniversitiesListingComponent', () => {
  let component: UniversitiesListingComponent;
  let fixture: ComponentFixture<UniversitiesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitiesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitiesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
