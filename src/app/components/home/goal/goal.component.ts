import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateGoalDialogComponent} from "./create-goal-dialog/create-goal-dialog.component";
import {GoalService} from "../../../services/goal.service";
import {Goal} from "../../../dto/goal/goal.dto";
import {GoalUpdateStatusRequest} from "../../../payload/requests/goal/goal-update-status.request";

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {

  public goals: Goal[] = [];

  constructor(private dialog: MatDialog,
              private goalService: GoalService) {
  }

  ngOnInit() {
    this.getGoals();
  }

  public showGoalDialog(): void {
    this.dialog.open(CreateGoalDialogComponent,
      {
        width: "550px",
        height: "355px"
      }
    );
  }

  public updateStatus(goal: Goal): void {
    const goalUpdateStatus: GoalUpdateStatusRequest = {
      id: goal.id
    };
    this.goalService.updateGoalStatus(goalUpdateStatus).subscribe({
      next: (res) => {
        goal.active = res;
      }
    });
  }

  private getGoals(): void {
    this.goalService.getGoals().subscribe(
      {
        next: (res) => {
          this.goals = res;
        }
      }
    );
  }
}
