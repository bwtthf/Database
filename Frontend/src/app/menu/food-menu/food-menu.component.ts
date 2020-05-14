import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FoodMenuService } from '../services/food-menu.service'
import { AddOrEditFoodMenuComponent } from '../components/add-or-edit-food-menu/add-or-edit-food-menu.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit {

  user: firebase.User;

  food: any;
  timeframe: any;
  foods = [];
  
  panelID: any;
  panelEventNextState: any;


  constructor(
    public modalService: NgbModal,
    private foodMenuService: FoodMenuService,
    private auth: AuthService,
    private router: Router
  ) {
    this.auth.getUserState().subscribe(user => {
      this.user = user;
      if (this.user === undefined || this.user === null) {
        this.router.navigate(['/login']);
      }
     });   
  }

  ngOnInit() {
    this.foodMenuService.getAllFoods().subscribe((data: any[]) => {
      this.foods = data;
    });
    this.router.events.subscribe((event) => {
      this.foodMenuService.getAllFoods().subscribe((data: any[]) => {
        this.foods = data;
      });
    });
    
  }

  //fix this function -> refer to addOrEdit drinks
  
  viewMenu() {
    this.foodMenuService.getAllFoods().subscribe((data: any[]) => {
      this.foods = data;
    });
    this.router.events.subscribe((event) => {
      this.foodMenuService.getAllFoods().subscribe((data: any[]) => {
        this.foods = data;
      });
    });
  }

  deleteRow(food_id) {
    this.foodMenuService.deleteFood({ "food_id": food_id }).subscribe((data) => {
      this.foodMenuService.getAllFoods().subscribe((data: any[]) => {
        this.foods = data;
      })
    });
  }

  bestSeller() {
    this.foodMenuService.getBestSeller().subscribe((data: any[]) => {
      this.foods = data;
    })
  }

  leastPopular() {
    this.foodMenuService.getLeastPopular().subscribe((data: any[]) => {
      this.foods = data;
    })
  }

  topThreeCategory() {
    this.foodMenuService.getTopThreeCategories().subscribe((data: any[]) => {
      this.foods = data;
    })
  }

  topThreeTimePeriod() {
    this.foodMenuService.getTopThreeTimePeriod().subscribe((data: any[]) => {
      this.foods = data;
    })


  }

  bestSellerForHoliday() {
    this.foodMenuService.getBestSellerForHoliday().subscribe((data: any[]) => {
      this.foods = data;
    })

  }
}
