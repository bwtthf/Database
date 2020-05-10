import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NonPerishablesService {

  // private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public getAllNonPerishableItems() {
    // return this.httpClient.get('/inventory/getAllNonPerishableItems');
    // return this.httpClient.get(this.REST_API_SERVER + '/inventory/getAllNonPerishableItems');
    return this.httpClient.get(environment.apiUrl + '/inventory/getAllNonPerishableItems');
  }

  public getOneNonPerishableItem(nonPerishablesItem){
    return this.httpClient.post(environment.apiUrl + '/inventory/getOneNonPerishableItem', nonPerishablesItem);
  }

  public postOneNonPerishableItem(nonPerishablesItem) {
    return this.httpClient.post(environment.apiUrl + '/inventory/postOneNonPerishableItem', nonPerishablesItem);
  }

  public deleteOneNonPerishableItem(nonPerishablesItem){
    return this.httpClient.post(environment.apiUrl + '/inventory/deleteOneNonPerishableItem', nonPerishablesItem);
  }

  public updateOneNonPerishableItem(nonPerishablesItem){
    return this.httpClient.post(environment.apiUrl + '/inventory/updateOneNonPerishableItem', nonPerishablesItem);
  }

}
