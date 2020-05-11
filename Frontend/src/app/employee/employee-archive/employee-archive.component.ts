import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Ishift } from 'src/app/employee/interfaces/employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-archive',
  templateUrl: './employee-archive.component.html',
  styleUrls: ['./employee-archive.component.scss']
})
export class EmployeeArchiveComponent implements OnInit {

  @Input('id') id:string;

  public employees = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Ishift[]>(environment.apiUrl + '/employee/employeearchive').subscribe(data => {
      return this.employees = data;
      console.log(data);
    });
  }

  seeData(id){
    this.http.get<Ishift[]>(environment.apiUrl + '/employee/employeearchive').subscribe(data => {
      return this.employees = data;
      console.log(data);
    });
  }

}
