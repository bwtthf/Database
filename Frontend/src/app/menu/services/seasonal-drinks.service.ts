import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeasonalDrinksService {

  constructor(private httpClient: HttpClient) { }

  public getAllSeasonalDrinks(){
    return this.httpClient.get(environment.apiUrl + '/seasonal_drinks/getAllSeasonalDrinks')
  }

}
