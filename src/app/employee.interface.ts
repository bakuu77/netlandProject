import { Position } from './positions.enum';

export interface EmployeeNetland {
    id: string,
    name: string;
    age: number;
    isFullTime: boolean;
    position: Position;
}