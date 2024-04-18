import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { EmployeeNetland } from './employee.interface';
import { EmployeeService } from './services/employee.service';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FormComponent, EmployeeTableComponent]
})
export class AppComponent {
  employees: EmployeeNetland[] = []

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    console.log(this.employeeService.getFoo())
    this.employeeService.getEmployees()
      .subscribe((employees: EmployeeNetland[]) =>{
        console.log("Res: ", employees);
        this.employees = employees
      })
    // this.usersService.removeEmployee(id).subscribe(() => {
    //   this.employees = this.employees.filter()
    // });
  }
}
