import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateGoalCategoryComponent} from "./create-goal-category/create-goal-category.component";

@Component({
  selector: 'app-goal-category',
  templateUrl: './goal-category.component.html',
  styleUrls: ['./goal-category.component.scss']
})
export class GoalCategoryComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public showGoalCategoryDialog(): void {
    this.dialog.open(CreateGoalCategoryComponent, {
      width: "500px",
      height: "500px"
    });
  }
}
