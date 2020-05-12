import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryAnalyticsService {

  sendPerishablesAndNonPerishablesQueryRequest$: Observable<any>;
  private sendPerishablesAndNonPerishablesQueryRequestMethod = new Subject<any>();

  sendPerishablesQueryRequest$: Observable<any>;
  private sendPerishablesQueryRequestMethod = new Subject<any>();

  sendNonPerishablesQueryRequest$: Observable<any>;
  private sendNonPerishablesQueryRequestMethod = new Subject<any>();

  constructor(private httpClient: HttpClient) {
    this.sendPerishablesAndNonPerishablesQueryRequest$ = this.sendPerishablesAndNonPerishablesQueryRequestMethod.asObservable();
    this.sendPerishablesQueryRequest$ = this.sendPerishablesQueryRequestMethod.asObservable();
    this.sendNonPerishablesQueryRequest$ = this.sendNonPerishablesQueryRequestMethod.asObservable();
  }

  public sendPerishablesAndNonPerishablesQueryRequest(inventoryAnalyticsQueryInfo){
    this.queryPerishableAndNonPerishableItems(inventoryAnalyticsQueryInfo).subscribe((data: any[]) => {
      this.sendPerishablesAndNonPerishablesQueryRequestMethod.next(data);
    });
  }

  public sendPerishablesQueryRequest(inventoryAnalyticsQueryInfo){
    this.queryPerishableItems(inventoryAnalyticsQueryInfo).subscribe((data: any[]) => {
      this.sendPerishablesQueryRequestMethod.next(data);
    });
  }

  public sendNonPerishablesQueryRequest(inventoryAnalyticsQueryInfo){
    this.queryNonPerishableItems(inventoryAnalyticsQueryInfo).subscribe((data: any[]) => {
      this.sendNonPerishablesQueryRequestMethod.next(data);
    });
  }

  public queryPerishableAndNonPerishableItems(inventoryAnalyticsQueryInfo){
    return this.httpClient.post(environment.apiUrl + '/inventory_analytics/queryPerishableAndNonPerishableItems', inventoryAnalyticsQueryInfo)
  }

  public queryPerishableItems(inventoryAnalyticsQueryInfo){
    return this.httpClient.post(environment.apiUrl + '/inventory_analytics/queryPerishableItems', inventoryAnalyticsQueryInfo)
  }

  public queryNonPerishableItems(inventoryAnalyticsQueryInfo){
    return this.httpClient.post(environment.apiUrl + '/inventory_analytics/queryNonPerishableItems', inventoryAnalyticsQueryInfo)
  }

}
