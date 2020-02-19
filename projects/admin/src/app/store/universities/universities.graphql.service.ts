import { Scalars, Mutation, University, UniversitiesResponse, UniversitiesFiltersInput, UniversityAddInput, UniversityUpdateInput } from 'generated/lms-graphql';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type UniversitiesQueryVariables = {
    params: UniversitiesFiltersInput
};

export type UniversitiesQuery = (
    { __typename?: 'Query' }
    & {
        Universities: (
            { __typename?: 'UniversitiesResponse' }
            & Pick<UniversitiesResponse, 'totalCount'>
            & {
                entities: Array<(
                    { __typename?: 'University' }
                    & Pick<University, 'id' | 'name' | 'status'>
                )>
            }
        )
    }
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