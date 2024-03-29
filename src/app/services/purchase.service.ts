import {BaseService} from "./base.service";
import {ShopType} from "../dto/purchase/shop-type.dto";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {PurchaseCreateRequest} from "../payload/requests/purchase/purchase-create.request";
import {Purchase} from "../dto/purchase/purchase.dto";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends BaseService {

  public getShops(): Observable<ShopType[]> {
    return super.get('purchase/shops');
  }

  public getPurchases(): Observable<Purchase> {
    return super.get('purchase/all');
  }

  public create(purchaseRequest: PurchaseCreateRequest): Observable<void> {
    return super.post('purchase/create', purchaseRequest);
  }
}
