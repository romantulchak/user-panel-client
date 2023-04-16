import {Component, OnInit} from '@angular/core';
import {GoalService} from "../../../../../services/goal.service";

@Component({
  selector: 'app-create-goal-category',
  templateUrl: './create-goal-category.component.html',
  styleUrls: ['./create-goal-category.component.scss']
})
export class CreateGoalCategoryComponent implements OnInit {

  public name: string;
  public file: File;

  constructor(private goalService: GoalService) {
  }

  ngOnInit() {
  }

  public uploadFile(event: any): void {
    this.file = event.target.files[0];
  }

  public create() {
    this.goalService.createCategory(this.name, this.file).subscribe(
      res => {
        console.log("Ok")
      }
    );
  }
}
