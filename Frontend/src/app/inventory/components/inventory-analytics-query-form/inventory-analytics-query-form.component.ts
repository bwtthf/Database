import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InventoryAnalyticsService } from '../../services/inventory-analytics.service';

@Component({
  selector: 'app-inventory-analytics-query-form',
  templateUrl: './inventory-analytics-query-form.component.html',
  styleUrls: ['./inventory-analytics-query-form.component.scss']
})
export class InventoryAnalyticsQueryFormComponent implements OnInit {

  inventoryAnalyticsQueryForm;

  constructor(
    private formBuilder: FormBuilder,
    private inventoryAnalyticsService: InventoryAnalyticsService,
  ) {
    this.inventoryAnalyticsQueryForm = this.formBuilder.group({
      date_ordered_start: '',
      date_ordered_stop: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(inventoryAnalyticsQueryInfo) {
    // console.log(inventoryAnalyticsQueryInfo);
    this.inventoryAnalyticsService.sendPerishablesAndNonPerishablesQueryRequest(inventoryAnalyticsQueryInfo);
    this.inventoryAnalyticsService.sendPerishablesQueryRequest(inventoryAnalyticsQueryInfo);
    this.inventoryAnalyticsService.sendNonPerishablesQueryRequest(inventoryAnalyticsQueryInfo);
    this.inventoryAnalyticsQueryForm.reset();
  }

}
