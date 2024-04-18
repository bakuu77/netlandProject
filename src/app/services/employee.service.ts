import { Position } from './../positions.enum';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EmployeeNetland } from "../employee.interface";

@Injectable({
    providedIn: 'root'
  })
export class EmployeeService {
    getFoo(): string {
        return 'foo'
    }
    constructor(private http: HttpClient) {}
    getEmployees(): Observable<EmployeeNetland[]> {
        return this.http.get<EmployeeNetland[]>(`http://localhost:3000/employees`)
    }
    removeEmployee(id: string): Observable<{}> {
        return this.http.delete(`http://localhost:3000/employees/${id}`)
    }
    addUser(name: string, age: number, isFullTime: boolean, position: Position): Observable<EmployeeNetland> {
        const random = Math.random() * Math.pow(10, 16)
        const uniqueId = random.toString(16)
        const employee = {
            name,
            age,
            isFullTime,
            position,
            id: uniqueId
        }
        return this.http.post<EmployeeNetland>(`http://localhost:3000/employees`, employee)
    }
}