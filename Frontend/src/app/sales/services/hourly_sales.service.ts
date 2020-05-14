import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Hourly_SalesService {

  constructor(private httpClient: HttpClient) { }

  public getAllHourly_Sales() {
    return this.httpClient.get(environment.apiUrl + '/hourly_sales/getAllHourly_Sales');
  }

}
