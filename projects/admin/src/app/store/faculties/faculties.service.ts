// Core
import { Injectable } from '@angular/core';
import { tap, finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// GraphQL
import { FacultiesResponse, FacultyAddInput, FacultyUpdateInput, UniversitiesResponse, FacultiesFiltersInput } from 'generated/lms-graphql';
import { FacultiesGQL, AddFacultyGQL, UpdateFacultyGQL, DeleteFacultyGQL } from './faculties.graphql.service';
import { UniversitiesGQL } from '../universities/universities.graphql.service';

// Store
import { FacultiesStore } from './faculties.store';
import { University } from '../../shared/models';

@Injectable({
    providedIn: 'root'
})
export class FacultiesService {
    constructor(
        private facultiesStore: FacultiesStore,
        private facultiesGQL: FacultiesGQL,
        private addFacultyGQL: AddFacultyGQL,
        private updateFacultyGQL: UpdateFacultyGQL,
        private deleteFacultyGQL: DeleteFacultyGQL,
        private universitiesGQL: UniversitiesGQL
    ) { }

    /**
     * Trigger Create or Delete Event
     * @return void
     */
    public triggerCDEvent() {
        this.facultiesStore.update({ isCDEventTriggered: true });
        setTimeout(() => {
            this.facultiesStore.update({ isCDEventTriggered: false });
        }, 1000);
    }

    /**
     * Set Filters
     * @param filters
     * @return void
     */
    public setFilters(filters: FacultiesFiltersInput) {
        this.facultiesStore.update({ filters: filters });
    }

    /**
     * Remove Filters
     * @return void
     */
    public removeFilters() {
        this.facultiesStore.update({ filters: undefined });
    }

    /**
     * Get Faculties List
     * @param params 
     * @return Observable
     */
    public getFacultiesList(params: any = {}): Observable<FacultiesResponse> {
        this.facultiesStore.setLoading(true);
        return this.facultiesGQL.fetch({
            params
        }).pipe(
            map((response: any) => {
                const data = response.data.Faculties as FacultiesResponse;
                const entities = data.entities;
                return {
                    totalCount: data.totalCount,
                    entities: entities,
                };
            }),
            tap((data: any) => {
                this.facultiesStore.set(data.entities);
                this.facultiesStore.update({ totalCount: data.totalCount });
                return data;
            }),
            finalize(() => this.facultiesStore.setLoading(false))
        );
    }

    /**
     * Add Faculty
     * @param entity
     * @return Observable
     */
    public addFaculty(entity: FacultyAddInput): Observable<any> {
        this.facultiesStore.update({ isCRUDLoading: true });
        return this.addFacultyGQL.mutate({
            entity
        }).pipe(
            map((response: any) => {
                return response.data.AddFaculty;
            }),
            tap((data: boolean) => {
                this.triggerCDEvent();
                return data;
            }),
            finalize(() => this.facultiesStore.update({ isCRUDLoading: false }))
        );
    }

    /**
     * Update Faculty
     * @param entity
     * @return Observable
     */
    public updateFaculty(entity: FacultyUpdateInput, university: University): Observable<any> {
        this.facultiesStore.update({ isCRUDLoading: true });
        return this.updateFacultyGQL.mutate({
            entity
        }).pipe(
            map((response: any) => {
                return response.data.UpdateFaculty;
            }),
            tap((data: boolean) => {
                const faculty: any = { ...entity, university: university };
                this.facultiesStore.updateFacultyEntity(faculty);
                return data;
            }),
            finalize(() => this.facultiesStore.update({ isCRUDLoading: false }))
        );
    }

    /**
     * Delete Faculty
     * @param id
     * @return Observable
     */
    public deleteFaculty(id: number): Observable<any> {
        this.facultiesStore.update({ isCRUDLoading: true });
        return this.deleteFacultyGQL.mutate({
            id
        }).pipe(
            map((response: any) => {
                return response.data.DeleteFaculty;
            }),
            tap((data: boolean) => {
                this.triggerCDEvent();
                return data;
            }),
            finalize(() => this.facultiesStore.update({ isCRUDLoading: false }))
        );
    }

    /**
     * Get All Universities List
     * @param params 
     * @return Observable
     */
    public getAllUniversitiesList(): Observable<UniversitiesResponse> {
        this.facultiesStore.update({ isUniversitiesLoading: true });
        return this.universitiesGQL.fetch({
            params: {
                offset: 0,
                limit: -1
            }
        }).pipe(
            map((response: any) => {
                const data = response.data.Universities as UniversitiesResponse;
                const entities = data.entities;
                return {
                    entities: entities
                };
            }),
            tap((data: any) => {
                const allUniversities = [
                    {
                        id: "",
                        name: "All"
                    },
                    ...data.entities
                ];
                this.facultiesStore.update({ allUniversities: allUniversities });
                return data;
            }),
            finalize(() => this.facultiesStore.update({ isUniversitiesLoading: false }))
        );
    }
}