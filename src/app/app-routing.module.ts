import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRegisterComponent } from './app-register/app-register.component';
import { AppLoginComponent } from './app-login/app-login.component';

const routes: Routes = [
  { path: '', component: AppLoginComponent },
  { path: 'register', component: AppRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
