import { Injectable } from '@angular/core';
import { Props } from '../apex/common/props';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Storage }from '../shared/utils/storage';
import { AppService } from '../shared/service/app.service';
import { HttpReq } from "../shared/common/app.entity";
import { HttpService } from '../shared/service/http.service';
@Injectable()
export class AuthService {
    REST_TYPE_GET : string = "GET";
    REST_TYPE_POST : string = "POST";
    REST_TYPE_PUT: string = "PUT";
    REST_TYPE_DELETE: string = "DELETE";
  private host = Props.API_END_POINT;
  url: string;
  constructor(private http: Http, private appService: AppService, private httpService: HttpService) {
    
   }

  //  login(data: any): Observable<any> {
  //   const httpReq: HttpReq = new HttpReq();
  //   console.log(Props.API_END_POINT);
  //   this.url = this.host + "login";
  //   httpReq.showLoader = true;
  //   return this.http.post(this.url, data)
  //     .map(response => {
  //       let data = response.json();
  //       console.log(data);
  //       return response.json()
  //     })
  // }

  login(data:any){
    const httpReq: HttpReq = new HttpReq();
     httpReq.type = this.REST_TYPE_POST;
     httpReq.url = "log";
     httpReq.showLoader = true;
     httpReq.body.data = data;
     console.log(httpReq)
     return this.httpService.restCall(httpReq);
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
