import { inject } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard, RegistrationGuard, VerifyOtpGuard } from './auth.guard';

describe('AuthGuard', () => {
  let spectator: SpectatorService<AuthGuard>;
  const createService = createServiceFactory({
    service: AuthGuard,
    imports: [RouterTestingModule],
    providers: []
  });

  beforeEach(() => spectator = createService());

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should ....', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});

describe('RegistrationGuard', () => {
  let spectator: SpectatorService<RegistrationGuard>;
  const createService = createServiceFactory({
    service: RegistrationGuard,
    imports: [RouterTestingModule],
    providers: []
  });

  beforeEach(() => spectator = createService());

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should ....', inject([RegistrationGuard], (guard: RegistrationGuard) => {
    expect(guard).toBeTruthy();
  }));
});

describe('VerifyOtpGuard', () => {
  let spectator: SpectatorService<VerifyOtpGuard>;
  const createService = createServiceFactory({
    service: VerifyOtpGuard,
    imports: [RouterTestingModule],
    providers: []
  });

  beforeEach(() => spectator = createService());

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should ....', inject([VerifyOtpGuard], (guard: VerifyOtpGuard) => {
    expect(guard).toBeTruthy();
  }));
});