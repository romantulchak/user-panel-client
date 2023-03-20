import {Component, OnInit} from '@angular/core';
import {FinanceResponse} from "../../../payload/response/account/finance.response";
import {FinanceService} from "../../../services/finance.service";

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  public finance: FinanceResponse;

  constructor(private financeService: FinanceService) {
  }

  ngOnInit(): void {
    this.getFinanceInfo();
  }

  private getFinanceInfo(): void {
    this.financeService.getInfo().subscribe(
      res => {
        this.finance = res;
      }
    )
  }
}
