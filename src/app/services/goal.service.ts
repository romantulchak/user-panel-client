import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {GoalCategory} from "../dto/goal/goal-category,dto";
import {GoalCreateRequest} from "../payload/requests/goal/goal-create.request";

@Injectable({
  providedIn: 'root'
})
export class GoalService extends BaseService {

  public createCategory(name: string, file: File): Observable<void> {
    return super.postWithFile(`goal/category/${name}`, file);
  }

  public getCategories(): Observable<GoalCategory[]> {
    return super.get(`goal/categories`);
  }

  public createGoal(createGoalRequest: GoalCreateRequest): Observable<void> {
    const mockFile = new File([], 'mock');
    return super.postWithFile('goal/create', mockFile, createGoalRequest);
  }

}
