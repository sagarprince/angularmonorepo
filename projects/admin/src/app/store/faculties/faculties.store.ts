// Core
import { Injectable } from '@angular/core';
import { StoreConfig, EntityStore } from '@datorama/akita';
// Entity State
import { FacultiesState } from './faculties.model';

/**
 * Create Initial Store State
 * @return FacultiesState
 */
export function createInitialState(): FacultiesState {
    return {
        totalCount: 0,
        isCRUDLoading: false,
        isCDEventTriggered: false,
        isUniversitiesLoading: false,
        allUniversities: []
    };
}

/**
 * Config FacultiesStore
 */
@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'faculties', resettable: true })
export class FacultiesStore extends EntityStore<FacultiesState> {
    constructor() {
        super(createInitialState());
    }

    /**
     * Update Faculty Entity
     * @param entity
     * @return void
     */
    public updateFacultyEntity(entity: any) {
        this.update(entity.id, entity);
    }
}