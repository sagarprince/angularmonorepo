import { Scalars, Mutation, AdminAuth, ResetPasswordInput } from 'generated/lms-graphql';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type AdminSendOtpMutationVariables = {
    email: Scalars['String']
};

export type AdminSendOtpMutation = (
    { __typename?: 'Mutation' }
    & {
        AdminSendOTP: (
            { __typename?: 'AdminAuth' }
            & Pick<AdminAuth, 'id' | 'email' | 'firstName' | 'lastName' | 'status'>
        )
    }
);

export type AdminResendOtpMutationVariables = {
    id: Scalars['Float'],
    email: Scalars['String']
};

export type AdminResendOtpMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'AdminResendOTP'>
);

export type AdminResetPasswordMutationVariables = {
    args: ResetPasswordInput
};

export type AdminResetPasswordMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'AdminResetPassword'>
);

export const AdminSendOtpDocument = gql`
mutation AdminSendOTP($email: String!) {
  AdminSendOTP(email: $email) {
    id
    email
    firstName
    lastName
    status
  }
}
`;

@Injectable({
    providedIn: 'root'
})
export class AdminSendOtpGQL extends Apollo.Mutation<AdminSendOtpMutation, AdminSendOtpMutationVariables> {
    document = AdminSendOtpDocument;
}

export const AdminResendOtpDocument = gql`
mutation AdminResendOTP($id: Float!, $email: String!) {
  AdminResendOTP(id: $id, email: $email)
}
`;

@Injectable({
    providedIn: 'root'
})
export class AdminResendOtpGQL extends Apollo.Mutation<AdminResendOtpMutation, AdminResendOtpMutationVariables> {
    document = AdminResendOtpDocument;
}

export const AdminResetPasswordDocument = gql`
mutation AdminResetPassword($args: ResetPasswordInput!) {
  AdminResetPassword(args: $args)
}
`;

@Injectable({
    providedIn: 'root'
})
export class AdminResetPasswordGQL extends Apollo.Mutation<AdminResetPasswordMutation, AdminResetPasswordMutationVariables> {
    document = AdminResetPasswordDocument;
}