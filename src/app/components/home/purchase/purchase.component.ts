import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreatePurchaseComponent} from "./create-purhcase/create-purchase.component";
import {PurchaseService} from "../../../services/purchase.service";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  constructor(private purchaseService: PurchaseService) {
  }

  ngOnInit(): void {
    this.purchaseService.getPurchases().subscribe(
      {
        next: res => {
          console.log(res)
        },
        error: err => {

        }
      }
    )
  }
}
