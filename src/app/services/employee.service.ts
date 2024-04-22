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
        return this.http.get<EmployeeNetland[]>(`https://apinetlandbaku.pythonanywhere.com/employees/?format=json`)
    }
    removeEmployee(id: number): Observable<{}> {
        return this.http.delete(`https://apinetlandbaku.pythonanywhere.com/employees/${id}`)
    }
    addEmployee(name: string, age: number, isFullTime: boolean, position: Position): Observable<EmployeeNetland> {
        const random = Math.random() * Math.pow(10, 16)
        const employee = {
            id: random,
            name,
            age,
            isFullTime,
            position
        }
        return this.http.post<EmployeeNetland>(`https://apinetlandbaku.pythonanywhere.com/employees/`, employee)
    }
    // updateEmployee(id:number ,name: string, age: number, isFullTime: boolean, position: Position): Observable<EmployeeNetland> {
    //     const employee = {
    //         id, 
    //         name,
    //         age,
    //         isFullTime,
    //         position
    //     }
    //     return this.http.put<EmployeeNetland>(`https://apinetlandbaku.pythonanywhere.com/employees/`, employee)
    // }
}