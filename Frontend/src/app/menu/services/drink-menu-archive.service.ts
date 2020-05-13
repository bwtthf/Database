import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrinkMenuArchiveService {

  constructor(private httpClient: HttpClient) { }

  public getAllDrinksInDrinkMenuArchive() {
    return this.httpClient.get(environment.apiUrl + '/drink_menu_archive/getAllDrinksInDrinkMenuArchive');
  }

  public deleteDrinkFromDrinkMenuArchive(drink_id) {
    return this.httpClient.post(environment.apiUrl + '/drink_menu_archive/deleteDrinkFromDrinkMenuArchive', drink_id);
  }

}
