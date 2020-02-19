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
    var exception = errors.length > 0 ? errors[0] : {
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
    var exceptionMessage = exception.message && exception.message instanceof Array && exception.message.length > 0 ? exception.message[0] : exception.message;
    if (typeof exceptionMessage === 'object' && 'constraints' in exceptionMessage) {
        /** @type {?} */
        var constraints = exceptionMessage['constraints'];
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
export var errorMiddleware = (/**
 * @param {?} toastr
 * @return {?}
 */
function (toastr) { return onError((/**
 * @param {?} __0
 * @return {?}
 */
function (_a) {
    var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError;
    if (!navigator.onLine) {
        toastr.errorNotification('No Internet Connection');
    }
    else if (graphQLErrors && graphQLErrors.length > 0) {
        /** @type {?} */
        var errors_1 = [];
        graphQLErrors.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var message = _a.message;
            errors_1.push(message);
        }));
        /** @type {?} */
        var error = parseGraphQLErrors(errors_1);
        if (error.message && error.message !== '') {
            toastr.errorNotification(error.message);
        }
    }
    else if (networkError) {
        /** @type {?} */
        var message = networkError.message;
        if (networkError.message.indexOf('unauthorized') > -1) {
            message = 'Session has been expired, please login again.';
        }
        toastr.errorNotification(message);
    }
})); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9taWRkbGV3YXJlcy9lcnJvci5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0FBUWpFLFNBQVMsa0JBQWtCLENBQUMsTUFBTTs7UUFDMUIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLEtBQUssRUFBRSxjQUFjLENBQUMsZ0JBQWdCO1FBQ3RDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxrQkFBa0I7S0FDaEQ7SUFDRCxTQUFTLEdBQUcsMkJBQTJCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQzs7Ozs7O0FBTUQsU0FBUywyQkFBMkIsQ0FBQyxTQUFTOztRQUNwQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxPQUFPLFlBQVksS0FBSyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU87SUFDM0osSUFBSSxPQUFPLGdCQUFnQixLQUFLLFFBQVEsSUFBSSxhQUFhLElBQUksZ0JBQWdCLEVBQUU7O1lBQ3JFLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDbkQsU0FBUyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDcEU7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDOzs7Ozs7O0FBT0QsTUFBTSxLQUFPLGVBQWU7Ozs7QUFBRyxVQUFDLE1BQXFCLElBQUssT0FBQSxPQUFPOzs7O0FBQUMsVUFBQyxFQUErQjtRQUE3QixnQ0FBYSxFQUFFLDhCQUFZO0lBQzVGLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1FBQ25CLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQ3REO1NBQ0ksSUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O1lBQzFDLFFBQU0sR0FBRyxFQUFFO1FBQ2pCLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFXO2dCQUFULG9CQUFPO1lBQzVCLFFBQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7O1lBQ0csS0FBSyxHQUFHLGtCQUFrQixDQUFDLFFBQU0sQ0FBQztRQUN4QyxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDdkMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQztLQUNKO1NBQ0ksSUFBSSxZQUFZLEVBQUU7O1lBQ2YsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPO1FBQ2xDLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDbkQsT0FBTyxHQUFHLCtDQUErQyxDQUFDO1NBQzdEO1FBQ0QsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3JDO0FBQ0wsQ0FBQyxFQUFDLEVBckJ3RCxDQXFCeEQsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tICdhcG9sbG8tbGluay1lcnJvcic7XG4vLyBDb25zdGFudHNcbmltcG9ydCB7IEV4Y2VwdGlvbkNvZGVzLCBFeGNlcHRpb25NZXNzYWdlcyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgVG9hc3RyTWFuYWdlciB9IGZyb20gJy4uL3RvYXN0ci1ub3RpZmljYXRpb25zL3RvYXN0ci5zZXJ2aWNlJztcblxuLyoqXG4qIFBhcnNlIEdyYXBoUUwgRXJyb3JzXG4qIEBwYXJhbSBlcnJvcnMgXG4qL1xuZnVuY3Rpb24gcGFyc2VHcmFwaFFMRXJyb3JzKGVycm9ycykge1xuICAgIGxldCBleGNlcHRpb24gPSBlcnJvcnMubGVuZ3RoID4gMCA/IGVycm9yc1swXSA6IHtcbiAgICAgICAgZXJyb3I6IEV4Y2VwdGlvbkNvZGVzLmdyYXBoQ2xpZW50RXJyb3IsXG4gICAgICAgIG1lc3NhZ2U6IEV4Y2VwdGlvbk1lc3NhZ2VzLnNvbWV0aGluZ1dlbnRXcm9uZ1xuICAgIH07XG4gICAgZXhjZXB0aW9uID0gcGFyc2VTZXJ2ZXJWYWxpZGF0aW9uRXJyb3JzKGV4Y2VwdGlvbik7XG4gICAgcmV0dXJuIGV4Y2VwdGlvbjtcbn1cblxuLyoqXG4qIFBhcnNlIEdyYXBoUUwgU2VydmVyIFZhbGlkYXRpb24gRXJyb3JzXG4qIEBwYXJhbSBlcnJvcnMgXG4qL1xuZnVuY3Rpb24gcGFyc2VTZXJ2ZXJWYWxpZGF0aW9uRXJyb3JzKGV4Y2VwdGlvbikge1xuICAgIGNvbnN0IGV4Y2VwdGlvbk1lc3NhZ2UgPSBleGNlcHRpb24ubWVzc2FnZSAmJiBleGNlcHRpb24ubWVzc2FnZSBpbnN0YW5jZW9mIEFycmF5ICYmIGV4Y2VwdGlvbi5tZXNzYWdlLmxlbmd0aCA+IDAgPyBleGNlcHRpb24ubWVzc2FnZVswXSA6IGV4Y2VwdGlvbi5tZXNzYWdlO1xuICAgIGlmICh0eXBlb2YgZXhjZXB0aW9uTWVzc2FnZSA9PT0gJ29iamVjdCcgJiYgJ2NvbnN0cmFpbnRzJyBpbiBleGNlcHRpb25NZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGNvbnN0cmFpbnRzID0gZXhjZXB0aW9uTWVzc2FnZVsnY29uc3RyYWludHMnXTtcbiAgICAgICAgZXhjZXB0aW9uLm1lc3NhZ2UgPSBjb25zdHJhaW50cy5sZW5ndGggPiAwID8gY29uc3RyYWludHNbMF0gOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGV4Y2VwdGlvbjtcbn1cblxuLyoqXG4gKiBHcmFwaFFMIEVycm9yIE1pZGRsZXdhcmVcbiAqIEBwYXJhbSB0b2FzdHJcbiAqIEByZXR1cm4gdm9pZFxuICovXG5leHBvcnQgY29uc3QgZXJyb3JNaWRkbGV3YXJlID0gKHRvYXN0cjogVG9hc3RyTWFuYWdlcikgPT4gb25FcnJvcigoeyBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgfSkgPT4ge1xuICAgIGlmICghbmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgICB0b2FzdHIuZXJyb3JOb3RpZmljYXRpb24oJ05vIEludGVybmV0IENvbm5lY3Rpb24nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZ3JhcGhRTEVycm9ycyAmJiBncmFwaFFMRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZXJyb3JzID0gW107XG4gICAgICAgIGdyYXBoUUxFcnJvcnMuZm9yRWFjaCgoeyBtZXNzYWdlIH0pID0+IHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBwYXJzZUdyYXBoUUxFcnJvcnMoZXJyb3JzKTtcbiAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UgJiYgZXJyb3IubWVzc2FnZSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRvYXN0ci5lcnJvck5vdGlmaWNhdGlvbihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChuZXR3b3JrRXJyb3IpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXR3b3JrRXJyb3IubWVzc2FnZTtcbiAgICAgICAgaWYgKG5ldHdvcmtFcnJvci5tZXNzYWdlLmluZGV4T2YoJ3VuYXV0aG9yaXplZCcpID4gLTEpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAnU2Vzc2lvbiBoYXMgYmVlbiBleHBpcmVkLCBwbGVhc2UgbG9naW4gYWdhaW4uJztcbiAgICAgICAgfVxuICAgICAgICB0b2FzdHIuZXJyb3JOb3RpZmljYXRpb24obWVzc2FnZSk7XG4gICAgfVxufSk7Il19