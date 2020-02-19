// Core
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
// GraphQL
import { FacultiesFiltersInput } from 'generated/lms-graphql';
// Model
import { FacultiesState } from './faculties.model';
// Store
import { FacultiesStore } from './faculties.store';

@Injectable({
    providedIn: 'root'
})
export class FacultiesQuery extends QueryEntity<FacultiesState> {
    constructor(protected facultiesStore: FacultiesStore) {
        super(facultiesStore);
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
     * Select isUniversitiesLoading
     * @return Observable
     */
    public isUniversitiesLoading$ = this.select('isUniversitiesLoading');

    /**
     * Select All Universities
     * @return Observable
     */
    public allUniversities$ = this.select('allUniversities');

    /**
     * Select Filters
     * @return Observable
     */
    public filters$ = this.select('filters');

    /**
     * Get Filters
     * @return FacultiesFiltersInput
     */
    public get filters(): FacultiesFiltersInput {
        return this.getValue().filters;
    };
}