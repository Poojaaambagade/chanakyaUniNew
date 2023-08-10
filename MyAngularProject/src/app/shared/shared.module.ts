import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDemoComponent } from '../student/student-demo/student-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NumbersonlyDirective } from '../student/numbersonly.directive';



@NgModule({
  declarations: [
    StudentDemoComponent,
    NumbersonlyDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    StudentDemoComponent,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NumbersonlyDirective

  ]
})
export class SharedModule { }
