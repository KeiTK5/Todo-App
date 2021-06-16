import { AuthService } from './../service/auth.service';
import { AuthGuard } from './../auth.guard';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { EmployComponent } from './employ/employ.component';
import { LoginComponent } from './login/login.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

const admin: Routes = [
  {
    path: 'manager', component: LoginComponent
  },
  {
    path: 'employ', component: EmployComponent
  },

]

@NgModule({
  declarations: [LoginComponent, EmployComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(admin),
    FormsModule,
  ],
  providers: [AuthService, AuthGuard, JwtHelperService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],

})
export class AdminModule { }
