import { University } from './university';

export interface Faculty {
    id: number;
    university: University;
    name: string;
    status: boolean;
}