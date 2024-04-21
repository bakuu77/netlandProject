import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

export const routes: Routes = [
    {
        path: 'form',
        component: FormComponent,
        title: 'Formularz'
    },
    {
        path: 'table',
        component: EmployeeTableComponent,
        title: 'Tablica pracowników'
    },
    {
        path: '',
        component: FormComponent,
        title: 'main page'
    }
];
