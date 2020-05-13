import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component'
import { ShiftMonthComponent } from './employee/shift-month/shift-month.component'
import { EmployeeArchiveComponent } from './employee/employee-archive/employee-archive.component'
import { ShiftAvailableComponent } from './employee/shift-available/shift-available.component'

import { NonPerishablesComponent } from './inventory/non-perishables/non-perishables.component';
import { PerishablesComponent } from './inventory/perishables/perishables.component';
import { InventoryAnalyticsComponent } from './inventory/inventory-analytics/inventory-analytics.component';

import { FoodMenuComponent } from './menu/food-menu/food-menu.component';
import { DrinkMenuComponent } from './menu/drink-menu/drink-menu.component';
import { DrinkMenuArchiveComponent } from './menu/drink-menu-archive/drink-menu-archive.component';
import { SeasonalDrinksComponent } from './menu/seasonal-drinks/seasonal-drinks.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'inventory_non_perishables',
    component: NonPerishablesComponent
  },
  {
    path: 'inventory_perishables',
    component: PerishablesComponent
  },
  {
    path: 'inventory_analytics',
    component: InventoryAnalyticsComponent
  },
  {
    path: 'employee',
    component: EmployeeHomeComponent
  },
  {
    path: 'shiftmonth',
    component: ShiftMonthComponent
  },
  {
    path: 'shiftavailable',
    component: ShiftAvailableComponent
  },
  {
    path: 'employeearchive',
    component: EmployeeArchiveComponent
  },
  {
    path: 'foodmenu',
    component: FoodMenuComponent
  },
  {
    path: 'drinkmenu',
    component: DrinkMenuComponent
  },
  {
    path: 'drinkmenuarchive',
    component: DrinkMenuArchiveComponent
  },
  {
    path: 'seasonaldrinks',
    component: SeasonalDrinksComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
