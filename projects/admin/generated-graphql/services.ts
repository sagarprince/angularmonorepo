import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AdminLoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type AdminLoginMutation = (
  { __typename?: 'Mutation' }
  & { AdminLogin: (
    { __typename?: 'AdminLoginResponse' }
    & Pick<AdminLoginResponse, 'accessToken' | 'refreshToken'>
    & { user: (
      { __typename?: 'AdminAuth' }
      & Pick<AdminAuth, 'id' | 'email' | 'firstName' | 'lastName' | 'status' | 'role'>
    ) }
  ) }
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

export type FacultiesQueryVariables = {
  params: FacultiesFiltersInput
};


export type FacultiesQuery = (
  { __typename?: 'Query' }
  & { Faculties: (
    { __typename?: 'FacultiesResponse' }
    & Pick<FacultiesResponse, 'totalCount'>
    & { entities: Array<(
      { __typename?: 'Faculty' }
      & Pick<Faculty, 'id' | 'name' | 'status'>
      & { university: Maybe<(
        { __typename?: 'University' }
        & Pick<University, 'id' | 'name' | 'status'>
      )> }
    )> }
  ) }
);

export type AddFacultyMutationVariables = {
  entity: FacultyAddInput
};


export type AddFacultyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'AddFaculty'>
);

export type UpdateFacultyMutationVariables = {
  entity: FacultyUpdateInput
};


export type UpdateFacultyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'UpdateFaculty'>
);

export type DeleteFacultyMutationVariables = {
  id: Scalars['Float']
};


export type DeleteFacultyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'DeleteFaculty'>
);

export type AdminSendOtpMutationVariables = {
  email: Scalars['String']
};


export type AdminSendOtpMutation = (
  { __typename?: 'Mutation' }
  & { AdminSendOTP: (
    { __typename?: 'AdminAuth' }
    & Pick<AdminAuth, 'id' | 'email' | 'firstName' | 'lastName' | 'status'>
  ) }
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

export type UniversitiesQueryVariables = {
  params: UniversitiesFiltersInput
};


export type UniversitiesQuery = (
  { __typename?: 'Query' }
  & { Universities: (
    { __typename?: 'UniversitiesResponse' }
    & Pick<UniversitiesResponse, 'totalCount'>
    & { entities: Array<(
      { __typename?: 'University' }
      & Pick<University, 'id' | 'name' | 'status'>
    )> }
  ) }
);

export type AddUniversityMutationVariables = {
  entity: UniversityAddInput
};


export type AddUniversityMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'AddUniversity'>
);

export type UpdateUniversityMutationVariables = {
  entity: UniversityUpdateInput
};


export type UpdateUniversityMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'UpdateUniversity'>
);

export type DeleteUniversityMutationVariables = {
  id: Scalars['Float']
};


export type DeleteUniversityMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'DeleteUniversity'>
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
export const FacultiesDocument = gql`
    query Faculties($params: FacultiesFiltersInput!) {
  Faculties(params: $params) {
    totalCount
    entities {
      id
      name
      status
      university {
        id
        name
        status
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FacultiesGQL extends Apollo.Query<FacultiesQuery, FacultiesQueryVariables> {
    document = FacultiesDocument;
    
  }
export const AddFacultyDocument = gql`
    mutation AddFaculty($entity: FacultyAddInput!) {
  AddFaculty(entity: $entity)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddFacultyGQL extends Apollo.Mutation<AddFacultyMutation, AddFacultyMutationVariables> {
    document = AddFacultyDocument;
    
  }
export const UpdateFacultyDocument = gql`
    mutation UpdateFaculty($entity: FacultyUpdateInput!) {
  UpdateFaculty(entity: $entity)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateFacultyGQL extends Apollo.Mutation<UpdateFacultyMutation, UpdateFacultyMutationVariables> {
    document = UpdateFacultyDocument;
    
  }
export const DeleteFacultyDocument = gql`
    mutation DeleteFaculty($id: Float!) {
  DeleteFaculty(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteFacultyGQL extends Apollo.Mutation<DeleteFacultyMutation, DeleteFacultyMutationVariables> {
    document = DeleteFacultyDocument;
    
  }
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
export const UniversitiesDocument = gql`
    query Universities($params: UniversitiesFiltersInput!) {
  Universities(params: $params) {
    totalCount
    entities {
      id
      name
      status
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UniversitiesGQL extends Apollo.Query<UniversitiesQuery, UniversitiesQueryVariables> {
    document = UniversitiesDocument;
    
  }
export const AddUniversityDocument = gql`
    mutation AddUniversity($entity: UniversityAddInput!) {
  AddUniversity(entity: $entity)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddUniversityGQL extends Apollo.Mutation<AddUniversityMutation, AddUniversityMutationVariables> {
    document = AddUniversityDocument;
    
  }
export const UpdateUniversityDocument = gql`
    mutation UpdateUniversity($entity: UniversityUpdateInput!) {
  UpdateUniversity(entity: $entity)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUniversityGQL extends Apollo.Mutation<UpdateUniversityMutation, UpdateUniversityMutationVariables> {
    document = UpdateUniversityDocument;
    
  }
export const DeleteUniversityDocument = gql`
    mutation DeleteUniversity($id: Float!) {
  DeleteUniversity(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteUniversityGQL extends Apollo.Mutation<DeleteUniversityMutation, DeleteUniversityMutationVariables> {
    document = DeleteUniversityDocument;
    
  }