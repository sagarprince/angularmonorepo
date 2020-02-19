// Core
import { EntityState } from '@datorama/akita';
// GraphQL 
import { FacultiesFiltersInput } from 'generated/lms-graphql';
// Models
import { Faculty, University } from '../../shared/models';

export interface FacultiesState extends EntityState<Faculty, any> {
    totalCount: number,
    isCRUDLoading: boolean,
    isCDEventTriggered: boolean,
    isUniversitiesLoading: boolean,
    allUniversities: University[],
    filters?: FacultiesFiltersInput
}