import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IshiftAvailable } from 'src/app/employee/interfaces/employee';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-available-month',
  templateUrl: './shift-available.component.html',
  styleUrls: ['./shift-available.component.scss']
})
export class ShiftAvailableComponent implements OnInit {

  public employees = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  seeData(id){
    if(id == 1){
      this.http.get<IshiftAvailable[]>(environment.apiUrl + '/employee/shiftavailable/Cook').subscribe(data => {
        //console.log(data);
        return this.employees = data;
      });
    }
    if(id == 2){
      this.http.get<IshiftAvailable[]>(environment.apiUrl + '/employee/shiftavailable/Waiter').subscribe(data => {
        //console.log(data);
        return this.employees = data;
      });
    }
    if(id == 3){
      this.http.get<IshiftAvailable[]>(environment.apiUrl + '/employee/shiftavailable/Bartender').subscribe(data => {
        //console.log(data);
        return this.employees = data;
      });
    }
    if(id == 4){
      this.http.get<IshiftAvailable[]>(environment.apiUrl + '/employee/shiftavailable/Manager').subscribe(data => {
        //console.log(data);
        return this.employees = data;
      });
    }
  }
}
