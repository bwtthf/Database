import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../auth/auth.service';
import { NonPerishablesService } from '../services/non-perishables.service';

import { NonPerishablesModalComponent } from '../components/non-perishables-modal/non-perishables-modal.component';

@Component({
  selector: 'app-non-perishables',
  templateUrl: './non-perishables.component.html',
  styleUrls: ['./non-perishables.component.scss']
})
export class NonPerishablesComponent implements OnInit {

  @ViewChild('non_perishables_accordion', { static: true }) accordion: NgbAccordion;

  user: firebase.User;

  panelID: any;
  panelEventNextState: any;

  nonPerishablesItem: any;

  nonPerishablesItems = [];

  constructor(
    public modalService: NgbModal,
    private nonPerishablesService: NonPerishablesService,
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
    this.nonPerishablesService.sendAdvanceQueryRequest$.subscribe((data) => {
      if (this.panelEventNextState === true) {
        this.accordion.toggle(this.panelID);
      }
      this.nonPerishablesItems = data;
    });
  }

  ngOnInit() {
    this.nonPerishablesService.getAllNonPerishableItems().subscribe((data: any[]) => {
      // console.log(data);
      this.nonPerishablesItems = data;
    });
  }

  addRow() {
    if (this.panelEventNextState === true) {
      this.accordion.toggle(this.panelID);
    }

    this.nonPerishablesItem = {
      "item_id": '',
      "total_price": '',
      "date_ordered": '',
      "date_received": '',
      "item": '',
      "condition": ''
    };

    const modalRef = this.modalService.open(NonPerishablesModalComponent);
    modalRef.componentInstance.nonPerishablesItem = this.nonPerishablesItem;
    modalRef.result.then((result) => {
      if (result) {
        // console.log(result);
        this.nonPerishablesService.postOneNonPerishableItem(this.nonPerishablesItem)
          .subscribe((data) => {

            this.nonPerishablesItem.item_id = '';
            this.nonPerishablesItem.total_price = '';
            this.nonPerishablesItem.date_ordered = '';
            this.nonPerishablesItem.date_received = '';
            this.nonPerishablesItem.item = '';
            this.nonPerishablesItem.condition = '';

            this.nonPerishablesService.getAllNonPerishableItems().subscribe((data: any[]) => {
              // console.log(data);
              this.nonPerishablesItems = data;
            })
          });
      }
    }, (reason) => {

    });
  }

  editRow(item_id: any) {
    if (this.panelEventNextState === true) {
      this.accordion.toggle(this.panelID);
    }

    this.nonPerishablesItem = {
      "item_id": item_id,
      "total_price": '',
      "date_ordered": '',
      "date_received": '',
      "item": '',
      "condition": ''
    };

    this.nonPerishablesService.getOneNonPerishableItem(this.nonPerishablesItem).subscribe((data) => {

      this.nonPerishablesItem.item_id = data[0].item_id;
      this.nonPerishablesItem.total_price = data[0].total_price;
      if (data[0].date_ordered) {
        this.nonPerishablesItem.date_ordered = {
          "year": parseInt(data[0].date_ordered.split('-')[0]),
          "month": parseInt(data[0].date_ordered.split('-')[1]),
          "day": parseInt(data[0].date_ordered.split('-')[2]),
        };
      } else {
        this.nonPerishablesItem.date_ordered = ''
      }
      if (data[0].date_received) {
        this.nonPerishablesItem.date_received = {
          "year": parseInt(data[0].date_received.split('-')[0]),
          "month": parseInt(data[0].date_received.split('-')[1]),
          "day": parseInt(data[0].date_received.split('-')[2]),
        };
      } else {
        this.nonPerishablesItem.date_received = ''
      }

      this.nonPerishablesItem.item = data[0].item;
      this.nonPerishablesItem.condition = data[0].condition;

      const modalRef = this.modalService.open(NonPerishablesModalComponent);
      modalRef.componentInstance.nonPerishablesItem = this.nonPerishablesItem;
      modalRef.result.then((result) => {
        if (result) {
          // console.log(result);

          this.nonPerishablesItem.item_id = result.item_id;
          this.nonPerishablesItem.total_price = result.total_price;
          this.nonPerishablesItem.date_ordered = result.date_ordered;
          this.nonPerishablesItem.date_received = result.date_received;
          this.nonPerishablesItem.item = result.item;
          this.nonPerishablesItem.condition = result.condition;

          this.nonPerishablesService.updateOneNonPerishableItem(this.nonPerishablesItem).subscribe((data) => {
            this.nonPerishablesItem.item_id = '';
            this.nonPerishablesItem.total_price = '';
            this.nonPerishablesItem.date_ordered = '';
            this.nonPerishablesItem.date_received = '';
            this.nonPerishablesItem.item = '';
            this.nonPerishablesItem.condition = '';

            this.nonPerishablesService.getAllNonPerishableItems().subscribe((data: any[]) => {
              // console.log(data);
              this.nonPerishablesItems = data;
            })
          });
        }
      }, (reason) => {

      });
    });
  }

  deleteRow(item_id: any) {
    if (this.panelEventNextState === true) {
      this.accordion.toggle(this.panelID);
    }

    this.nonPerishablesItem = {
      "item_id": item_id,
      "total_price": '',
      "date_ordered": '',
      "date_received": '',
      "item": '',
      "condition": ''
    };

    this.nonPerishablesService.deleteOneNonPerishableItem(this.nonPerishablesItem).subscribe((data) => {

      this.nonPerishablesItem.item_id = '';
      this.nonPerishablesItem.total_price = '';
      this.nonPerishablesItem.date_ordered = '';
      this.nonPerishablesItem.date_received = '';
      this.nonPerishablesItem.item = '';
      this.nonPerishablesItem.condition = '';

      this.nonPerishablesService.getAllNonPerishableItems().subscribe((data: any[]) => {
        this.nonPerishablesItems = data;
      })
    });
  }

  detectPanelChange($event: NgbPanelChangeEvent) {
    // console.log($event);
    this.panelID = $event.panelId;
    this.panelEventNextState = $event.nextState;
  }

}
