import { TestBed, async, inject } from '@angular/core/testing';

import { ForgotPasswordGuard } from './forgot-password.guard';

describe('ForgotPasswordGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgotPasswordGuard]
    });
  });

  it('should ...', inject([ForgotPasswordGuard], (guard: ForgotPasswordGuard) => {
    expect(guard).toBeTruthy();
  }));
});
