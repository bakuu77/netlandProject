
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EmployeeNetland } from '../employee.interface';
import { Position } from '../positions.enum';
import { EmployeeService } from '../services/employee.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive ],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss'
})
export class EmployeeTableComponent {
  employees: EmployeeNetland[] = []
  
  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.employeeService.getEmployees()
      .subscribe((data) =>{
        console.log("Res: ", data)
        for (var employee in data) {
          console.log(employee)
        }
        this.employees = data
      })
  }
  removeUser(id: number): void {
    this.employeeService.removeEmployee(id).subscribe(() => {
      this.employees = this.employees.filter(employee => employee.id !== id)
    })
    console.log(`Removed user of id `,id,`, his name was `)
  }
  addUser(name: string, age: number, isFullTime: boolean, position: Position) {
    this.employeeService.addUser(name, age, isFullTime, position).subscribe(newEmployee => {
      console.log('newEmployee', newEmployee)
      this.employees.push(newEmployee)
    })
  }
}
