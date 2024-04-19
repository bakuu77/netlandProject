import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

export const routes: Routes = [
    {
        path: 'form-view',
        component: FormComponent,
        title: 'Formularz'
    },
    {
        path: 'table-view',
        component: EmployeeTableComponent,
        title: 'Tablica pracowników'
    },
    {
        path: '',   redirectTo: '/form-view', pathMatch: 'full'
    }
];
