import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataServiceService {

  studentData:any;
  


  constructor(){}

  test(a : number , b : number){
    return a * b ;
  }  
}

  
