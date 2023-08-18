import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallServiceService {

  url = 'http://localhost:3000/';

  constructor(private http : HttpClient){}

  postApiCall(endPoint : any , formData : any){
      let url = this.url + endPoint ;
      return this.http.post(url , formData)

    }

    getApiCall(endPoint:any){
      let url = this.url + endPoint;
      return this.http.get(url);
    }

  }

  





  
