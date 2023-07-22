import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerSignUpComponent } from './owner-sign-up/owner-sign-up.component';

const routes: Routes = [
  {path:"ownerLogin",component:OwnerLoginComponent},
  {path:"ownerSignUp",component:OwnerSignUpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
