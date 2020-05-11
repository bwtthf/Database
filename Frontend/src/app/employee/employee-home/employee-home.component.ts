import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss']
})
export class EmployeeHomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(environment.apiUrl + '/employee/employee1').subscribe(data => {
      console.log(data);
    });
  }



}
