import { Position } from './positions.enum';

export interface EmployeeNetland {
    id: number,
    name: string;
    age: number;
    isFullTime: boolean;
    position: Position;
}