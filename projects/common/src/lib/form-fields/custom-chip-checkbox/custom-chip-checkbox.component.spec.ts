import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChipCheckboxComponent } from './custom-chip-checkbox.component';

describe('CustomChipCheckboxComponent', () => {
  let component: CustomChipCheckboxComponent;
  let fixture: ComponentFixture<CustomChipCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomChipCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomChipCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
