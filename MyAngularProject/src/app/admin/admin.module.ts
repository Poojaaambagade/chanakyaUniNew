import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';



@NgModule({
  declarations: [
    
   
  
                AdminLoginComponent,
                AdminsignupComponent,
                AdminLoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
