import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Ishift } from 'src/app/employee/interfaces/employee';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-shift-month',
  templateUrl: './shift-month.component.html',
  styleUrls: ['./shift-month.component.scss']
})
export class ShiftMonthComponent implements OnInit {

  public employees = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(environment.apiUrl + '/employee/employee1').subscribe(data => {
      console.log(data);
    });
  }

  seeData(id){
    this.http.get<Ishift[]>(environment.apiUrl + '/employee/shiftmonth/' + id).subscribe(data => {
      return this.employees = data;
      console.log(data);
    });
  }
}
