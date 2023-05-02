import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {AccountInfo} from "../../dto/account/account-info.dto";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public accountInfo: AccountInfo;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.getAccountInfo();
  }

  private getAccountInfo(): void {
    this.accountService.getAccountInfo().subscribe({
      next: (res) => {
        this.accountInfo = res;
      }
    });
  }
}
