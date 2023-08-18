import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccesComponent } from './ownersucces/ownersucces.component';
import { NewhotelregistrationComponent } from './newhotelregistration/newhotelregistration.component';

const routes: Routes = [
  { path:'',component:OwnerhomeComponent},
  {path:'ownerHome' , component:OwnerhomeComponent},
  {path:'ownerSignUp',component:OwnersignupComponent},
  {path:'ownerSuccess',component:OwnersuccesComponent},
  {path : 'nweHotelReg',component : NewhotelregistrationComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }


