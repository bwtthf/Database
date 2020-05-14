import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

import { Drink_SalesService } from '../services/drink_sales.service'

@Component({
  selector: 'app-sales',
  templateUrl: './drink_sales.component.html',
  styleUrls: ['./drink_sales.component.scss']
})
export class Drink_SalesComponent implements OnInit {

  user: firebase.User;

  drink_sale: any;

  drink_sales = [];

  constructor(
    private drink_salesService: Drink_SalesService,
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
    this.drink_salesService.getAllDrink_Sales().subscribe((data: any[]) => {
      // console.log(data);
      this.drink_sales = data;
    });
    this.router.events.subscribe((event) => {
      this.drink_salesService.getAllDrink_Sales().subscribe((data: any[]) => {
        // console.log(data);
        this.drink_sales = data;
      });
    });
  }
}
