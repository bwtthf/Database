import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrls: ['./drink-menu.component.scss']
})
export class DrinkMenuComponent implements OnInit {

  drink: any;

  drinks = [];

  constructor() { }

  ngOnInit() {
  }

  addRow(){
  }

  editRow(drink_id){
  }

  deleteRow(drink_id){
  }
  
}
