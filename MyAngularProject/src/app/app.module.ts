import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { CharonlyDirective } from './charonly.directive';
import { FilterPipe } from './filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    PathNotFoundComponent,
    LandingScreenComponent,
    DirectivesInAngularComponent,
    ParentComponent,
    ChildComponent,
    FormComponent,
    CharonlyDirective,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    // SharedModule 
    SharedModule ,
    // HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

