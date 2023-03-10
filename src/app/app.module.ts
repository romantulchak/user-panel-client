import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth/auth.component';
import { ErrorMessageComponent } from './components/utils/error-message/error-message.component';
import { HttpClientModule } from '@angular/common/http';
import {ToastComponent} from "./components/utils/toast/toast.component";
import { ToasterComponent } from './components/utils/toaster/toaster.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AuthComponent,
    ErrorMessageComponent,
    ToastComponent,
    ToasterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
