import { Spectator, createComponentFactory, byText } from '@ngneat/spectator';
import { RouterTestingModule } from '@angular/router/testing';
import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let spectator: Spectator<PageNotFoundComponent>;
  const createComponent = createComponentFactory({
    component: PageNotFoundComponent,
    imports: [RouterTestingModule]
  });
  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should have a heading', () => {
    expect(spectator.query('.page-not-found__heading')).toHaveText('404');
  });

  it('should have a message', () => {
    expect(spectator.query('.page-not-found__message')).toHaveText('WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND.');
  });

  it('should have a button', () => {
    expect(spectator.query('button')).toHaveText('GO HOME');
  });
});
