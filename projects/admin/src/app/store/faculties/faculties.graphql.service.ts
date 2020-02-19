import { Maybe, Scalars, Mutation, University, Faculty, FacultiesResponse, FacultiesFiltersInput, FacultyAddInput, FacultyUpdateInput } from 'generated/lms-graphql';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type FacultiesQueryVariables = {
    params: FacultiesFiltersInput
};

export type FacultiesQuery = (
    { __typename?: 'Query' }
    & {
        Faculties: (
            { __typename?: 'FacultiesResponse' }
            & Pick<FacultiesResponse, 'totalCount'>
            & {
                entities: Array<(
                    { __typename?: 'Faculty' }
                    & Pick<Faculty, 'id' | 'name' | 'status'>
                    & {
                        university: Maybe<(
                            { __typename?: 'University' }
                            & Pick<University, 'id' | 'name' | 'status'>
                        )>
                    }
                )>
            }
        )
    }
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