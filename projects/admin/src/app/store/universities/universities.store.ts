// Core
import { Injectable } from '@angular/core';
import { StoreConfig, EntityStore } from '@datorama/akita';
// Entity State
import { UniversitiesState } from './universities.model';

/**
 * Create Initial Store State
 * @return UniversitiesState
 */
export function createInitialState(): UniversitiesState {
    return {
        totalCount: 0,
        isCRUDLoading: false,
        isCDEventTriggered: false
    };
}

/**
 * Config UniversitiesStore
 */
@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'universities', resettable: true })
export class UniversitiesStore extends EntityStore<UniversitiesState> {
    constructor() {
        super(createInitialState());
    }

    /**
     * Update University Entity
     * @param entity
     * @return void
     */
    public updateUniversityEntity(entity: any) {
        this.update(entity.id, entity);
    }
}