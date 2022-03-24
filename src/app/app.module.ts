import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { Childcomp1Component } from './parent/childcomp1/childcomp1.component';
import { Childcomp2Component } from './parent/childcomp2/childcomp2.component';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ContestComponent } from './contest/contest.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthService } from './auth.service';
import { FilterPipe } from './filter.pipe';





@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Childcomp1Component,
    Childcomp2Component,
    WeatherComponent,
    HomeComponent,
    ContestComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
    
    
    
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
