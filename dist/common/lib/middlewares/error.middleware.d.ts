import { ToastrManager } from '../toastr-notifications/toastr.service';
/**
 * GraphQL Error Middleware
 * @param toastr
 * @return void
 */
export declare const errorMiddleware: (toastr: ToastrManager) => import("apollo-link").ApolloLink;
