/**
 * @interface ForgotPasswordState
 */
export interface ForgotPasswordState {
    id?: any;
    email?: string;
    firstName?: string;
    lastName?: string;
    status?: boolean;
    isResendOTPLoading?: boolean;
}