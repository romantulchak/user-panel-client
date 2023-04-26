import {GoalCategory} from "./goal-category,dto";

export interface Goal {
  id: string;
  name: string;
  price: number;
  active: boolean;
  category: GoalCategory;
  addDate: string;
  percentToCompletion: number;
}
