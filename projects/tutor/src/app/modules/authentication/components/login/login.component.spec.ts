import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormFieldsModule } from '../../../../shared/modules/form-fields/form-fields.module';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let spectator: Spectator<LoginComponent>;
  const createComponent = createComponentFactory({
    component: LoginComponent,
    imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, NgbAlertModule, FormFieldsModule]
  });
  beforeEach(() => spectator = createComponent());

  it('should be created', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('button should have text "Sign in"', () => {
    expect(spectator.query('button')).toHaveText('Sign in');
  });
});
