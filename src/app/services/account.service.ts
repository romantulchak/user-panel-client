import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {AccountInfo} from "../dto/account/account-info.dto";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService{


  public getAccountInfo(): Observable<AccountInfo> {
    return super.get('account/info');
  }
}
