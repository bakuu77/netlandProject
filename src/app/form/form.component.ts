
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Position } from '../positions.enum';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  applyForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    isFullTime: new FormControl(false),
    position: new FormControl(''),
  })
  submitApplication() {
    console.log(this.applyForm.value)
  };
  pozycje = Position;
  sortPos() { return 0 };
}
