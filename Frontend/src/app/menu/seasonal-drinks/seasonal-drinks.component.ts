import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { SeasonalDrinksService } from '../services/seasonal-drinks.service';

@Component({
  selector: 'app-seasonal-drinks',
  templateUrl: './seasonal-drinks.component.html',
  styleUrls: ['./seasonal-drinks.component.scss']
})
export class SeasonalDrinksComponent implements OnInit {

  user: firebase.User;

  drink: any;

  drinks = [];

  constructor(
    private seasonalDrinksService: SeasonalDrinksService,
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
    this.seasonalDrinksService.getAllSeasonalDrinks().subscribe((data: any[]) => {
      // console.log(data);
      this.drinks = data;
    });
    this.router.events.subscribe((event) => {
      this.seasonalDrinksService.getAllSeasonalDrinks().subscribe((data: any[]) => {
        // console.log(data);
        this.drinks = data;
      });
    });
  }

  editRow(drink_id) {
    this.router.navigate(['add_or_edit_drink_menu', drink_id]);
  }

}
