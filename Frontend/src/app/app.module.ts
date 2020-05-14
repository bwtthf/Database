import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighchartsChartModule } from 'highcharts-angular';

import { environment } from '../environments/environment';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { NonPerishablesComponent } from './inventory/non-perishables/non-perishables.component';
import { PerishablesComponent } from './inventory/perishables/perishables.component';
import { PerishablesModalComponent } from './inventory/components/perishables-modal/perishables-modal.component';
import { NonPerishablesModalComponent } from './inventory/components/non-perishables-modal/non-perishables-modal.component';
import { ShiftMonthComponent } from './employee/shift-month/shift-month.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { ShiftAvailableComponent } from './employee/shift-available/shift-available.component';
import { EmployeeArchiveComponent } from './employee/employee-archive/employee-archive.component';
import { NonPerishablesQueryFormComponent } from './inventory/components/non-perishables-query-form/non-perishables-query-form.component';
import { PerishablesQueryFormComponent } from './inventory/components/perishables-query-form/perishables-query-form.component';
import { InventoryAnalyticsComponent } from './inventory/inventory-analytics/inventory-analytics.component';
import { InventoryAnalyticsQueryFormComponent } from './inventory/components/inventory-analytics-query-form/inventory-analytics-query-form.component';
import { FoodMenuComponent } from './menu/food-menu/food-menu.component';
import { DrinkMenuComponent } from './menu/drink-menu/drink-menu.component';
import { DrinkMenuArchiveComponent } from './menu/drink-menu-archive/drink-menu-archive.component';
import { SeasonalDrinksComponent } from './menu/seasonal-drinks/seasonal-drinks.component';
import { AddOrEditDrinkMenuComponent } from './menu/components/add-or-edit-drink-menu/add-or-edit-drink-menu.component';
import { AddOrEditFoodMenuComponent } from './menu/components/add-or-edit-food-menu/add-or-edit-food-menu.component';


import { SalesComponent } from './sales/sales/sales.component';
import { AddOrEditSalesComponent } from './sales/components/add-or-edit-sales/add-or-edit-sales.component';
import { Food_SalesComponent } from './sales/food_sales/food_sales.component';
import { Drink_SalesComponent } from './sales/drink_sales/drink_sales.component';
import { Hourly_SalesComponent } from './sales/hourly_sales/hourly_sales.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    NonPerishablesComponent,
    PerishablesComponent,
    PerishablesModalComponent,
    NonPerishablesModalComponent,
    ShiftMonthComponent,
    EmployeeHomeComponent,
    ShiftAvailableComponent,
    EmployeeArchiveComponent,
    NonPerishablesQueryFormComponent,
    PerishablesQueryFormComponent,
    InventoryAnalyticsComponent,
    InventoryAnalyticsQueryFormComponent,
    FoodMenuComponent,
    DrinkMenuComponent,
    DrinkMenuArchiveComponent,
    SeasonalDrinksComponent,
    AddOrEditDrinkMenuComponent,

    AddOrEditFoodMenuComponent,

    SalesComponent,
    AddOrEditSalesComponent,
    Food_SalesComponent,
    Drink_SalesComponent,
    Hourly_SalesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp( environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NonPerishablesModalComponent, 
    PerishablesModalComponent
  ]
})

export class AppModule { }
