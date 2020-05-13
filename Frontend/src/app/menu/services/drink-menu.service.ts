import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrinkMenuService {

  constructor(private httpClient: HttpClient) { }

  public getAllDrinks() {
    return this.httpClient.get(environment.apiUrl + '/drink_menu/getAllDrinks');
  }

  public deleteDrink(drink_id){
    return this.httpClient.post(environment.apiUrl + '/drink_menu/deleteDrink', drink_id);
  }

}
