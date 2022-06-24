import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {NavbarComponent} from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FoodComponent } from './components/food/food.component';
import { CompenstaionComponent } from './components/compenstaion/compenstaion.component';
import { FooddataviewComponent } from './components/fooddataview/fooddataview.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersdataviewComponent } from './components/ordersdataview/ordersdataview.component';
import { CouriersComponent } from './components/couriers/couriers.component';
import { CustomersComponent } from './components/customers/customers.component';
import { LoadingspinnerComponent } from './components/loadingspinner/loadingspinner.component';
import { HomeComponent } from './components/home/home.component';
import { CallsComponent } from './components/calls/calls.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FoodComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    FoodComponent,
    CompenstaionComponent,
    FooddataviewComponent,
    OrdersComponent,
    OrdersdataviewComponent,
    CouriersComponent,
    CustomersComponent,
    LoadingspinnerComponent,
    HomeComponent,
    CallsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
