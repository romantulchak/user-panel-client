import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {PurchaseForm} from "../../../../forms/purchase.form";
import {ItemForm} from "../../../../forms/item.form";
import {PurchaseService} from "../../../../services/purchase.service";
import {ShopType} from "../../../../dto/purchase/shop-type.dto";
import {PurchaseCreateRequest} from "../../../../payload/requests/purchase/purchase-create.request";

@Component({
  selector: 'app-create-purchase',
  templateUrl: './create-purchase.component.html',
  styleUrls: ['./create-purchase.component.scss']
})
export class CreatePurchaseComponent implements OnInit {

  public purchaseForm: FormGroup<PurchaseForm>;

  public shopNames: ShopType[] = [];

  constructor(private purchaseService: PurchaseService) {
  }

  ngOnInit() {
    this.getShopNames();
    this.initForm();
  }

  public addItem(event: any): void {
    event.preventDefault();
    this.items.push(this.getItemForm())
  }

  public create(): void {
    const purchaseRequest = new PurchaseCreateRequest();
    debugger
    Object.assign(this.purchaseForm.value, purchaseRequest);
    this.purchaseService.create(purchaseRequest).subscribe(
      {
        next: () => {
          console.log('Created')
        },
        error: err => {

        }
      }
    )
  }

  private initForm(): void {
    this.purchaseForm = new FormGroup<PurchaseForm>({
      name: new FormControl<string>('',
        {
          nonNullable: true,
          validators: [Validators.required]
        }),
      shop: new FormControl<string>('',
        {
          nonNullable: true,
          validators: [Validators.required]
        }),
      dateTime: new FormControl<string>('',
        {
          nonNullable: true,
          validators: [Validators.required]
        }),
      items: new FormArray([this.getItemForm()])
    })
  }

  private getItemForm(): FormGroup<ItemForm> {
    return new FormGroup<ItemForm>({
      name: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(99)]
      }),
      amount: new FormControl<number>(1.0, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(0)]
      }),
      price: new FormControl<number>(0, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(1)]
      })
    });
  }

  private getShopNames(): void {
    this.purchaseService.getShops().subscribe(
      {
        next: (res) => {
          this.shopNames = res;
        }
      }
    )
  }

  set shops(value: string) {
    this.purchaseForm.get('shop')?.setValue(value)
  }

  get items(): FormArray {
    return this.purchaseForm.get('items') as FormArray;
  }
}
