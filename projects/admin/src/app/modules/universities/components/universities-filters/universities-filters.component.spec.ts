import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesFiltersComponent } from './universities-filters.component';

describe('UniversitiesFiltersComponent', () => {
  let component: UniversitiesFiltersComponent;
  let fixture: ComponentFixture<UniversitiesFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitiesFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitiesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
