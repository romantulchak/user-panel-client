import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-goal-category',
  templateUrl: './create-goal-category.component.html',
  styleUrls: ['./create-goal-category.component.scss']
})
export class CreateGoalCategoryComponent implements OnInit {

  public name: string;

  ngOnInit() {
  }

  public uploadFile(event: any): void {

  }
}
