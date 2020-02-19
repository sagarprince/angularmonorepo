import { Spectator, createComponentFactory, byText } from '@ngneat/spectator';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let spectator: Spectator<DashboardComponent>;
  const createComponent: any = createComponentFactory({
    component: DashboardComponent,
    imports: [RouterTestingModule, HttpClientTestingModule]
  });
  beforeEach(() => spectator = createComponent());

  it('should be created', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should have a titie Dashboard', () => {
    expect(spectator.query(byText('Dashboard'))).toBeTruthy();
  });
});
