import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seasonal-drinks',
  templateUrl: './seasonal-drinks.component.html',
  styleUrls: ['./seasonal-drinks.component.scss']
})
export class SeasonalDrinksComponent implements OnInit {

  drink: any;

  drinks = [];
  
  constructor() { }

  ngOnInit() {
  }

  editRow(){
  }

  deleteRow(drink_id){
  }

}
