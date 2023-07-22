import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerSignUpComponent } from './owner-sign-up/owner-sign-up.component';


@NgModule({
  declarations: [
    OwnerLoginComponent,
    OwnerSignUpComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
