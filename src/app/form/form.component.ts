
import { Position } from '../positions.enum';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  pozycje = Position;
  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder ) {}
  employeeForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true}),
    age: new FormControl<number>(0, {nonNullable: true}),
    isFullTime: new FormControl<boolean>(false, {nonNullable: true}),
    position: new FormControl<Position>(this.pozycje.Junior, {nonNullable: true}),
  })
  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group(
      {
        name: [
          '',
           [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(25)
           ]
          ],
        age: [
          '',
          [
            Validators.required,
            Validators.min(1),
            Validators.max(120)
          ]
        ],
        isFullTime: [
          false
        ],
        position: [
          '',
          [
            Validators.required
          ]
        ]
      }
    )
  }
  addEmployee(name: string, age: number, isFullTime: boolean, position: Position): void {
    this.employeeService.addEmployee(name, age, isFullTime, position).subscribe()
  }
  submitApplication():void {
    this.addEmployee(
      this.employeeForm.getRawValue().name,
      this.employeeForm.getRawValue().age,
      this.employeeForm.getRawValue().isFullTime,
      this.employeeForm.getRawValue().position)
  };
  sortPos() { return 0 };
}
