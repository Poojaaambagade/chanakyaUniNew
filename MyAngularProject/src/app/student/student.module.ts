import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentActivityComponent } from './student-activity/student-activity.component';
import { SharedModule } from '../shared/shared.module';
import { ApiCallComponent } from './api-call/api-call.component';



@NgModule({
  declarations: [
    StudentActivityComponent,
    ApiCallComponent
    // StudentDemoComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    // ReactiveFormsModule,
    // FormsModule
    SharedModule ,
    // HttpClientModule

  ]
})
export class StudentModule { }
