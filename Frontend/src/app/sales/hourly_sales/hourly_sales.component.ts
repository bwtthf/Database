import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

import { Hourly_SalesService } from '../services/hourly_sales.service'

@Component({
  selector: 'app-sales',
  templateUrl: './hourly_sales.component.html',
  styleUrls: ['./hourly_sales.component.scss']
})
export class Hourly_SalesComponent implements OnInit {

  user: firebase.User;

  hourly_sale: any;

  hourly_sales = [];

  constructor(
    private hourly_salesService: Hourly_SalesService,
    private auth: AuthService,
    private router: Router
  ) {
    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
        if (this.user === undefined || this.user === null) {
          this.router.navigate(['/login']);
        }
      });
  }

  ngOnInit() {
    this.hourly_salesService.getAllHourly_Sales().subscribe((data: any[]) => {
      // console.log(data);
      this.hourly_sales = data;
    });
    this.router.events.subscribe((event) => {
      this.hourly_salesService.getAllHourly_Sales().subscribe((data: any[]) => {
        // console.log(data);
        this.hourly_sales = data;
      });
    });
  }
}
