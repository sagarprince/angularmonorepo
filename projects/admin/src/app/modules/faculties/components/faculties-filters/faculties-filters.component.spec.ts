import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultiesFiltersComponent } from './faculties-filters.component';

describe('FacultiesFiltersComponent', () => {
  let component: FacultiesFiltersComponent;
  let fixture: ComponentFixture<FacultiesFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultiesFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultiesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
