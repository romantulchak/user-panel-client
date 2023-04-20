import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateGoalCategoryComponent} from "./create-goal-category/create-goal-category.component";
import {GoalService} from "../../../../services/goal.service";
import {GoalCategory} from "../../../../dto/goal/goal-category,dto";
import {ToastService} from "../../../../services/toast.service";

@Component({
  selector: 'app-goal-category',
  templateUrl: './goal-category.component.html',
  styleUrls: ['./goal-category.component.scss']
})
export class GoalCategoryComponent implements OnInit {

  public goalCategories: GoalCategory[];

  constructor(private dialog: MatDialog,
              private goalService: GoalService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  public showGoalCategoryDialog(): void {
    this.dialog.open(CreateGoalCategoryComponent, {
      width: "500px",
      height: "500px"
    });
  }

  private getCategories(): void {
    this.goalService.getCategories().subscribe(
      {
        next: (res: GoalCategory[]) => {
          this.goalCategories = res;
        },
        error: (error) => {
          this.toastService.showError('Error', error.message)
        }
      }
    )
  }
}
