import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { DrinkMenuArchiveService } from '../services/drink-menu-archive.service';

@Component({
  selector: 'app-drink-menu-archive',
  templateUrl: './drink-menu-archive.component.html',
  styleUrls: ['./drink-menu-archive.component.scss']
})
export class DrinkMenuArchiveComponent implements OnInit {

  user: firebase.User;

  drink: any;

  drinks = [];

  constructor(
    private drinkMenuArchiveService: DrinkMenuArchiveService,
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
    this.drinkMenuArchiveService.getAllDrinksInDrinkMenuArchive().subscribe((data: any[]) => {
      // console.log(data);
      this.drinks = data;
    });
  }

  deleteRow(drink_id) {
    this.drinkMenuArchiveService.deleteDrinkFromDrinkMenuArchive({"drink_id": drink_id}).subscribe((data) => {
      this.drinkMenuArchiveService.getAllDrinksInDrinkMenuArchive().subscribe((data: any[]) => {
        // console.log(data);
        this.drinks = data;
      });
    });
  }

}
