import {Component, OnInit} from '@angular/core';
import {UserTokenService} from "../../../services/user-token.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private userToken: UserTokenService) {
  }

  ngOnInit(): void {
  }

  public exit(): void {
    this.userToken.exit();
    window.location.reload();
  }

}
