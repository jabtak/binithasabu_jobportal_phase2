import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';


@Injectable()
export abstract class DALBase {
  myAppUrl: string = "";
  apiUrl = 'http://localhost:3000'
  constructor(public http: HttpClient) {
    this.myAppUrl = this.apiUrl;
  }

  protected ExecuteGet(url: string, param?: IRequestParam) {
    return this.http.get(this.GenerateUrl(url));
  }

  protected ExecutePost<T>(url: string, data: any) {
    return this.http.post(this.GenerateUrl(url), data);
  }
  protected ExecutePut<T>(url: string, data: any) {
       return this.http.put(this.GenerateUrl(url), data);
     }

  protected GenerateUrl(url: string) {
    let baseUrl = this.myAppUrl
    return baseUrl + url;
  }
}

export interface IRequestParam {
  Query?: Object;
}

