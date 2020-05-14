import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Food_SalesService {

  constructor(private httpClient: HttpClient) { }

  public getAllFood_Sales() {
    return this.httpClient.get(environment.apiUrl + '/food_sales/getAllFood_Sales');
  }

}
