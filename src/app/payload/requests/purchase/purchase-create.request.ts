import {ItemRequest} from "./item-create.request";
import {BaseRequest} from "../base.request";

export class PurchaseCreateRequest implements BaseRequest {
  name: string;
  shop: string;
  dateTime: Date;
  items: ItemRequest[]
}
