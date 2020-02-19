// Core
import { ApolloLink } from 'apollo-link';
import { HttpHeaders } from '@angular/common/http';
// Store
import { AuthQuery } from '../store/auth/auth.query';

export const authMiddleware = (authQuery: AuthQuery) => new ApolloLink((operation, forward) => {
    const token = authQuery.accessToken;
    if (token !== null && token !== '') {
        operation.setContext({
            headers: new HttpHeaders().set('authorization', 'bearer ' + token)
        });
    }
    return forward(operation).map((response) => {
        if (response && response.errors && response.errors.length > 0) {
            const message: any = response.errors.length > 0 ? response.errors[0].message : null;
            const isUnauthroized = message && message.statusCode && message.statusCode === 401 ? true : false;
            if (isUnauthroized) {
                throw new Error('unauthorized');
            }
        }
        return response;
    });
});