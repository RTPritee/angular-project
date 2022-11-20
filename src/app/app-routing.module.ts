import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {
    path: 'home' , component: HomeComponent
  },
  {
    path: 'login' , component: LoginComponent
  },
  {
    path: 'register' , component: RegisterComponent
  },
  {
    path: 'dashboard' , component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
