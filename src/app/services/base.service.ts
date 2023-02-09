import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseRequest} from "../payload/requests/base.request";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  protected constructor(private http: HttpClient) { }

  protected get(url: string): Observable<any> {
    return this.http.get(url)
  }

  protected post(url: string, body: BaseRequest): Observable<any> {
    return this.http.post(url, body);
  }

  protected put(url: string, body: BaseRequest): Observable<any> {
    return this.http.put(url, body);
  }

  protected delete(url: string): Observable<any> {
    return this.http.delete(url);
  }
}
