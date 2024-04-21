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
        return this.http.get<EmployeeNetland[]>(`https://bakuu77.github.io/api_host/db.json`)
    }
    removeEmployee(id: number): Observable<{}> {
        return this.http.delete(`https://bakuu77.github.io/api_host/db.json/${id}`)
    }
    addUser(name: string, age: number, isFullTime: boolean, position: Position): Observable<EmployeeNetland> {
        const random = Math.random() * Math.pow(10, 16)
        const employee = {
            name,
            age,
            isFullTime,
            position,
            id: random
        }
        return this.http.post<EmployeeNetland>(`https://bakuu77.github.io/api_host/db.json`, employee)
    }
}