import { Injectable } from '@angular/core';
import { Props } from '../apex/common/props';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Storage }from '../shared/utils/storage';
import { AppService } from '../shared/service/app.service';
@Injectable()
export class AuthService {
  private host = Props.API_END_POINT;
  url: string;
  constructor(private http: Http, private appService: AppService) {
    
   }

   login(data: any): Observable<any> {
    console.log(Props.API_END_POINT);
    this.url = this.host + "login";
    return this.http.post(this.url, data)
      .map(response => {
        let data = response.json();
        console.log(data);
        return response.json()
      })
  }

  storageSave(data: any){
    if(data) {
        Storage.setSessionUser(data);
        this.appService.sessionUserEmit(data);
  }
 }

register(data: any): Observable<any> {
  console.log(Props.API_END_POINT);
  this.url = this.host + "register";
  return this.http.post(this.url, data)
    .map(response => {
      let data = response.json();
      console.log(data);
      return response.json()
    })
}


reset(data: any): Observable<any> {
  console.log(Props.API_END_POINT);
  this.url = this.host + "resetPassword";
  return this.http.post(this.url, data)
    .map(response => {
      let data = response.json();
      console.log(data);
      return response.json()
    })
}

}
