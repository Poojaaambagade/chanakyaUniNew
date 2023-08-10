import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { CommonApiCallService } from '../common-api-call.service';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent {

  uName:any;
  list:any;
  studentData:any;
  getApiResponce:any;

constructor(public router: Router,
    private dataServiceService:DataServiceService,
    private commonApiCallService : CommonApiCallService) {}


    ngOnInit(){
      this.uName=this.dataServiceService.userName;   //component load hua ki show karna hai value;
      this.list=this.dataServiceService.listOfUsers;
      this.studentData=this.dataServiceService.student
    }


  login() {
    this.router.navigateByUrl("/login")
  }
  studentActivity(){
    this.router.navigateByUrl("/student/studentActivity")
  }
  directive() {
    this.router.navigateByUrl("/directives")
  }
  parent(){
    this.router.navigateByUrl('/parent')
  }
  apiCall(){
  this.router.navigateByUrl('/student/apiCall')
  }
// get api call jab button pe click karenge getapicall ke tab console me data dikhega
  getApiCall(){
   console.log('getApiCall is getting call');
   let endPoint = 'admin' ;
   this.commonApiCallService.getApi(endPoint).subscribe(resp => {this.getApiResponce=resp})
   console.log('getApiResponce',this.getApiResponce);
  }

  form(){
    this.router.navigateByUrl('/form');

  }
  // For get by id
  // get(){
  //   this.commonApiCallService.getById('admin',5).subscribe(resp => {console.log(resp);
      
  //   })
  // }
//  get by id but repeation of code happen so merge kel
get(){
  this.commonApiCallService.getApi('admin',2).subscribe(resp =>{
    console.log(resp);
    
  })

}
deleteApi(){
  this.commonApiCallService.delete('admin' , 2).subscribe(resp =>{console.log(resp);
  })
}
}
