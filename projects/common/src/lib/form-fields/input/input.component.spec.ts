import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import { FormErrorHandlingPipe } from '../pipes/form-error-handling.pipe';

describe('InputComponent', () => {
  let spectator: Spectator<InputComponent>;
  const createComponent = createComponentFactory({
    component: InputComponent,
    imports: [ReactiveFormsModule],
    declarations: [FormErrorHandlingPipe]
  });
  beforeEach(() => spectator = createComponent());

  it('should be created', () => {
    expect(spectator.component).toBeTruthy();
  });
});


