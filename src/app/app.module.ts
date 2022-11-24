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

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    AdminLoginComponent,
    EmployeeSearchComponent,
    EmployeeDeleteComponent,
    EmployeeEditComponent,
    ViewAllEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
