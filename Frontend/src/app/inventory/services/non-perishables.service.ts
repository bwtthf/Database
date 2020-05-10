import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NonPerishablesService {

  // private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public getAllNonPerishable() {
    // return this.httpClient.get('/inventory/getAllNonPerishable');
    // return this.httpClient.get(this.REST_API_SERVER + '/inventory/getAllNonPerishable');
    return this.httpClient.get(environment.apiUrl + '/inventory/getAllNonPerishable');
  }

  public postOneNonPerishableItem(nonPerishablesItem) {
    return this.httpClient.post(environment.apiUrl + '/inventory/postOneNonPerishableItem', nonPerishablesItem);
  }

}
