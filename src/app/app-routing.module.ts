import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./components/auth/auth/auth.component";
import {AuthGuard} from "./guards/auth.guard";
import {HomeComponent} from "./components/home/home.component";
import {AuthAccessGuard} from "./guards/auth-access.guard";
import {HomeContentComponent} from "./components/home/home-content/home-content.component";
import {GoalComponent} from "./components/home/goal/goal.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeContentComponent},
      {path: 'goal', component: GoalComponent}
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
