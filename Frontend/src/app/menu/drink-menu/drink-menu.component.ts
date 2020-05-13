import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

import { DrinkMenuService } from '../services/drink-menu.service'

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrls: ['./drink-menu.component.scss']
})
export class DrinkMenuComponent implements OnInit {

  user: firebase.User;

  drink: any;

  drinks = [];

  constructor(
    private drinkMenuService: DrinkMenuService,
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
    // this.drinkMenuService.getAllDrinks().subscribe((data: any[]) => {
    //   this.drinks = data;
    // });
  }

  ngOnInit() {
    this.drinkMenuService.getAllDrinks().subscribe((data: any[]) => {
      // console.log(data);
      this.drinks = data;
    });
    this.router.events.subscribe((event) => {
      this.drinkMenuService.getAllDrinks().subscribe((data: any[]) => {
        // console.log(data);
        this.drinks = data;
      });
    });
  }

  addRow() {
    this.router.navigateByUrl('add_or_edit_drink_menu');
  }

  editRow(drink_id) {
    this.router.navigate(['add_or_edit_drink_menu', drink_id]);
  }

  deleteRow(drink_id) {
    this.drinkMenuService.deleteDrink({ "drink_id": drink_id }).subscribe((data) => {
      this.drinkMenuService.getAllDrinks().subscribe((data: any[]) => {
        // console.log(data);
        this.drinks = data;
      });
    });
  }

}
