import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import * as Highcharts from 'highcharts';

import { AuthService } from '../../auth/auth.service';
import { InventoryAnalyticsService } from '../services/inventory-analytics.service';

@Component({
  selector: 'app-inventory-analytics',
  templateUrl: './inventory-analytics.component.html',
  styleUrls: ['./inventory-analytics.component.scss']
})
export class InventoryAnalyticsComponent implements OnInit {

  @ViewChild('inventory_analytics_accordion', { static: true }) accordion: NgbAccordion;

  user: firebase.User;

  panelID: any;
  panelEventNextState: any;

  perishableItems = [];
  nonPerishableItems = [];
  perishableAndNonPerishableItems = [];

  total_expenses_chart: typeof Highcharts = Highcharts;
  non_perishables_expenses_chart: typeof Highcharts = Highcharts;
  perishables_expenses_chart: typeof Highcharts = Highcharts;

  total_expenses_chart_options: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Total expenses per year'
    },
    xAxis: {
      title: {
        text: 'Year'
      },
      categories: ['2018', '2019', '2020'],
    },
    yAxis: {
      title: {
        text: 'Amount of money'
      }
    },
    series: [{
      name: 'Amount of money',
      data: [0, 0, 0],
      type: 'bar',
      showInLegend: false
    }]
  };

  non_perishables_expenses_chart_options: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Total expenses for non perishable items'
    },
    xAxis: {
      title: {
        text: 'Month and year'
      },
      categories: ['01-2018', '01-2019', '01-2020'],
    },
    yAxis: {
      title: {
        text: 'Amount of money'
      }
    },
    series: [{
      name: 'Amount of money',
      data: [0, 0, 0],
      type: 'line',
      showInLegend: false
    }]
  };

  perishables_expenses_chart_options: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Total expenses per perishable items'
    },
    xAxis: {
      title: {
        text: 'Month and year'
      },
      categories: ['01-2018', '01-2019', '01-2020'],
    },
    yAxis: {
      title: {
        text: 'Amount of money'
      }
    },
    series: [{
      name: 'Amount of money',
      data: [0, 0, 0],
      type: 'line',
      showInLegend: false
    }]
  };

  constructor(
    public modalService: NgbModal,
    private inventoryAnalyticsService: InventoryAnalyticsService,
    private auth: AuthService,
    private router: Router
  ) {
    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
        if (this.user === undefined || this.user === null) {
          this.router.navigate(['/login']);
        }
      });

    this.inventoryAnalyticsService.sendPerishablesAndNonPerishablesQueryRequest$.subscribe((data) => {
      if (this.panelEventNextState === true) {
        this.accordion.toggle(this.panelID);
      }
      this.perishableAndNonPerishableItems = data;

      var categories = [];
      var series_data = [];

      this.perishableAndNonPerishableItems.forEach((element) => {
        categories.push(element.year);
        series_data.push(element.total_price);
      })

      this.total_expenses_chart_options = {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Total expenses per year'
        },
        xAxis: {
          title: {
            text: 'Year'
          },
          categories: categories,
        },
        yAxis: {
          title: {
            text: 'Amount of money'
          }
        },
        series: [{
          name: 'Amount of money',
          data: series_data,
          type: 'bar',
          showInLegend: false
        }]
      };

    });

    this.inventoryAnalyticsService.sendPerishablesQueryRequest$.subscribe((data) => {
      if (this.panelEventNextState === true) {
        this.accordion.toggle(this.panelID);
      }
      this.perishableItems = data;


      var categories = [];
      var series_data = [];

      this.perishableItems.forEach((element) => {
        categories.push(element.month + '-' + element.year);
        series_data.push(element.total_price);
      });

      this.perishables_expenses_chart_options = {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Total expenses per perishable items'
        },
        xAxis: {
          title: {
            text: 'Month and year'
          },
          categories: categories,
        },
        yAxis: {
          title: {
            text: 'Amount of money'
          }
        },
        series: [{
          name: 'Amount of money',
          data: series_data,
          type: 'line',
          showInLegend: false
        }]
      };


    });

    this.inventoryAnalyticsService.sendNonPerishablesQueryRequest$.subscribe((data) => {
      if (this.panelEventNextState === true) {
        this.accordion.toggle(this.panelID);
      }
      this.nonPerishableItems = data;


      var categories = [];
      var series_data = [];

      this.nonPerishableItems.forEach((element) => {
        categories.push(element.month + '-' + element.year);
        series_data.push(element.total_price);
      });

      this.non_perishables_expenses_chart_options = {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Total expenses for non perishable items'
        },
        xAxis: {
          title: {
            text: 'Month and year'
          },
          categories: categories,
        },
        yAxis: {
          title: {
            text: 'Amount of money'
          }
        },
        series: [{
          name: 'Amount of money',
          data: series_data,
          type: 'line',
          showInLegend: false
        }]
      };

    });
  }

  ngOnInit() {
    this.inventoryAnalyticsService.queryPerishableAndNonPerishableItems(null).subscribe((data: any[]) => {
      this.perishableAndNonPerishableItems = data;

      var categories = [];
      var series_data = [];

      this.perishableAndNonPerishableItems.forEach((element) => {
        categories.push(element.year);
        series_data.push(element.total_price);
      })

      this.total_expenses_chart_options = {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Total expenses per year'
        },
        xAxis: {
          title: {
            text: 'Year'
          },
          categories: categories,
        },
        yAxis: {
          title: {
            text: 'Amount of money'
          }
        },
        series: [{
          name: 'Amount of money',
          data: series_data,
          type: 'bar',
          showInLegend: false
        }]
      };

    });
    this.inventoryAnalyticsService.queryPerishableItems(null).subscribe((data: any[]) => {
      this.perishableItems = data;

      var categories = [];
      var series_data = [];

      this.perishableItems.forEach((element) => {
        categories.push(element.month + '-' + element.year);
        series_data.push(element.total_price);
      });

      this.perishables_expenses_chart_options = {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Total expenses per perishable items'
        },
        xAxis: {
          title: {
            text: 'Month and year'
          },
          categories: categories,
        },
        yAxis: {
          title: {
            text: 'Amount of money'
          }
        },
        series: [{
          name: 'Amount of money',
          data: series_data,
          type: 'line',
          showInLegend: false
        }]
      };

    });
    this.inventoryAnalyticsService.queryNonPerishableItems(null).subscribe((data: any[]) => {
      this.nonPerishableItems = data;

      var categories = [];
      var series_data = [];

      this.nonPerishableItems.forEach((element) => {
        categories.push(element.month + '-' + element.year);
        series_data.push(element.total_price);
      });

      this.non_perishables_expenses_chart_options = {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Total expenses for non perishable items'
        },
        xAxis: {
          title: {
            text: 'Month and year'
          },
          categories: categories,
        },
        yAxis: {
          title: {
            text: 'Amount of money'
          }
        },
        series: [{
          name: 'Amount of money',
          data: series_data,
          type: 'line',
          showInLegend: false
        }]
      };

    });
  }

  detectPanelChange($event: NgbPanelChangeEvent) {
    // console.log($event);
    this.panelID = $event.panelId;
    this.panelEventNextState = $event.nextState;
  }

}
