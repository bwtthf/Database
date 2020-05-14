import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

import { Food_SalesService } from '../services/food_sales.service'

@Component({
  selector: 'app-food-sales',
  templateUrl: './food_sales.component.html',
  styleUrls: ['./food_sales.component.scss']
})
export class Food_SalesComponent implements OnInit {

  user: firebase.User;

  food_sale: any;

  food_sales = [];

  constructor(
    private food_salesService: Food_SalesService,
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
    this.food_salesService.getAllFood_Sales().subscribe((data: any[]) => {
      // console.log(data);
      this.food_sales = data;
    });
    this.router.events.subscribe((event) => {
      this.food_salesService.getAllFood_Sales().subscribe((data: any[]) => {
        // console.log(data);
        this.food_sales = data;
      });
    });
  }
}
