import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddOrEditSalesService {

  constructor(private httpClient: HttpClient) { }

  public addOrUpdateItemToSales(salesItemInfo) {
    console.log(salesItemInfo)
    return this.httpClient.post(environment.apiUrl + '/add_or_edit_sales/addOrUpdateItemToSales', salesItemInfo);
  }

  public getSalesBySalesId(sales_id){
    return this.httpClient.post(environment.apiUrl + '/add_or_edit_sales/getSalesBySalesId', sales_id);;
  }

}
