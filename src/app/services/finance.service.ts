import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {FinanceResponse} from "../payload/response/account/finance.response";

@Injectable({
  providedIn: 'root'
})
export class FinanceService extends BaseService {

  public getInfo(): Observable<FinanceResponse> {
    return this.get(`finance/info`);
  }
}
