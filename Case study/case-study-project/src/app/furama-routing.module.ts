import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { BodyRightComponent } from './body-right/body-right.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';

const routes:Routes=[
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'customer',component:ListCustomerComponent},
  {path:'customer/create',component:CreateCustomerComponent},
  {path:'customer/edit:id',component:EditCustomerComponent},
  {path:'home',component:BodyRightComponent},
  {path:'employee',component:ListEmployeeComponent},
  {path:'employee/create',component:CreateEmployeeComponent},
  {path:'employee/edit:id',component:EditEmployeeComponent}
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class FuramaRoutingModule { }
