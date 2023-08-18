import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallServiceService } from 'src/app/common/common-api-call-service.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {
  loginForm !: FormGroup;
  showLogOut: boolean = false;
  getEndPoint : any;
  getResponce : any;
  validUser : boolean = false;


  constructor(private router: Router,
     private fb: FormBuilder,
    private commonService : CommonService,
    private commonApiCallServiceService : CommonApiCallServiceService) { }

  ngOnInit() {
    this.ownerLoginForm();
    this.getEndPoint = this.commonService.journey; //(endPoint get from home page)
    console.log('getendpoint>>>>>>>',this.getEndPoint);
    
  }

  ownerLoginForm() {
    this.loginForm = this.fb.group({
      name: [],
      password: []
    })
}

  ownerSignUp() {
    this.router.navigateByUrl("/owner/ownerSignUp");
  }
  back() {
    this.router.navigateByUrl("/home");
  }
  login() {
    console.log(this.loginForm.value);
    this.getOwnerData();    //getapi function make different function for different functinality

    if(this.getResponce) {
      this.isValidUser();

      if(this.validUser){

        this.router.navigateByUrl('/owner/ownerSuccess');
      }
      else{
        this.router.navigateByUrl('/owner/ownerHome');
      }
    }

  }
  getOwnerData(){
    this.commonApiCallServiceService.getApiCall(this.getEndPoint).subscribe(getOwnerData=>{this.getResponce = getOwnerData});
    console.log('getowner responce', this.getResponce);
    

  }
  isValidUser(){

    this.getResponce.forEach((element:any)=>{
      if(element.Username === this.loginForm.value.name && element.Password === this.loginForm.value.password){
        this.validUser = true;
      }
    });
    return

  }

}

