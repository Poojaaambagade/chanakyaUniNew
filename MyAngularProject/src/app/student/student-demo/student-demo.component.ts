import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentDataServiceService } from '../student-data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-demo',
  templateUrl: './student-demo.component.html',
  styleUrls: ['./student-demo.component.css']
})
export class StudentDemoComponent {

  @Output() dataFromChild = new EventEmitter <any>
  @Input() dataFromParent:any;
  student = {
    name: 'pooja',
    no: 9766521345,
    city: 'pune',
    habbit: 'good'
  }
constructor(private studentDataServiceService : StudentDataServiceService,
    private router : Router){}

  setData() {
    this.studentDataServiceService.studentData = this.student;
    console.log("setdata", this.studentDataServiceService.studentData);

  }
  serviceFun() {
    let res = this.studentDataServiceService.test(5, 7)
    console.log('res', res);
  }
  child(value: any) {
    console.log(value.target.value);
    let data = value.target.value;
    this.dataFromChild.emit(data)
  }
  keyupEvent(event:any){
    console.log(event);
    }
    blur(){
      console.log('data');
      
    }
    focus(){
      console.log('data1');
      
    }

}
