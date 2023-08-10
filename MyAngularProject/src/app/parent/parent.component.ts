import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentData:any;
  setData:any;
  valueFromChild:any;
  parent:any;
  pData:any;
  

  constructor(private dataServiceService:DataServiceService){}

  set(){
    this.dataServiceService.setData='poonam';
     }
     get(value : any){
      console.log(value);
      this.valueFromChild=value 
      

     }
     getdata(data:any){
      console.log(data)
      this.parent=data;
     }



  

 




}
