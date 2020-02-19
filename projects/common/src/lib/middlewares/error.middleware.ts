// Core
import { onError } from 'apollo-link-error';
// Constants
import { ExceptionCodes, ExceptionMessages } from '../constants';
// Services
import { ToastrManager } from '../toastr-notifications/toastr.service';

/**
* Parse GraphQL Errors
* @param errors 
*/
function parseGraphQLErrors(errors) {
    let exception = errors.length > 0 ? errors[0] : {
        error: ExceptionCodes.graphClientError,
        message: ExceptionMessages.somethingWentWrong
    };
    exception = parseServerValidationErrors(exception);
    return exception;
}

/**
* Parse GraphQL Server Validation Errors
* @param errors 
*/
function parseServerValidationErrors(exception) {
    const exceptionMessage = exception.message && exception.message instanceof Array && exception.message.length > 0 ? exception.message[0] : exception.message;
    if (typeof exceptionMessage === 'object' && 'constraints' in exceptionMessage) {
        const constraints = exceptionMessage['constraints'];
        exception.message = constraints.length > 0 ? constraints[0] : '';
    }
    return exception;
}

/**
 * GraphQL Error Middleware
 * @param toastr
 * @return void
 */
export const errorMiddleware = (toastr: ToastrManager) => onError(({ graphQLErrors, networkError }) => {
    if (!navigator.onLine) {
        toastr.errorNotification('No Internet Connection');
    }
    else if (graphQLErrors && graphQLErrors.length > 0) {
        const errors = [];
        graphQLErrors.forEach(({ message }) => {
            errors.push(message);
        });
        const error = parseGraphQLErrors(errors);
        if (error.message && error.message !== '') {
            toastr.errorNotification(error.message);
        }
    }
    else if (networkError) {
        let message = networkError.message;
        if (networkError.message.indexOf('unauthorized') > -1) {
            message = 'Session has been expired, please login again.';
        }
        toastr.errorNotification(message);
    }
});