import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {

  // 1) adminUrl = 'http://localhost:3000/admin';
  // 2) studentNameUrl = "http://localhost:3000/studentName"
  url = "http://localhost:3000/";

  constructor(private httpClient : HttpClient ){}


  //  1)
  // postApiCall(formData: any){
  //   return this.httpClient.post(this.adminUrl,formData);

  // }
  //   2)
  // postApiCallForstudentName(data:any){
  //   return this.httpClient.post(this.studentNameUrl,data);
  // }


// reduced code size or reusability of code

// 3)
postApiCall(endPoint:string , data:any){
  let apiUrl = this.url + endPoint;
  return this.httpClient.post(apiUrl , data)
}
// getApi(endPoint:any){
//   let getUrl = this.url + endPoint ;
//   return this.httpClient.get(getUrl);
// }
// getById(endPoint:any,id:any){
//   let getByUrl = this.url + endPoint + '/' + id;
//   return this.httpClient.get(getByUrl)
// }
// repeatation of code hot ah soo
getApi(endPoint:any , id?:any){
  let url = id ? this.url+endPoint+'/'+2 : this.url+endPoint;
  return this.httpClient.get(url);

}
delete(endPoint:any , id :any){
  let url = this.url + endPoint + '/' + 4;
  return this.httpClient.delete(url)

}

}
