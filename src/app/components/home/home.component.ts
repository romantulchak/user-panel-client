import {Component, OnInit} from '@angular/core';
import {FinanceService} from "../../services/finance.service";
import {FinanceResponse} from "../../payload/response/account/finance.response";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public finance: FinanceResponse;
  constructor(private financeService: FinanceService) {
  }

  ngOnInit(): void {
    this.financeService.getInfo().subscribe(
      res => {
        this.finance = res;
      }
    )
  }

}
