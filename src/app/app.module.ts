import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { FormsModule } from '@angular/forms';
import { AppRegisterComponent } from './app-register/app-register.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
