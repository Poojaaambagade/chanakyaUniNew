import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallServiceService } from 'src/app/common/common-api-call-service.service';
import { CommonService } from 'src/app/common/common.service';


@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {

  ownerSignUpForm!: FormGroup;
  journey : any;
  postResponse : any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private commonService : CommonService ,
    private commonApiCallServiceService : CommonApiCallServiceService){}

  ngOnInit() {
    this.journey = this.commonService.journey    //( endpoint set here---this.journey=owner )
    console.log('this.journey>>>',this.journey);
    this.formDef();
  }

  formDef() {
    this.ownerSignUpForm = this.fb.group({
      name : ['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z ]*$'), this.whiteSpaceValidator]],
      email : ['',[]],
      mobNo : ['',[]],
      password : ['',[]],
      gender : ['',[]]
    })
    }
    submit(){

      console.log(this.ownerSignUpForm.value);
      
      let request = {
        Username : this.ownerSignUpForm.value.name?.split(' ').join(' '),  //if direct backend ko bhejana hai data to tghis is possible---split=extra spaces replace krta hai and join replace kiya hua just , se replace hua hoga to  space consider karke  join krta hai
        Email : this.ownerSignUpForm.value.email,
        Mobile : this.ownerSignUpForm.value.mobNo,
        Password : this.ownerSignUpForm.value.password,
        Gender : this.ownerSignUpForm.value.gender
      }
      this.commonApiCallServiceService.postApiCall(this.journey,request).subscribe(resp =>{console.log(resp);
        this.postResponse = resp;
      })
      if(this.postResponse?.id){
        this.router.navigateByUrl('/owner/ownerSuccess');
      }
}
    back(){
      this.router.navigateByUrl('/owner/ownerHome')

    }
    //custom validation doubt

    whiteSpaceValidator(nameFieldValue:any){
      let data = nameFieldValue.value;
      let newdata = data?.trim();
      let isnotvalid = data.length != newdata.length;
      return isnotvalid ? {whiteSpace : true} : null


    }
  }