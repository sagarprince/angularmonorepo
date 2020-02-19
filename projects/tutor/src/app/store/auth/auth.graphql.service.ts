import { Scalars, Mutation, AdminAuth, AdminLoginResponse, AdminUpdateInput, ChangePasswordInput } from 'generated/lms-graphql';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type AdminLoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};

export type AdminLoginMutation = (
  { __typename?: 'Mutation' }
  & {
    AdminLogin: (
      { __typename?: 'AdminLoginResponse' }
      & Pick<AdminLoginResponse, 'accessToken' | 'refreshToken'>
      & {
        user: (
          { __typename?: 'AdminAuth' }
          & Pick<AdminAuth, 'id' | 'email' | 'firstName' | 'lastName' | 'status' | 'role'>
        )
      }
    )
  }
);

export type UpdateProfileMutationVariables = {
  entity: AdminUpdateInput
};

export type UpdateProfileMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'UpdateAdminUser'>
);

export type UpdateAdminPasswordMutationVariables = {
  args: ChangePasswordInput
};

export type UpdateAdminPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'UpdateAdminPassword'>
);

export const AdminLoginDocument = gql`
 mutation AdminLogin($email: String!, $password: String!) {
  AdminLogin(args: {email: $email, password: $password}) {
    accessToken
    refreshToken
    user {
      id
      email
      firstName
      lastName
      status
      role
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class AdminLoginGQL extends Apollo.Mutation<AdminLoginMutation, AdminLoginMutationVariables> {
  document = AdminLoginDocument;
}

export const UpdateProfileDocument = gql`
mutation UpdateProfile($entity: AdminUpdateInput!) {
  UpdateAdminUser(entity: $entity)
}
`;

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileGQL extends Apollo.Mutation<UpdateProfileMutation, UpdateProfileMutationVariables> {
  document = UpdateProfileDocument;
}

export const UpdateAdminPasswordDocument = gql`
mutation UpdateAdminPassword($args: ChangePasswordInput!) {
  UpdateAdminPassword(args: $args)
}
`;

@Injectable({
  providedIn: 'root'
})
export class UpdateAdminPasswordGQL extends Apollo.Mutation<UpdateAdminPasswordMutation, UpdateAdminPasswordMutationVariables> {
  document = UpdateAdminPasswordDocument;
}