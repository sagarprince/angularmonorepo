/**
 * @fileoverview added by tsickle
 * Generated from: lib/middlewares/error.middleware.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Core
import { onError } from 'apollo-link-error';
// Constants
import { ExceptionCodes, ExceptionMessages } from '../constants';
/**
 * Parse GraphQL Errors
 * @param {?} errors
 * @return {?}
 */
function parseGraphQLErrors(errors) {
    /** @type {?} */
    let exception = errors.length > 0 ? errors[0] : {
        error: ExceptionCodes.graphClientError,
        message: ExceptionMessages.somethingWentWrong
    };
    exception = parseServerValidationErrors(exception);
    return exception;
}
/**
 * Parse GraphQL Server Validation Errors
 * @param {?} exception
 * @return {?}
 */
function parseServerValidationErrors(exception) {
    /** @type {?} */
    const exceptionMessage = exception.message && exception.message instanceof Array && exception.message.length > 0 ? exception.message[0] : exception.message;
    if (typeof exceptionMessage === 'object' && 'constraints' in exceptionMessage) {
        /** @type {?} */
        const constraints = exceptionMessage['constraints'];
        exception.message = constraints.length > 0 ? constraints[0] : '';
    }
    return exception;
}
/**
 * GraphQL Error Middleware
 * \@param toastr
 * \@return void
 * @type {?}
 */
