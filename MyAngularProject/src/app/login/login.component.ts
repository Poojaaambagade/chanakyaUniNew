import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formTitle:any="login form"
  test!:string;
  pan:any = "pooj";
  pan1:any=123;
  pan2:any=true;
  amount:any=5000;
  studentName="shreeya" ;
  studentMarks:any=70;
  studentActive:any=true;
  myName="pooja";
  gender=true;
  testingEventDB:any;
  city="mumbai";

  constructor(private router : Router){}



submit(){
  this.test="Testing property" ;

  }

interpolationTest(){
  return 100;
}

formTitleTest() {
  return "login form" 
}

formTitle1(){
  let title = "login form "
  return typeof(title)
}

testingEventBinding(){
  this.testingEventDB="testing" ;
}
back(){
  this.router.navigateByUrl("/landing");
}
submitOne(formData:any){
  console.log(formData);
  
}
}
