/**
 * @interface AuthState
 */
export interface AuthState {
    token: string;
    refreshToken: string;
    id?: any;
    email?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
    status?: boolean;
}