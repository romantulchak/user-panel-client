import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GoalService extends BaseService {

  public createCategory(name: string, file: File): Observable<void> {
    return super.postWithFile(`goal/category/${name}`, file);
  }

}
