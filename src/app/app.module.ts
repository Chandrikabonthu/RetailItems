import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingMenuComponent } from './shopping-menu/shopping-menu.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MatButtonModule, MatDividerModule, MatIconModule, MatNavList, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VegComponent } from './veg/veg.component';
import { OrderdComponent } from './orderd/orderd.component';
import { DallItemsComponent } from './dall-items/dall-items.component';
import { SoapComponent } from './soap/soap.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    RegisterComponent,
    ShoppingMenuComponent,
    ForgotComponent,
  
    VegComponent,
    OrderdComponent,
    DallItemsComponent,
    SoapComponent,
  
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {path:'signup',component:RegisterComponent},
      {path:'login',component:LoginComponent},
      {path:'cancel',component:HomeComponent},
       {path:'forgot',component:ForgotComponent},
      {path:'menu',component:ShoppingMenuComponent},
      {path:'',component:HomeComponent},
      {path:'veg',component:VegComponent},
      {path:'order',component:OrderdComponent},
      {path:'dall',component:DallItemsComponent},
      {path:'soap',component:SoapComponent}

    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
