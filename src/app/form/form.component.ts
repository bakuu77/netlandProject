
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

enum Positions {
  Junior = "Junior",
  Mid = "Mid",
  Senior = "Senior",
  Manager = "Manager"
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <p>
      form works!
    </p>
    <form [formGroup]="applyForm" (submit)="submitApplication()">
      <label for="imieNazwisko">Imie i nazwisko:</label>
      <input type="text" id="imieNazwisko" formControlName="name">
      <br>
      <label for="wiek">Wiek:</label>
      <input type="number" id="wiek" formControlName="age">
      <br>
      <label for="pelnyEtat">Czy pracuje na pelny etat?</label>
      <input type="checkbox" id="pelnyEtat" formControlName="isFullTime">
      <br>
      <label for="Pozycja">Na jakiej pozycji sie znajduje?</label>
      <select id="Pozycja" formControlName="position">
        <option *ngFor="let pozycja of pozycje | keyvalue: sortPos">{{pozycja.value}}</option>
      </select>
      <hr>
      <button type="submit" class="primary">Zastosuj</button>
  `,
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
  pozycje = Positions;
  sortPos() { return 0 };
}
