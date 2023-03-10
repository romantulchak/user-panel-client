import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./components/auth/auth/auth.component";
import {AuthGuard} from "./guards/auth.guard";
import {HomeComponent} from "./components/home/home.component";
import {AuthAccessGuard} from "./guards/auth-access.guard";

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], children: [
      {path: 'home', component: HomeComponent}
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
