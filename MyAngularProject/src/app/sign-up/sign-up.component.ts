import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  constructor(private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log('-----');
    this.signUpFormControl();    //signupformcontrol function ngoninit ke andr q likha bcz jb compo load hoga tab form b load hona chaiye
  }
  signUpFormControl() {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*$'), Validators.minLength(10)]],
      mobNo: ['',[Validators.pattern('[0-9]*$'),Validators.minLength(10),Validators.maxLength(10)]],
      city: ['',[Validators.pattern('[A-Za-z]*$'),Validators.minLength(3)]],
      address: ['',[Validators.pattern('[A-Za-z0-9@ -]*$')]],
      gender: ['male']
    })

  }



  back1() {
    this.router.navigateByUrl('landing');

  }
  submit(){
    console.log(this.signUpForm.value);
    
  }
}
