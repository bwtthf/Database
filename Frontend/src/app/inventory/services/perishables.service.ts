import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PerishablesService {

  sendAdvanceQueryRequest$: Observable<any>;
  private sendAdvanceQueryRequestMethod = new Subject<any>();

  constructor(private httpClient: HttpClient) {
    this.sendAdvanceQueryRequest$ = this.sendAdvanceQueryRequestMethod.asObservable();
  }

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

  public sendAdvanceQueryRequest(perishablesQueryInfo) {
    this.queryPerishableItems(perishablesQueryInfo).subscribe((data: any[]) => {
      this.sendAdvanceQueryRequestMethod.next(data);
    });
  }

  public queryPerishableItems(perishablesQueryInfo){
    return this.httpClient.post(environment.apiUrl + '/inventory_perishables/queryPerishableItems', perishablesQueryInfo)
  }

}
