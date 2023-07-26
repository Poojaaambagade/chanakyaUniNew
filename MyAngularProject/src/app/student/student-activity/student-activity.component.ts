import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-activity',
  templateUrl: './student-activity.component.html',
  styleUrls: ['./student-activity.component.css']
})
export class StudentActivityComponent {

  signInForm!: FormGroup;
  showSignInForm: boolean = false;
  passwordValue:any;
  confirmPasswordValue:any;
  isMatch!:boolean;
  constructor(private fb: FormBuilder) { }


  showForm() {

    //this.showSignInForm = true;
    this.formDef();
    this.showSignInForm = !this.showSignInForm;

  }
  formDef() {

    this.signInForm = this.fb.group({
      password: [],
      confpassword: [],
      name:['',this.nameValidation]
    })
  }
  //custom function
  nameValidation(inp:any){
    console.log(inp.value);
    let data=inp.value?.toLowerCase(); //(? value hogi to tolowercase me convert hoga otherwise error dega spo ? lagaya hai optional hota hai ? se)
    let isErr=data.includes('copy');
    return isErr ? {Err:true} : null;
    

  }

  password() {
    // console.log('------', this.signInForm.value.password);
    // console.log("--");
    this.passwordValue=this.signInForm.value.password;
    if(this.passwordValue == this.confirmPasswordValue){
      this.isMatch=true;
    }
    else{
      this.isMatch=false;
    }
  }
  confirmPassword(){
  this.confirmPasswordValue=this.signInForm.value.confpassword;
  if(this.passwordValue==this.confirmPasswordValue){
    this.isMatch=true;
  }
  else{
    this.isMatch=false;
  }
  } 
  
}
