import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ShoppingMenuComponent } from './shopping-menu/shopping-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    RegisterComponent,
   
    ForgotPasswordComponent,
    ShoppingMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {path:'signup',component:RegisterComponent},
      {path:'login',component:LoginComponent},
      {path:'cancel',component:HomeComponent},
      
      {path:'menu',component:ShoppingMenuComponent}
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
