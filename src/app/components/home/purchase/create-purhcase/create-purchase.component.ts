import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {PurchaseForm} from "../../../../forms/purchase.form";
import {ItemForm} from "../../../../forms/item.form";
import {PurchaseService} from "../../../../services/purchase.service";

@Component({
  selector: 'app-create-purhcase',
  templateUrl: './create-purchase.component.html',
  styleUrls: ['./create-purchase.component.scss']
})
export class CreatePurchaseComponent implements OnInit {

  public purchaseForm: FormGroup<PurchaseForm>;


  constructor(private purchaseService: PurchaseService) {
  }

  ngOnInit() {
    this.getShopNames();
    this.initForm();
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
      items: new FormArray([this.initItemForm()])
    })
  }

  private initItemForm(): FormGroup<ItemForm> {
    return new FormGroup<ItemForm>({
      name: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(99)]
      }),
      amount: new FormControl<number>(0.0, {
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
          console.log(res)
        }
      }
    )
  }
}
