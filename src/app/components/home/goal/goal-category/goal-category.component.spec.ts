import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalCategoryComponent } from './goal-category.component';

describe('GoalCategoryComponent', () => {
  let component: GoalCategoryComponent;
  let fixture: ComponentFixture<GoalCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
