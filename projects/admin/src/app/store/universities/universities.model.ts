// Core
import { EntityState } from '@datorama/akita';
// GraphQL
import { UniversitiesFiltersInput } from 'generated/lms-graphql';
// Models
import { University } from '../../shared/models';

export interface UniversitiesState extends EntityState<University, any> {
    totalCount: number,
    isCRUDLoading: boolean,
    isCDEventTriggered: boolean,
    filters?: UniversitiesFiltersInput
}