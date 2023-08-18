import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  journey!:string;


  constructor() { }

  // custom validation
  // nameSpaceValidation(nameFieldValue : any){
  //   let data = nameFieldValue.value;
  //   let newData = data?.trim();
  //   let isNotValid = data.length != newData.length;
  //   return isNotValid ? {whiteSpace : true} : null


  // }
}
