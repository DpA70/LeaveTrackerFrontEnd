import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { UserGuard } from './guards/user.guard';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent,
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path : 'admin',
    component : AdminComponent,
    pathMatch : 'full',
    canActivate : [AuthGuardGuard]
  },
  {
    path : 'user',
    component : UserComponent,
    pathMatch : 'full',
    canActivate : [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
