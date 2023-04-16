import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
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

  protected postWithFile(url: string, file: File, body?: any): Observable<any> {
    const request = this.prepareRequest(url, file, body);
    return this.http.request(request);
  }

  protected put(url: string, body: BaseRequest): Observable<any> {
    return this.http.put(`${API_URL}/${url}`, body);
  }

  protected delete(url: string): Observable<any> {
    return this.http.delete(`${API_URL}/${url}`);
  }

  private prepareRequest(url: string, file: File, body?: any): HttpRequest<FormData> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("body", body);
    return new HttpRequest<FormData>('POST', `${API_URL}/${url}`, formData);
  }
}
