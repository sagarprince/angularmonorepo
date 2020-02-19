// Core
import { Injectable } from '@angular/core';
import { tap, finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// GraphQL
import { UniversitiesResponse, UniversityAddInput, UniversityUpdateInput, UniversitiesFiltersInput } from 'generated/lms-graphql';
import { UniversitiesGQL, AddUniversityGQL, UpdateUniversityGQL, DeleteUniversityGQL } from './universities.graphql.service';

// Store
import { UniversitiesStore } from './universities.store';

@Injectable({
    providedIn: 'root'
})
export class UniversitiesService {
    constructor(
        private universitiesStore: UniversitiesStore,
        private universitiesGQL: UniversitiesGQL,
        private addUniversityGQL: AddUniversityGQL,
        private updateUniversityGQL: UpdateUniversityGQL,
        private deleteUniversityGQL: DeleteUniversityGQL
    ) { }

    /**
     * Trigger Create or Delete Event
     * @return void
     */
    public triggerCDEvent() {
        this.universitiesStore.update({ isCDEventTriggered: true });
        setTimeout(() => {
            this.universitiesStore.update({ isCDEventTriggered: false });
        }, 1000);
    }

    /**
     * Set Filters
     * @param filters
     * @return void
     */
    public setFilters(filters: UniversitiesFiltersInput) {
        this.universitiesStore.update({ filters: filters });
    }

    /**
     * Remove Filters
     * @return void
     */
    public removeFilters() {
        this.universitiesStore.update({ filters: undefined });
    }

    /**
     * Get Universities List
     * @param params 
     * @return Observable
     */
    public getUniversitiesList(params: any = {}): Observable<UniversitiesResponse> {
        this.universitiesStore.setLoading(true);
        return this.universitiesGQL.fetch({
            params
        }).pipe(
            map((response: any) => {
                const data = response.data.Universities as UniversitiesResponse;
                const entities = data.entities;
                return {
                    totalCount: data.totalCount,
                    entities: entities,
                };
            }),
            tap((data: any) => {
                this.universitiesStore.set(data.entities);
                this.universitiesStore.update({ totalCount: data.totalCount });
                return data;
            }),
            finalize(() => this.universitiesStore.setLoading(false))
        );
    }

    /**
     * Add University
     * @param entity
     * @return Observable
     */
    public addUniversity(entity: UniversityAddInput): Observable<any> {
        this.universitiesStore.update({ isCRUDLoading: true });
        return this.addUniversityGQL.mutate({
            entity
        }).pipe(
            map((response: any) => {
                return response.data.AddUniversity;
            }),
            tap((data: boolean) => {
                this.triggerCDEvent();
                return data;
            }),
            finalize(() => this.universitiesStore.update({ isCRUDLoading: false }))
        );
    }

    /**
     * Update University
     * @param entity
     * @return Observable
     */
    public updateUniversity(entity: UniversityUpdateInput): Observable<any> {
        this.universitiesStore.update({ isCRUDLoading: true });
        return this.updateUniversityGQL.mutate({
            entity
        }).pipe(
            map((response: any) => {
                return response.data.UpdateUniversity;
            }),
            tap((data: boolean) => {
                this.universitiesStore.updateUniversityEntity(entity);
                return data;
            }),
            finalize(() => this.universitiesStore.update({ isCRUDLoading: false }))
        );
    }

    /**
     * Delete University
     * @param id
     * @return Observable
     */
    public deleteFaculty(id: number): Observable<any> {
        this.universitiesStore.update({ isCRUDLoading: true });
        return this.deleteUniversityGQL.mutate({
            id
        }).pipe(
            map((response: any) => {
                return response.data.DeleteUniversity;
            }),
            tap((data: boolean) => {
                this.triggerCDEvent();
                return data;
            }),
            finalize(() => this.universitiesStore.update({ isCRUDLoading: false }))
        );
    }
}