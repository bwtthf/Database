import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {

  constructor(private httpClient: HttpClient) { }

  public getAllFoods() {
    return this.httpClient.get(environment.apiUrl + '/foodmenu/getAllFoods');
  }

  public deleteFood(food_id) {
    return this.httpClient.post(environment.apiUrl + '/foodmenu/deleteFood', food_id);
  }

  public getBestSeller() {
    return this.httpClient.get(environment.apiUrl + '/foodmenu/getBestSeller');
  }

  public getLeastPopular() {
    return this.httpClient.get(environment.apiUrl + '/foodmenu/getLeastPopular')
  }

  public getTopThreeCategories() {
    return this.httpClient.get(environment.apiUrl + '/foodmenu/topThreeFoodCategories')
  }

  public getTopThreeTimePeriod() {
    return this.httpClient.get(environment.apiUrl + '/foodmenu/topThreeFoodTimePeriod')
  }

  public getBestSellerForHoliday() {
    return this.httpClient.get(environment.apiUrl + '/foodmenu/bestSellerForHoliday')
  }
}
