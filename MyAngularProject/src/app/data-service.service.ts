import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  userName :any;
  listOfUsers : any;
  student:any;
  setData:any;


  constructor() { }

    //custom validation --function

    whiteSpaceValidation(name:any){
      let data = name.value;   //value ayegi with spaces
      let newData=data?.trim();
      let isValid = data.length != newData.length;
      return isValid ? {whiteSpace:true} : null; //whiteSpace is a custom error
   }
    

}
