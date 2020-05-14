import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { AuthService } from '../../../auth/auth.service';
import { AddOrEditSalesService } from '../../services/add-or-edit-sales.service';

@Component({
  selector: 'app-add-or-edit-sales',
  templateUrl: './add-or-edit-sales.component.html',
  styleUrls: ['./add-or-edit-sales.component.scss']
})
export class AddOrEditSalesComponent implements OnInit {

  user: firebase.User;

  addOrEditSalesForm;

  categories: any;
  alcoholic_true_false: any = ['True', 'False'];

  sales_id: any;

  constructor(
    private addOrEditSalesService: AddOrEditSalesService,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
        if (this.user === undefined || this.user === null) {
          this.router.navigate(['/login']);
        }
      });
    this.addOrEditSalesForm = this.formBuilder.group({
      receipt_id: null,
      employee_id: null,
      time_stamp: null,
      total_sales: null
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.sales_id = params.sales_id;
      if (this.sales_id != null && this.sales_id != undefined && this.sales_id != '') {
        this.addOrEditSalesService.getSalesBySalesId({ "sales_id": this.sales_id }).subscribe((data) => {
          // console.log(data);
          this.addOrEditSalesForm.controls['receipt_id'].setValue(data[0].receipt_id);
          this.addOrEditSalesForm.controls['employee_id'].setValue(data[0].employee_id);
          this.addOrEditSalesForm.controls['time_stamp'].setValue(data[0].time_stamp);
          this.addOrEditSalesForm.controls['total_sales'].setValue(data[0].total_sales);
        });
      }
    });
  }

  onSubmit(salesItemInfo) {
    console.log(salesItemInfo);
    if (this.sales_id != null && this.sales_id != undefined && this.sales_id != '') {
      salesItemInfo.sales_id = this.sales_id;
    }
    this.addOrEditSalesService.addOrUpdateItemToSales(salesItemInfo).subscribe((data) => {
    });
    this.addOrEditSalesForm.reset();
    this.location.back();
  }

  cancel($event) {
    $event.preventDefault()
    this.location.back();
  }

}
