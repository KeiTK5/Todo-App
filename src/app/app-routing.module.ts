import { AuthGuard } from './auth.guard';
import { PermissionService } from './service/permission.service';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './admin/info/info.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { RegisterComponent } from './admin/register/register.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin' },
  { path: 'admin', component: InfoComponent },
  {
    path: 'project', component: ProjectComponent,
    canActivate: [PermissionService],
    data: {
      pos: 'manager'
    }
  },
  {
    path: 'task', component: TaskComponent,
    canActivate: [PermissionService],
    data: {
      pos: 'fresher'
    }
  },
  { path: 'register', component: RegisterComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
