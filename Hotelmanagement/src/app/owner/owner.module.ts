import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { SharedModule } from '../common/shared/shared.module';
import { OwnersuccesComponent } from './ownersucces/ownersucces.component';
import { NewhotelregistrationComponent } from './newhotelregistration/newhotelregistration.component';

@NgModule({
  declarations: [
    OwnerhomeComponent,
    OwnersignupComponent,
    OwnersuccesComponent,
    NewhotelregistrationComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class OwnerModule { }
