import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class NonPerishablesService {

  // private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get('/inventory/getAllNonPerishable');
    // return this.httpClient.get(this.REST_API_SERVER + '/inventory/getAllNonPerishable');
  }

}
