import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { CreateGoalCategoryComponent } from './components/home/goal/goal-category/create-goal-category/create-goal-category.component';
import { GoalCategoryComponent } from './components/home/goal/goal-category/goal-category.component';
import {RouterModule} from "@angular/router";
import { PurchaseComponent } from './components/home/purchase/purchase.component';
import { CreatePurchaseComponent } from './components/home/purchase/create-purhcase/create-purchase.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

registerLocaleData(en);

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
    MultiFormComponent,
    CreateGoalCategoryComponent,
    GoalCategoryComponent,
    PurchaseComponent,
    CreatePurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    RouterModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzButtonModule,
    NzInputNumberModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
