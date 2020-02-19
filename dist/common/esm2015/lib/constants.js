/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
export class ExceptionCodes {
    /**
     * @return {?}
     */
    static get graphClientError() { return "GRAPHQL_CLIENT_ERROR"; }
    /**
     * @return {?}
     */
    static get validationException() { return "VALIDATION_EXCEPTION"; }
    /**
     * @return {?}
     */
    static get invalidCredentials() { return "INVALID_CREDENTIALS_EXCEPTION"; }
}
// @dynamic
export class ExceptionMessages {
    /**
     * @return {?}
     */
    static get somethingWentWrong() { return 'Something went wrong, please try again later.'; }
}
// @dynamic
export class RegExpPattern {
    /**
     * @return {?}
     */
    static get validUrl() { return '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'; }
    /**
     * @return {?}
     */
    static get validPassword() { return '(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}'; }
}
// @dynamic
export class GenericConstants {
    /**
     * @return {?}
     */
    static get genderOptions() {
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
    }
    /**
     * @return {?}
     */
    static get statusOptions() {
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
    }
}
// @dynamic
export class ValidationMessages {
    /**
     * @return {?}
     */
    static get password() { return 'Password must be eight characters, at least one uppercase letter, one lowercase letter, one special character and one number.'; }
    /**
     * @return {?}
     */
    static get passwordNotMatch() { return "Password doesn't match."; }
    /**
     * @return {?}
     */
    static get passwordMatch() { return "New password must be different than old password."; }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxNQUFNLE9BQU8sY0FBYzs7OztJQUNoQixNQUFNLEtBQUssZ0JBQWdCLEtBQWEsT0FBTyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7Ozs7SUFDeEUsTUFBTSxLQUFLLG1CQUFtQixLQUFhLE9BQU8sc0JBQXNCLENBQUMsQ0FBQyxDQUFDOzs7O0lBQzNFLE1BQU0sS0FBSyxrQkFBa0IsS0FBYSxPQUFPLCtCQUErQixDQUFDLENBQUMsQ0FBQztDQUM3Rjs7QUFHRCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBQ25CLE1BQU0sS0FBSyxrQkFBa0IsS0FBYSxPQUFPLCtDQUErQyxDQUFDLENBQUMsQ0FBQztDQUM3Rzs7QUFHRCxNQUFNLE9BQU8sYUFBYTs7OztJQUNmLE1BQU0sS0FBSyxRQUFRLEtBQWEsT0FBTyx1REFBdUQsQ0FBQyxDQUFDLENBQUM7Ozs7SUFDakcsTUFBTSxLQUFLLGFBQWEsS0FBYSxPQUFPLHVEQUF1RCxDQUFDLENBQUMsQ0FBQztDQUNoSDs7QUFHRCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQ2xCLE1BQU0sS0FBSyxhQUFhO1FBQzNCLE9BQU87WUFDSDtnQkFDSSxFQUFFLEVBQUUsTUFBTTtnQkFDVixJQUFJLEVBQUUsTUFBTTthQUNmO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLFFBQVE7Z0JBQ1osSUFBSSxFQUFFLFFBQVE7YUFDakI7U0FDSixDQUFDO0lBQ04sQ0FBQzs7OztJQUVNLE1BQU0sS0FBSyxhQUFhO1FBQzNCLE9BQU87WUFDSDtnQkFDSSxFQUFFLEVBQUUsSUFBSTtnQkFDUixJQUFJLEVBQUUsUUFBUTthQUNqQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxLQUFLO2dCQUNULElBQUksRUFBRSxVQUFVO2FBQ25CO1NBQ0osQ0FBQztJQUNOLENBQUM7Q0FDSjs7QUFHRCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQ3BCLE1BQU0sS0FBSyxRQUFRLEtBQWEsT0FBTywrSEFBK0gsQ0FBQyxDQUFDLENBQUM7Ozs7SUFDekssTUFBTSxLQUFLLGdCQUFnQixLQUFhLE9BQU8seUJBQXlCLENBQUMsQ0FBQyxDQUFDOzs7O0lBQzNFLE1BQU0sS0FBSyxhQUFhLEtBQWEsT0FBTyxtREFBbUQsQ0FBQyxDQUFDLENBQUM7Q0FDNUciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbkNvZGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBncmFwaENsaWVudEVycm9yKCk6IHN0cmluZyB7IHJldHVybiBcIkdSQVBIUUxfQ0xJRU5UX0VSUk9SXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCB2YWxpZGF0aW9uRXhjZXB0aW9uKCk6IHN0cmluZyB7IHJldHVybiBcIlZBTElEQVRJT05fRVhDRVBUSU9OXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnZhbGlkQ3JlZGVudGlhbHMoKTogc3RyaW5nIHsgcmV0dXJuIFwiSU5WQUxJRF9DUkVERU5USUFMU19FWENFUFRJT05cIjsgfVxufVxuXG4vLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbk1lc3NhZ2VzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzb21ldGhpbmdXZW50V3JvbmcoKTogc3RyaW5nIHsgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nOyB9XG59XG5cbi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgUmVnRXhwUGF0dGVybiB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgdmFsaWRVcmwoKTogc3RyaW5nIHsgcmV0dXJuICcoaHR0cHM/Oi8vKT8oW1xcXFxkYS16Li1dKylcXFxcLihbYS16Ll17Miw2fSlbL1xcXFx3IC4tXSovPyc7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCB2YWxpZFBhc3N3b3JkKCk6IHN0cmluZyB7IHJldHVybiAnKD89W15BLVpdKltBLVpdKSg/PVteYS16XSpbYS16XSkoPz1bXjAtOV0qWzAtOV0pLns4LH0nOyB9XG59XG5cbi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgR2VuZXJpY0NvbnN0YW50cyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgZ2VuZGVyT3B0aW9ucygpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ21hbGUnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdNYWxlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ2ZlbWFsZScsXG4gICAgICAgICAgICAgICAgdGV4dDogJ0ZlbWFsZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzdGF0dXNPcHRpb25zKCk6IEFycmF5PGFueT4ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdBY3RpdmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSW5BY3RpdmUnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxufVxuXG4vLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25NZXNzYWdlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgcGFzc3dvcmQoKTogc3RyaW5nIHsgcmV0dXJuICdQYXNzd29yZCBtdXN0IGJlIGVpZ2h0IGNoYXJhY3RlcnMsIGF0IGxlYXN0IG9uZSB1cHBlcmNhc2UgbGV0dGVyLCBvbmUgbG93ZXJjYXNlIGxldHRlciwgb25lIHNwZWNpYWwgY2hhcmFjdGVyIGFuZCBvbmUgbnVtYmVyLic7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBwYXNzd29yZE5vdE1hdGNoKCk6IHN0cmluZyB7IHJldHVybiBcIlBhc3N3b3JkIGRvZXNuJ3QgbWF0Y2guXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBwYXNzd29yZE1hdGNoKCk6IHN0cmluZyB7IHJldHVybiBcIk5ldyBwYXNzd29yZCBtdXN0IGJlIGRpZmZlcmVudCB0aGFuIG9sZCBwYXNzd29yZC5cIjsgfVxufSJdfQ==