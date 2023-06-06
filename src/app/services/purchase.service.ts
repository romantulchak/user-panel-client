import {BaseService} from "./base.service";
import {ShopType} from "../dto/purchase/shop-type.dto";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends BaseService {

  public getShops(): Observable<ShopType[]> {
    return super.get('purchase/shops');
  }
}
