import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  data:any;
  @Input() dataFromParent:any;
  @Output() dataFromChild = new EventEmitter <any>
  @ Output() ngChild = new EventEmitter <any>
 

   //now we can used this property anywhere in project but 
  // the selector mention krna pdega child ka jaha used krna hai vaha

  constructor(private dataServiceService : DataServiceService){}


  getData(){

    this.data=this.dataServiceService.setData
    console.log('getdata',this.data);
    
  }
  child(data : any){
    console.log(data.target.value);
    let value = data.target.value;
    this.dataFromChild.emit(value);
  }
  
}
