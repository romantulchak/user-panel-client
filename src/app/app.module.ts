import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth/auth.component';
import { ErrorMessageComponent } from './components/utils/error-message/error-message.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ToastComponent} from "./components/utils/toast/toast.component";
import { ToasterComponent } from './components/utils/toaster/toaster.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/home/sidebar/sidebar.component';
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import { GoalComponent } from './components/home/goal/goal.component';
import { HomeContentComponent } from './components/home/home-content/home-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateGoalDialogComponent } from './components/home/goal/create-goal-dialog/create-goal-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MultiFormComponent } from './components/utils/multi-form/multi-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AuthComponent,
    ErrorMessageComponent,
    ToastComponent,
    ToasterComponent,
    HomeComponent,
    SidebarComponent,
    GoalComponent,
    HomeContentComponent,
    CreateGoalDialogComponent,
    MultiFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
