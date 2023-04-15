import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGoalCategoryComponent } from './create-goal-category.component';

describe('CreateGoalCategoryComponent', () => {
  let component: CreateGoalCategoryComponent;
  let fixture: ComponentFixture<CreateGoalCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGoalCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGoalCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
