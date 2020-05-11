import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PerishablesService {

  constructor(private httpClient: HttpClient) { }

  public getAllPerishableItems() {
    return this.httpClient.get(environment.apiUrl + '/inventory_perishables/getAllPerishableItems');
  }

  public getOnePerishableItem(perishablesItem){
    return this.httpClient.post(environment.apiUrl + '/inventory_perishables/getOnePerishableItem', perishablesItem);
  }

  public postOnePerishableItem(perishablesItem) {
    return this.httpClient.post(environment.apiUrl + '/inventory_perishables/postOnePerishableItem', perishablesItem);
  }

  public deleteOnePerishableItem(perishablesItem){
    return this.httpClient.post(environment.apiUrl + '/inventory_perishables/deleteOnePerishableItem', perishablesItem);
  }

  public updateOnePerishableItem(perishablesItem){
    return this.httpClient.post(environment.apiUrl + '/inventory_perishables/updateOnePerishableItem', perishablesItem);
  }

}
