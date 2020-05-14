import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

import { SalesService } from '../services/sales.service'

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  user: firebase.User;

  sale: any;

  sales = [];

  constructor(
    private salesService: SalesService,
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
    this.salesService.getAllSales().subscribe((data: any[]) => {
      // console.log(data);
      this.sales = data;
    });
    this.router.events.subscribe((event) => {
      this.salesService.getAllSales().subscribe((data: any[]) => {
        // console.log(data);
        this.sales = data;
      });
    });
  }

}
