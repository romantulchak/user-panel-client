import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseRequest} from "../payload/requests/base.request";
import {environment} from "../../environments/environment";

const API_URL = environment.apiUrlV1;

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  protected constructor(private http: HttpClient) { }

  protected get(url: string): Observable<any> {
    return this.http.get<any>(`${API_URL}/${url}`)
  }

  protected post(url: string, body: BaseRequest): Observable<any> {
    return this.http.post(`${API_URL}/${url}`, body);
  }

  protected put(url: string, body: BaseRequest): Observable<any> {
    return this.http.put(`${API_URL}/${url}`, body);
  }

  protected delete(url: string): Observable<any> {
    return this.http.delete(`${API_URL}/${url}`);
  }
}
