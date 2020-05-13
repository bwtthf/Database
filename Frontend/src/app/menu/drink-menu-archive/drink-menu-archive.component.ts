import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink-menu-archive',
  templateUrl: './drink-menu-archive.component.html',
  styleUrls: ['./drink-menu-archive.component.scss']
})
export class DrinkMenuArchiveComponent implements OnInit {

  drink: any;

  drinks = [];

  constructor() { }

  ngOnInit() {
  }

  deleteRow(drink_id){
  }

}