export const errorMiddleware = (/**
 * @param {?} toastr
 * @return {?}
 */
(toastr) => onError((/**
 * @param {?} __0
 * @return {?}
 */
({ graphQLErrors, networkError }) => {
    if (!navigator.onLine) {
        toastr.errorNotification('No Internet Connection');
    }
    else if (graphQLErrors && graphQLErrors.length > 0) {
        /** @type {?} */
        const errors = [];
        graphQLErrors.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ message }) => {
            errors.push(message);
        }));
        /** @type {?} */
        const error = parseGraphQLErrors(errors);
        if (error.message && error.message !== '') {
            toastr.errorNotification(error.message);
        }
    }
    else if (networkError) {
        /** @type {?} */
        let message = networkError.message;
        if (networkError.message.indexOf('unauthorized') > -1) {
            message = 'Session has been expired, please login again.';
        }
        toastr.errorNotification(message);
    }
})));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9taWRkbGV3YXJlcy9lcnJvci5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0FBUWpFLFNBQVMsa0JBQWtCLENBQUMsTUFBTTs7UUFDMUIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLEtBQUssRUFBRSxjQUFjLENBQUMsZ0JBQWdCO1FBQ3RDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxrQkFBa0I7S0FDaEQ7SUFDRCxTQUFTLEdBQUcsMkJBQTJCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQzs7Ozs7O0FBTUQsU0FBUywyQkFBMkIsQ0FBQyxTQUFTOztVQUNwQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxPQUFPLFlBQVksS0FBSyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU87SUFDM0osSUFBSSxPQUFPLGdCQUFnQixLQUFLLFFBQVEsSUFBSSxhQUFhLElBQUksZ0JBQWdCLEVBQUU7O2NBQ3JFLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDbkQsU0FBUyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDcEU7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDOzs7Ozs7O0FBT0QsTUFBTSxPQUFPLGVBQWU7Ozs7QUFBRyxDQUFDLE1BQXFCLEVBQUUsRUFBRSxDQUFDLE9BQU87Ozs7QUFBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUU7SUFDbEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7UUFDbkIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDdEQ7U0FDSSxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7Y0FDMUMsTUFBTSxHQUFHLEVBQUU7UUFDakIsYUFBYSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUFDOztjQUNHLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7UUFDeEMsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ3ZDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0M7S0FDSjtTQUNJLElBQUksWUFBWSxFQUFFOztZQUNmLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTztRQUNsQyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ25ELE9BQU8sR0FBRywrQ0FBK0MsQ0FBQztTQUM3RDtRQUNELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNyQztBQUNMLENBQUMsRUFBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gJ2Fwb2xsby1saW5rLWVycm9yJztcbi8vIENvbnN0YW50c1xuaW1wb3J0IHsgRXhjZXB0aW9uQ29kZXMsIEV4Y2VwdGlvbk1lc3NhZ2VzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBUb2FzdHJNYW5hZ2VyIH0gZnJvbSAnLi4vdG9hc3RyLW5vdGlmaWNhdGlvbnMvdG9hc3RyLnNlcnZpY2UnO1xuXG4vKipcbiogUGFyc2UgR3JhcGhRTCBFcnJvcnNcbiogQHBhcmFtIGVycm9ycyBcbiovXG5mdW5jdGlvbiBwYXJzZUdyYXBoUUxFcnJvcnMoZXJyb3JzKSB7XG4gICAgbGV0IGV4Y2VwdGlvbiA9IGVycm9ycy5sZW5ndGggPiAwID8gZXJyb3JzWzBdIDoge1xuICAgICAgICBlcnJvcjogRXhjZXB0aW9uQ29kZXMuZ3JhcGhDbGllbnRFcnJvcixcbiAgICAgICAgbWVzc2FnZTogRXhjZXB0aW9uTWVzc2FnZXMuc29tZXRoaW5nV2VudFdyb25nXG4gICAgfTtcbiAgICBleGNlcHRpb24gPSBwYXJzZVNlcnZlclZhbGlkYXRpb25FcnJvcnMoZXhjZXB0aW9uKTtcbiAgICByZXR1cm4gZXhjZXB0aW9uO1xufVxuXG4vKipcbiogUGFyc2UgR3JhcGhRTCBTZXJ2ZXIgVmFsaWRhdGlvbiBFcnJvcnNcbiogQHBhcmFtIGVycm9ycyBcbiovXG5mdW5jdGlvbiBwYXJzZVNlcnZlclZhbGlkYXRpb25FcnJvcnMoZXhjZXB0aW9uKSB7XG4gICAgY29uc3QgZXhjZXB0aW9uTWVzc2FnZSA9IGV4Y2VwdGlvbi5tZXNzYWdlICYmIGV4Y2VwdGlvbi5tZXNzYWdlIGluc3RhbmNlb2YgQXJyYXkgJiYgZXhjZXB0aW9uLm1lc3NhZ2UubGVuZ3RoID4gMCA/IGV4Y2VwdGlvbi5tZXNzYWdlWzBdIDogZXhjZXB0aW9uLm1lc3NhZ2U7XG4gICAgaWYgKHR5cGVvZiBleGNlcHRpb25NZXNzYWdlID09PSAnb2JqZWN0JyAmJiAnY29uc3RyYWludHMnIGluIGV4Y2VwdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgY29uc3RyYWludHMgPSBleGNlcHRpb25NZXNzYWdlWydjb25zdHJhaW50cyddO1xuICAgICAgICBleGNlcHRpb24ubWVzc2FnZSA9IGNvbnN0cmFpbnRzLmxlbmd0aCA+IDAgPyBjb25zdHJhaW50c1swXSA6ICcnO1xuICAgIH1cbiAgICByZXR1cm4gZXhjZXB0aW9uO1xufVxuXG4vKipcbiAqIEdyYXBoUUwgRXJyb3IgTWlkZGxld2FyZVxuICogQHBhcmFtIHRvYXN0clxuICogQHJldHVybiB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBlcnJvck1pZGRsZXdhcmUgPSAodG9hc3RyOiBUb2FzdHJNYW5hZ2VyKSA9PiBvbkVycm9yKCh7IGdyYXBoUUxFcnJvcnMsIG5ldHdvcmtFcnJvciB9KSA9PiB7XG4gICAgaWYgKCFuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgICAgIHRvYXN0ci5lcnJvck5vdGlmaWNhdGlvbignTm8gSW50ZXJuZXQgQ29ubmVjdGlvbicpO1xuICAgIH1cbiAgICBlbHNlIGlmIChncmFwaFFMRXJyb3JzICYmIGdyYXBoUUxFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgICAgICAgZ3JhcGhRTEVycm9ycy5mb3JFYWNoKCh7IG1lc3NhZ2UgfSkgPT4ge1xuICAgICAgICAgICAgZXJyb3JzLnB1c2gobWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBlcnJvciA9IHBhcnNlR3JhcGhRTEVycm9ycyhlcnJvcnMpO1xuICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSAmJiBlcnJvci5tZXNzYWdlICE9PSAnJykge1xuICAgICAgICAgICAgdG9hc3RyLmVycm9yTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5ldHdvcmtFcnJvcikge1xuICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldHdvcmtFcnJvci5tZXNzYWdlO1xuICAgICAgICBpZiAobmV0d29ya0Vycm9yLm1lc3NhZ2UuaW5kZXhPZigndW5hdXRob3JpemVkJykgPiAtMSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9ICdTZXNzaW9uIGhhcyBiZWVuIGV4cGlyZWQsIHBsZWFzZSBsb2dpbiBhZ2Fpbi4nO1xuICAgICAgICB9XG4gICAgICAgIHRvYXN0ci5lcnJvck5vdGlmaWNhdGlvbihtZXNzYWdlKTtcbiAgICB9XG59KTsiXX0=