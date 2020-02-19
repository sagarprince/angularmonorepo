// Core
import { RetryLink } from 'apollo-link-retry';
// Store
import { AuthService } from '../store/auth/auth.service';

export const retryMiddleware = (authService: AuthService) => new RetryLink({
    delay: {
        initial: 500
    },
    attempts: {
        max: 3,
        retryIf: (error, _operation) => {
            if (error && error.message && error.message.indexOf('unauthorized') > -1) {
                return new Promise((resolve, _) => {
                    authService.refreshToken().subscribe((data) => {
                        if (data) {
                            resolve(true);
                        } else {
                            authService.logout();
                            resolve(false);
                        }
                    }, () => {
                        authService.logout();
                        resolve(false);
                    });
                });
            }
            return false;
        }
    }
});