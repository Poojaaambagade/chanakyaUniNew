import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent {
  
  signUpForm!: FormGroup;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private dataServiceService : DataServiceService) { }

    student = {
      'name' : 'pooja',
      'city' : 'wardha',
       no : 9766975021
 }



  ngOnInit() {
    console.log('-----');
    this.signUpFormControl();  
    console.log('student>>>',this.student);
      //signupformcontrol function ngoninit ke andr q likha bcz jb compo load hoga tab form b load hona chaiye
    this.dataServiceService.student=this.student
  }


  signUpFormControl() {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*$'), Validators.minLength(10),this.dataServiceService.whiteSpaceValidation]],
      mobNo: ['',[Validators.pattern('[0-9]*$'),Validators.minLength(10),Validators.maxLength(10)]],
      city: ['',[Validators.pattern('[A-Za-z]*$'),Validators.minLength(3)]],
      address: ['',[Validators.pattern('[A-Za-z0-9@ -]*$')]],
      // gender: ['male'], (its getting by default selected radio button)
      gender:['',[Validators.required]] //(both can be select)
    })

  }



  back1() {
    this.router.navigateByUrl('/landing');

  }
  submit(){
    console.log(this.signUpForm.value);
    this.dataServiceService.userName=this.signUpForm.value.name;
    this.dataServiceService.listOfUsers=['pooja','poonam','yash','rahul']
    this.router.navigateByUrl('/landing');
    
  }
}
