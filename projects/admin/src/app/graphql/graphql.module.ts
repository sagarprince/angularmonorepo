// Core
import { NgModule } from '@angular/core';

// GraphQL Apollo Modules
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

// Environment Config
import { environment } from '../../environments/environment';

// Middlewares
import { errorMiddleware } from '@lms/common';
import { authMiddleware } from './auth.middleware';
import { retryMiddleware } from './retry.middleware';

// Toastr Manager
import { ToastrManager } from '@lms/common';

// Store
import { AuthService } from '../store/auth/auth.service';
import { AuthQuery } from '../store/auth/auth.query';
import { DefaultOptions } from 'apollo-client';

const uri = environment.graphUrl;

export function createApollo(
    httpLink: HttpLink, authService: AuthService, authQuery: AuthQuery, toastr: ToastrManager
) {
    const http = httpLink.create({ uri });

    const link = ApolloLink.from([
        errorMiddleware(toastr),
        retryMiddleware(authService),
        authMiddleware(authQuery),
        http
    ]);

    const defaultOptions: DefaultOptions = {
        watchQuery: {
            fetchPolicy: 'no-cache'
        },
        query: {
            fetchPolicy: 'no-cache'
        },
    };

    return {
        link: link,
        cache: new InMemoryCache(),
        defaultOptions: defaultOptions
    };
}

@NgModule({
    exports: [ApolloModule, HttpLinkModule],
})
export class GraphQLModule {
    constructor(
        private apollo: Apollo,
        private httpLink: HttpLink,
        private authService: AuthService,
        private authQuery: AuthQuery,
        private toastr: ToastrManager
    ) {
        this.apollo.create(
            createApollo(this.httpLink, this.authService, this.authQuery, this.toastr)
        );
    }
}
