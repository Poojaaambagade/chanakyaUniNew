import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { PathNotFoundComponent } from '../path-not-found/path-not-found.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"adminSignUp",component: AdminsignupComponent},
  {path:"**",component:PathNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
