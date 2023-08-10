import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonApiCallService } from '../common-api-call.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form! : FormGroup;
  formprop : any;
  adminData : any;
  heading : any[]=['name','mobileNo','city','gender'];
  myName =  'poonam';
  date = new Date();
  searchVal : any;
  inputValue:any;

  constructor(private fb : FormBuilder,
    private commonApiCallService : CommonApiCallService){}

  ngOnInit(){
    console.log('---');
    this.myForm();
    this.getApiTable();
  }
  myForm(){
    this.form = this.fb.group({
      name : ['',[]],
      mobNo : ['',[]]
    })

  }

  save(){
    console.log('form data',this.form.value);
    let urlEndPoint = 'form';
    let formData = {
      Name :  this.form.value.name,
      MobNo : this.form.value.mobNo
    }
    this.commonApiCallService.postApiCall(urlEndPoint,formData).subscribe(resp => {this.formprop = resp})

  }
  getApiTable(){
    let endPoint = 'admin';
    this.commonApiCallService.getApi(endPoint).subscribe(data => {console.log('get data',data);
    this.adminData=data;
    })
  }
  // input val and search function for 2nd method i.e on button search if we use 1st way then it have to be comment down
  inputval(val:any){
    console.log('val',val.target.value);
    this.inputValue =  val.target.value
    
  }
  search(){
    this.searchVal = this.inputValue

  }
}
