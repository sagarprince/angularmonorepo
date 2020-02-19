/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
var 
// @dynamic
ExceptionCodes = /** @class */ (function () {
    function ExceptionCodes() {
    }
    Object.defineProperty(ExceptionCodes, "graphClientError", {
        get: /**
         * @return {?}
         */
        function () { return "GRAPHQL_CLIENT_ERROR"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExceptionCodes, "validationException", {
        get: /**
         * @return {?}
         */
        function () { return "VALIDATION_EXCEPTION"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExceptionCodes, "invalidCredentials", {
        get: /**
         * @return {?}
         */
        function () { return "INVALID_CREDENTIALS_EXCEPTION"; },
        enumerable: true,
        configurable: true
    });
    return ExceptionCodes;
}());
// @dynamic
export { ExceptionCodes };
// @dynamic
var 
// @dynamic
ExceptionMessages = /** @class */ (function () {
    function ExceptionMessages() {
    }
    Object.defineProperty(ExceptionMessages, "somethingWentWrong", {
        get: /**
         * @return {?}
         */
        function () { return 'Something went wrong, please try again later.'; },
        enumerable: true,
        configurable: true
    });
    return ExceptionMessages;
}());
// @dynamic
export { ExceptionMessages };
// @dynamic
var 
// @dynamic
RegExpPattern = /** @class */ (function () {
    function RegExpPattern() {
    }
    Object.defineProperty(RegExpPattern, "validUrl", {
        get: /**
         * @return {?}
         */
        function () { return '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegExpPattern, "validPassword", {
        get: /**
         * @return {?}
         */
        function () { return '(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}'; },
        enumerable: true,
        configurable: true
    });
    return RegExpPattern;
}());
// @dynamic
export { RegExpPattern };
// @dynamic
var 
// @dynamic
GenericConstants = /** @class */ (function () {
    function GenericConstants() {
    }
    Object.defineProperty(GenericConstants, "genderOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return [
                {
                    id: 'male',
                    text: 'Male'
                },
                {
                    id: 'female',
                    text: 'Female'
                }
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericConstants, "statusOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return [
                {
                    id: true,
                    text: 'Active'
                },
                {
                    id: false,
                    text: 'InActive'
                }
            ];
        },
        enumerable: true,
        configurable: true
    });
    return GenericConstants;
}());
// @dynamic
export { GenericConstants };
// @dynamic
var 
// @dynamic
ValidationMessages = /** @class */ (function () {
    function ValidationMessages() {
    }
    Object.defineProperty(ValidationMessages, "password", {
        get: /**
         * @return {?}
         */
        function () { return 'Password must be eight characters, at least one uppercase letter, one lowercase letter, one special character and one number.'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationMessages, "passwordNotMatch", {
        get: /**
         * @return {?}
         */
        function () { return "Password doesn't match."; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationMessages, "passwordMatch", {
        get: /**
         * @return {?}
         */
        function () { return "New password must be different than old password."; },
        enumerable: true,
        configurable: true
    });
    return ValidationMessages;
}());
// @dynamic
export { ValidationMessages };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7O0lBQUE7SUFJQSxDQUFDO0lBSEcsc0JBQWtCLGtDQUFnQjs7OztRQUFsQyxjQUErQyxPQUFPLHNCQUFzQixDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDL0Usc0JBQWtCLHFDQUFtQjs7OztRQUFyQyxjQUFrRCxPQUFPLHNCQUFzQixDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbEYsc0JBQWtCLG9DQUFrQjs7OztRQUFwQyxjQUFpRCxPQUFPLCtCQUErQixDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDOUYscUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztBQUdEOzs7SUFBQTtJQUVBLENBQUM7SUFERyxzQkFBa0IsdUNBQWtCOzs7O1FBQXBDLGNBQWlELE9BQU8sK0NBQStDLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUM5Ryx3QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0FBR0Q7OztJQUFBO0lBR0EsQ0FBQztJQUZHLHNCQUFrQix5QkFBUTs7OztRQUExQixjQUF1QyxPQUFPLHVEQUF1RCxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDeEcsc0JBQWtCLDhCQUFhOzs7O1FBQS9CLGNBQTRDLE9BQU8sdURBQXVELENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNqSCxvQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0FBR0Q7OztJQUFBO0lBMEJBLENBQUM7SUF6Qkcsc0JBQWtCLGlDQUFhOzs7O1FBQS9CO1lBQ0ksT0FBTztnQkFDSDtvQkFDSSxFQUFFLEVBQUUsTUFBTTtvQkFDVixJQUFJLEVBQUUsTUFBTTtpQkFDZjtnQkFDRDtvQkFDSSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtpQkFDakI7YUFDSixDQUFDO1FBQ04sQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0IsaUNBQWE7Ozs7UUFBL0I7WUFDSSxPQUFPO2dCQUNIO29CQUNJLEVBQUUsRUFBRSxJQUFJO29CQUNSLElBQUksRUFBRSxRQUFRO2lCQUNqQjtnQkFDRDtvQkFDSSxFQUFFLEVBQUUsS0FBSztvQkFDVCxJQUFJLEVBQUUsVUFBVTtpQkFDbkI7YUFDSixDQUFDO1FBQ04sQ0FBQzs7O09BQUE7SUFDTCx1QkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7Ozs7QUFHRDs7O0lBQUE7SUFJQSxDQUFDO0lBSEcsc0JBQWtCLDhCQUFROzs7O1FBQTFCLGNBQXVDLE9BQU8sK0hBQStILENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNoTCxzQkFBa0Isc0NBQWdCOzs7O1FBQWxDLGNBQStDLE9BQU8seUJBQXlCLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNsRixzQkFBa0IsbUNBQWE7Ozs7UUFBL0IsY0FBNEMsT0FBTyxtREFBbUQsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzdHLHlCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbkNvZGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBncmFwaENsaWVudEVycm9yKCk6IHN0cmluZyB7IHJldHVybiBcIkdSQVBIUUxfQ0xJRU5UX0VSUk9SXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCB2YWxpZGF0aW9uRXhjZXB0aW9uKCk6IHN0cmluZyB7IHJldHVybiBcIlZBTElEQVRJT05fRVhDRVBUSU9OXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnZhbGlkQ3JlZGVudGlhbHMoKTogc3RyaW5nIHsgcmV0dXJuIFwiSU5WQUxJRF9DUkVERU5USUFMU19FWENFUFRJT05cIjsgfVxufVxuXG4vLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbk1lc3NhZ2VzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzb21ldGhpbmdXZW50V3JvbmcoKTogc3RyaW5nIHsgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nOyB9XG59XG5cbi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgUmVnRXhwUGF0dGVybiB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgdmFsaWRVcmwoKTogc3RyaW5nIHsgcmV0dXJuICcoaHR0cHM/Oi8vKT8oW1xcXFxkYS16Li1dKylcXFxcLihbYS16Ll17Miw2fSlbL1xcXFx3IC4tXSovPyc7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCB2YWxpZFBhc3N3b3JkKCk6IHN0cmluZyB7IHJldHVybiAnKD89W15BLVpdKltBLVpdKSg/PVteYS16XSpbYS16XSkoPz1bXjAtOV0qWzAtOV0pLns4LH0nOyB9XG59XG5cbi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgR2VuZXJpY0NvbnN0YW50cyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgZ2VuZGVyT3B0aW9ucygpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ21hbGUnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdNYWxlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ2ZlbWFsZScsXG4gICAgICAgICAgICAgICAgdGV4dDogJ0ZlbWFsZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzdGF0dXNPcHRpb25zKCk6IEFycmF5PGFueT4ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdBY3RpdmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSW5BY3RpdmUnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxufVxuXG4vLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25NZXNzYWdlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgcGFzc3dvcmQoKTogc3RyaW5nIHsgcmV0dXJuICdQYXNzd29yZCBtdXN0IGJlIGVpZ2h0IGNoYXJhY3RlcnMsIGF0IGxlYXN0IG9uZSB1cHBlcmNhc2UgbGV0dGVyLCBvbmUgbG93ZXJjYXNlIGxldHRlciwgb25lIHNwZWNpYWwgY2hhcmFjdGVyIGFuZCBvbmUgbnVtYmVyLic7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBwYXNzd29yZE5vdE1hdGNoKCk6IHN0cmluZyB7IHJldHVybiBcIlBhc3N3b3JkIGRvZXNuJ3QgbWF0Y2guXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBwYXNzd29yZE1hdGNoKCk6IHN0cmluZyB7IHJldHVybiBcIk5ldyBwYXNzd29yZCBtdXN0IGJlIGRpZmZlcmVudCB0aGFuIG9sZCBwYXNzd29yZC5cIjsgfVxufSJdfQ==