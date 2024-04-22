import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Position } from '../positions.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {
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
  // updateEmployee(id:number ,name: string, age: number, isFullTime: boolean, position: Position): void {
  //   this.employeeService.updateEmployee(id, name, age, isFullTime, position).subscribe()
  // }
  submitApplication():void {
    // this.updateEmployee(
    //   this.employeeForm.getRawValue().name,
    //   this.employeeForm.getRawValue().age,
    //   this.employeeForm.getRawValue().isFullTime,
    //   this.employeeForm.getRawValue().position)
  };
  sortPos() { return 0 };
}
