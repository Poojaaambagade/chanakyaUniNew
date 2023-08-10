import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common-api-call.service';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent{

  signUpForm!:FormGroup;
  postApiResponce:any;
  studentName:any;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private dataServiceService : DataServiceService,
    private commonApiCallService : CommonApiCallService){}

    ngOnInit() {
      console.log('-----');
      this.signUpFormControl();  
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
  submit(){
    console.log(this.signUpForm.value);
    let endPoint = 'admin';
    this.commonApiCallService.postApiCall(endPoint,this.signUpForm.value).subscribe(responce => {this.postApiResponce=responce})

  }
  inputBox(){
    console.log(this.studentName);
    let reqData={
      "studentName" : this.studentName
    }
    let urlEndPoint = 'studentName';
    if(this.studentName.length>=2){
      this.commonApiCallService.postApiCall(urlEndPoint,reqData).subscribe(resp => {console.log(resp)
      })

    }
 }
 back1() {
  this.router.navigateByUrl('/landing');

}



  }

