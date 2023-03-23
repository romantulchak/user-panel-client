import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateGoalDialogComponent} from "./create-goal-dialog/create-goal-dialog.component";

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  public showGoalDialog(): void {
    this.dialog.open(CreateGoalDialogComponent);
  }

}
