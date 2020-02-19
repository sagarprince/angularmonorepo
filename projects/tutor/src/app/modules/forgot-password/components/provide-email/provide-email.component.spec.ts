import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideEmailComponent } from './provide-email.component';

describe('ProvideEmailComponent', () => {
  let component: ProvideEmailComponent;
  let fixture: ComponentFixture<ProvideEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvideEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
