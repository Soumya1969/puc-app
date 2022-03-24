import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from 'src/app/parent/parent.component'
import { ContestComponent } from './contest/contest.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { WeatherComponent } from './weather/weather.component';



const routes: Routes = [
  {
    path: 'dashboard/card',
    component:ParentComponent
  },
  {
    path: 'dashboard/weather',
    component:WeatherComponent
  },
  {
    path: 'dashboard/contest',
    component:ContestComponent
  },
  {
    path: 'dashboard',
    component:HomeComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: '',
    component:MainComponent
  }
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
