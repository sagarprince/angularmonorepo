import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultiesListingComponent } from './faculties-listing.component';

describe('FacultiesListingComponent', () => {
  let component: FacultiesListingComponent;
  let fixture: ComponentFixture<FacultiesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultiesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultiesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
