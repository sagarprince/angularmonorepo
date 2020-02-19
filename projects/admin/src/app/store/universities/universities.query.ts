// Core
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
// GraphQL
import { UniversitiesFiltersInput } from 'generated/lms-graphql';
// Model
import { UniversitiesState } from './universities.model';
// Store
import { UniversitiesStore } from './universities.store';

@Injectable({
    providedIn: 'root'
})
export class UniversitiesQuery extends QueryEntity<UniversitiesState> {
    constructor(protected universitiesStore: UniversitiesStore) {
        super(universitiesStore);
    }

    /**
     * Select Loading
     * @return Observable
     */
    public isLoading$ = this.selectLoading();

    /**
     * Select isCRUDLoading
     * @return Observable
     */
    public isCRUDLoading$ = this.select('isCRUDLoading');

    /**
     * Select isCDEventTriggered
     * @return Observable
     */
    public isCDEventTriggered$ = this.select('isCDEventTriggered');

    /**
     * Select Entities
     * @return Observable
     */
    public entities$ = this.selectAll();

    /**
     * Select Total Count
     * @return Observable
     */
    public totalCount$ = this.select('totalCount');

    /**
     * Select Filters
     * @return Observable
     */
    public filters$ = this.select('filters');

    /**
     * Get Filters
     * @return FacultiesFiltersInput
     */
    public get filters(): UniversitiesFiltersInput {
        return this.getValue().filters;
    };
}