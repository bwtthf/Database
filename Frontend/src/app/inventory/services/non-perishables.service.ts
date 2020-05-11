import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NonPerishablesService {

  sendAdvanceQueryRequest$: Observable<any>;
  private sendAdvanceQueryRequestMethod = new Subject<any>();

  // private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {
    this.sendAdvanceQueryRequest$ = this.sendAdvanceQueryRequestMethod.asObservable();
  }

  public getAllNonPerishableItems() {
    // return this.httpClient.get('/inventory_non_perishables/getAllNonPerishableItems');
    // return this.httpClient.get(this.REST_API_SERVER + '/inventory_non_perishables/getAllNonPerishableItems');
    return this.httpClient.get(environment.apiUrl + '/inventory_non_perishables/getAllNonPerishableItems');
  }

  public getOneNonPerishableItem(nonPerishablesItem) {
    return this.httpClient.post(environment.apiUrl + '/inventory_non_perishables/getOneNonPerishableItem', nonPerishablesItem);
  }

  public postOneNonPerishableItem(nonPerishablesItem) {
    return this.httpClient.post(environment.apiUrl + '/inventory_non_perishables/postOneNonPerishableItem', nonPerishablesItem);
  }

  public deleteOneNonPerishableItem(nonPerishablesItem) {
    return this.httpClient.post(environment.apiUrl + '/inventory_non_perishables/deleteOneNonPerishableItem', nonPerishablesItem);
  }

  public updateOneNonPerishableItem(nonPerishablesItem) {
    return this.httpClient.post(environment.apiUrl + '/inventory_non_perishables/updateOneNonPerishableItem', nonPerishablesItem);
  }

  public sendAdvanceQueryRequest(nonPerishablesQueryInfo) {
    this.queryNonPerishableItems(nonPerishablesQueryInfo).subscribe((data: any[]) => {
      this.sendAdvanceQueryRequestMethod.next(data);
    });
  }

  public queryNonPerishableItems(nonPerishablesQueryInfo){
    return this.httpClient.post(environment.apiUrl + '/inventory_non_perishables/queryNonPerishableItems', nonPerishablesQueryInfo)
  }

}
