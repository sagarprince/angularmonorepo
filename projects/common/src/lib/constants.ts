// @dynamic
export class ExceptionCodes {
    public static get graphClientError(): string { return "GRAPHQL_CLIENT_ERROR"; }
    public static get validationException(): string { return "VALIDATION_EXCEPTION"; }
    public static get invalidCredentials(): string { return "INVALID_CREDENTIALS_EXCEPTION"; }
}

// @dynamic
export class ExceptionMessages {
    public static get somethingWentWrong(): string { return 'Something went wrong, please try again later.'; }
}

// @dynamic
export class RegExpPattern {
    public static get validUrl(): string { return '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'; }
    public static get validPassword(): string { return '(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}'; }
}

// @dynamic
export class GenericConstants {
    public static get genderOptions(): Array<any> {
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

    public static get statusOptions(): Array<any> {
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
    public static get password(): string { return 'Password must be eight characters, at least one uppercase letter, one lowercase letter, one special character and one number.'; }
    public static get passwordNotMatch(): string { return "Password doesn't match."; }
    public static get passwordMatch(): string { return "New password must be different than old password."; }
}