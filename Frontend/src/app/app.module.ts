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
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NonPerishablesModalComponent, 
    PerishablesModalComponent
  ]
})

export class AppModule { }
