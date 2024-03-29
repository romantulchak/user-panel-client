import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./components/auth/auth/auth.component";
import {AuthGuard} from "./guards/auth.guard";
import {HomeComponent} from "./components/home/home.component";
import {AuthAccessGuard} from "./guards/auth-access.guard";
import {HomeContentComponent} from "./components/home/home-content/home-content.component";
import {GoalComponent} from "./components/home/goal/goal.component";
import {GoalCategoryComponent} from "./components/home/goal/goal-category/goal-category.component";
import {PurchaseComponent} from "./components/home/purchase/purchase.component";
import {CreatePurchaseComponent} from "./components/home/purchase/create-purhcase/create-purchase.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeContentComponent},
      {path: 'goal', component: GoalComponent},
      {path: 'goal-category', component: GoalCategoryComponent},
      {path: 'purchase', component: PurchaseComponent, children: [
          {path: '', redirectTo: 'purchase', pathMatch: 'full'},
          {path: 'create', component: CreatePurchaseComponent}
        ]
      }
    ]
  },
  {path: 'auth', component: AuthComponent, canActivate: [AuthAccessGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
