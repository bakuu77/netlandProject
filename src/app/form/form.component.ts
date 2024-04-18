
import { Position } from '../positions.enum';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  constructor(private employeeService: EmployeeService) {}
  employeeForm = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    isFullTime: new FormControl(),
    position: new FormControl(),
  })
  addUser(name: string, age: number, isFullTime: boolean, position: Position) {
    this.employeeService.addUser(name, age, isFullTime, position).subscribe()
  }
  submitApplication() {
    console.log(this.employeeForm.value)
    this.addUser(
      this.employeeForm.value.name,
      this.employeeForm.value.age,
      this.employeeForm.value.isFullTime,
      this.employeeForm.value.position)
  };
  pozycje = Position;
  sortPos() { return 0 };
  setNewName(employeeName: string): void {
    console.log('setNewName', employeeName)
  }
  
}
