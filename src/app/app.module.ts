import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { ViewAllEmployeesComponent } from './view-all-employees/view-all-employees.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Route, RouterModule, Routes } from '@angular/router';
const myRoute:Routes=[
  {
    path:"",
    component:EmployeeAddComponent
  },
  {
    path:"search",
    component:EmployeeSearchComponent
  },
  {
    path:"delete",
    component:EmployeeDeleteComponent
  }, {
    path:"edit",
    component:EmployeeEditComponent
  },
  {
    path:"viewallemployees",
    component:ViewAllEmployeesComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    AdminLoginComponent,
    EmployeeSearchComponent,
    EmployeeDeleteComponent,
    EmployeeEditComponent,
    ViewAllEmployeesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
