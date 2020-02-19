import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { RouterTestingModule } from '@angular/router/testing';
import { RootComponent } from './root.component';

describe('RootComponent', () => {
  let spectator: Spectator<RootComponent>;
  const createComponent = createComponentFactory({
    component: RootComponent,
    imports: [RouterTestingModule]
  });
  beforeEach(() => spectator = createComponent());

  it('should be created', () => {
    expect(spectator.component).toBeTruthy();
  });
});

