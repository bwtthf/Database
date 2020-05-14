import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Drink_SalesService {

  constructor(private httpClient: HttpClient) { }

  public getAllDrink_Sales() {
    return this.httpClient.get(environment.apiUrl + '/drink_sales/getAllDrink_Sales');
  }

}
