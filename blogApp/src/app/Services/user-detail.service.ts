import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
 private saveUserUrl = environment.saveUserUrl;
 private getUserUrl = environment.getUserUrl;

  constructor(private httpClient: HttpClient) {}

  saveUsers(formData:any) : Observable<any>{
    const httpOptions ={
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      'Content-Type' : 'application/json'
    })
  };
    return this.httpClient.post(this.saveUserUrl,formData,httpOptions);

  }

  getUserDetails() : Observable<any>{
    const httpOptions ={
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type' : 'application/json'
    })
  };
    return this.httpClient.get(this.getUserUrl,httpOptions);

  }
}
