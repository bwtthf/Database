import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddOrEditDrinkMenuService {

  constructor(private httpClient: HttpClient) { }

  public getAllDistinctDrinkCatogories(){
    return this.httpClient.get(environment.apiUrl + '/add_or_edit_drink_menu/getAllDistinctDrinkCatogories');
  }

  public addOrUpdateItemToDrinkMenu(drinkMenuItemInfo) {
    return this.httpClient.post(environment.apiUrl + '/add_or_edit_drink_menu/addOrUpdateItemToDrinkMenu', drinkMenuItemInfo);
  }

  public getDrinkByDrinkId(drink_id){
    return this.httpClient.post(environment.apiUrl + '/add_or_edit_drink_menu/getDrinkByDrinkId', drink_id);;
  }

}
