import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';

const routes: Routes = [
{path:"",component:LandingScreenComponent},
{path:"",component:HomeComponent },
{path:"landing",component:LandingScreenComponent},
{path:"login",component : LoginComponent},
{path:"signUp",component:SignUpComponent},
{path:"home",component:HomeComponent},
{path:"directives",component:DirectivesInAngularComponent},
{path:"admin",loadChildren:()=>import("./admin/admin.module").then(mod=>mod.AdminModule)},
{path:"owner",loadChildren:()=>import("./owner/owner.module").then(mod=>mod.OwnerModule)},
{path:"user",loadChildren:()=>import("./user/user.module").then(mod=>mod.UserModule)},
{path:"student",loadChildren:()=>import("./student/student.module").then(mod=>mod.StudentModule)}
// {path:"**",component:PathNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
